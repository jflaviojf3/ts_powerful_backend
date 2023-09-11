const Services = require("./Services");
const database = require("../models");
const { compare } = require("bcryptjs");
const { sign, verify, decode} = require("jsonwebtoken");

class AuthServices extends Services {
  constructor() {
    super("Usuarios");
  }

  //Metodos especificos
  async pegaUmUsuarioLogin(dados) {
    const usuario = await database[this.nomeDoModelo].findOne({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      where: { email: dados.email },
    });

    if (!usuario) {
      //const erroJSON = JSON.stringify({ message: "" });
      throw new Error("Usuario não cadastrado");
    }

    const senhaConfere = await compare(dados.senha, usuario.senha);

    if (!senhaConfere) {
      throw new Error("Usuario ou senha invalido");
    }

    const token = sign(
      {
        id: usuario.id_usuarios,
        email: usuario.email,
      },
      process.env.JSONSECRET_AUTH,
      {
        expiresIn: 86400,
      }
    );

    return { token };
  }

  async criaTokenProvedor(dados) {
    const usuario = await database[this.nomeDoModelo].findOne({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      where: { email: dados.email },
    });

    if (!usuario) {
      throw new Error("Usuario não cadastrado");
    }

    if (dados.provedor !== usuario.provedor) {
      throw new Error("Usuario ou provedor Invalido" );
    }
    const token = sign(
      {
        id: usuario.id_usuarios,
        email: usuario.email,
      },
      process.env.JSONSECRET_AUTH,
      {
        expiresIn: 86400,
      }
    );
    return token;
  }

  async verificaToken(accessToken){
    try {
      verify(accessToken, process.env.JSONSECRET_AUTH);
      const { id, email } = await decode(accessToken);
      const req = {
        usuarioId: id,
        usuarioEmail: email
      }
      return req
    } catch (error) {
      return ({ menssage: "Usuario nao autorizado" });
    }
  }
}

module.exports = AuthServices;
