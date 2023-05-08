const database = require("../models");
const formata = require("../utils");
const { Op } = require("sequelize");

class PontoController {
  static async pegaTodosPontosUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
      const todosPontosUsuario = await database.Pontos.findAll({
        where: { id_usuarios: Number(id_usuario) },
      });
      return res.status(200).json(todosPontosUsuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmPontoUsuario(req, res) {
    const { id_ponto } = req.params;
    try {
      const umPonto = await database.Pontos.findOne({
        where: { id_pontos: Number(id_ponto) },
      });
      return res.status(200).json(umPonto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaPontoDoDiaUsuario(req, res) {
    const { id_usuario, dia } = req.params;
    const dataAtual = formata.formataData(dia);
    console.log("dataAtual: " + dataAtual);
    try {
      const umDiaPonto = await database.Pontos.findAll({
        where: {
          hora_ponto: {
            [Op.between]: [`${dataAtual} 00:00:00`, `${dataAtual} 23:59:59`],
          },
          id_usuarios: id_usuario,
        },
      });
      return res.status(200).json(umDiaPonto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPonto(req, res) {
    const { id_usuario } = req.params;
    const novoPonto = { ...req.body, id_usuarios: id_usuario };
    try {
      const umNovoPontoCriado = await database.Pontos.create(novoPonto);
      return res.status(200).json(umNovoPontoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const atualizaUsuario = req.body;
    try {
      await database.Usuarios.update(atualizaUsuario, {
        where: { id_usuarios: Number(id) },
      });
      const umUsuarioAtualizado = await database.Usuarios.findOne({
        where: { id_usuarios: Number(id) },
      });
      return res.status(200).json(umUsuarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaUsuario(req, res) {
    const { id } = req.params;
    try {
      await database.Usuarios.destroy({ where: { id_usuarios: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PontoController;
