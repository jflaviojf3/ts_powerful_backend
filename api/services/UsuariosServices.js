const Services = require("./Services");
const database = require("../models");
const { hash } = require("bcryptjs");

class UsuariosServices extends Services {
  constructor() {
    super("Usuarios");
  }

  //Metodos especificos
  async pegaUsuariosAtivos(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async pegaTodosOsUsuarios(where = {}) {
    return (
      database[this.nomeDoModelo]
        //.scope('todos')
        .findAll({
          attributes: {
            exclude: [
              "senha",
              "createdAt",
              "updatedAt",
              "deletedAt",
            ],
          },
          where: { ...where },
        })
    );
  }

  async atualizaUmUsuario(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados,
      {
        attributes: {
          exclude: [
            "senha",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        },
        where: { id_usuarios: where },
      },
      transacao
    );
  }

  async pegaUmUsuario(where) {
    return database[this.nomeDoModelo].findOne({
      attributes: {
        exclude: [
          "senha",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      where: { id_usuarios: where },
    });
  }

  async pegaNomeUsuario(where) {
    return database[this.nomeDoModelo].findAll({
      attributes: {
        exclude: [
          "senha",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      where: { nome: where },
    });
  }

  async validaUsuarioProvedor(dados) {
    //verificar se email já é cadastro
    const usuarioExiste = await this.pegaUmRegistro({
      attributes: {
        exclude: [
          "id_usuarios",
          "senha",
          "provedor",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      where: {
        email: dados.email,
      },
    });

    if (usuarioExiste) {
      try {
        if (dados.provedor) {
          if (usuarioExiste.provedor) {
            return false;
          } else {
            return false;
          }
        } else {
          throw new Error("Email já cadastrado");
        }
      } catch (e) {}
    } else {
      return true;
    }
  }

  async criaUsuario(dados) {
    //verificar se email já é cadastro
    const usuarioExiste = await this.pegaUmRegistro({
      attributes: {
        exclude: [
          "id_usuarios",
          "senha",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      where: {
        email: dados.email,
      },
    });

    if (usuarioExiste) {
      throw new Error("Email já cadastrado");
    }

    const senha = await hash(dados.senha, 6);
    dados = { ...dados, senha };
    return database[this.nomeDoModelo].create(dados);
  }

  async deletaUsuario(where) {
    return database[this.nomeDoModelo].destroy({
      attributes: {
        exclude: [
          "id_usuarios",
          "senha",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      where: { id_usuarios: where },
    });
  }
}

module.exports = UsuariosServices;
