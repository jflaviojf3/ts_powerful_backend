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

  static async pegaPeriodoPontoUsuario(req, res) {
    const { id_usuario, data_inicio, data_fim } = req.params;
    const dataInicio = formata.formataData(data_inicio);
    const dataFim = formata.formataData(data_fim);
    try {
      const periodoPonto = await database.Pontos.findAll({
        where: {
          hora_ponto: {
            [Op.between]: [`${dataInicio} 00:00:00`, `${dataFim} 23:59:59`],
          },
          id_usuarios: id_usuario,
        },
      });
      return res.status(200).json(periodoPonto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaPeriodoPontoUsuarioHoraBanco(req, res) {
    const { id_usuario, data_inicio, data_fim } = req.params;
    const dataInicio = formata.formataData(data_inicio);
    const dataFim = formata.formataData(data_fim);
    try {
      const periodoPontohBanco = await database.Pontos.findAll({
        attributes: [
          [database.sequelize.literal("DATE(hora_ponto)"), "data_ponto"],
          [
            database.sequelize.fn(
              "COUNT",
              database.sequelize.col("hora_ponto")
            ),
            "total_pontos",
          ]
        ],
        group: [database.sequelize.literal("DATE(hora_ponto)")],
        order: [database.sequelize.literal("data_ponto")],
        raw: true,
        where: {
          hora_ponto: {
            [Op.between]: [`${dataInicio} 00:00:00`, `${dataFim} 23:59:59`],
          },
          id_usuarios: id_usuario,
        },
      });
      // console.log(periodoPontohBanco.length);

      // for (let i = 0; i < periodoPontohBanco.length; i++ ) {
      //   let diaPonto = periodoPontohBanco[i].data_ponto
      //   console.log(diaPonto.replaceAll("-", ""));

      //   const periodoPonto = await database.Pontos.findAll({
      //     where: {
      //       hora_ponto: {
      //         [Op.between]: [`${diaPonto.replaceAll("-", "")} 00:00:00`, `${diaPonto.replaceAll("-", "")} 23:59:59`],
      //       },
      //       id_usuarios: id_usuario,
      //     },
      //   });
      // }
      return res.status(200).json(periodoPontohBanco);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPonto(req, res) {
    const { id_usuario } = req.params;
    const novoPonto = { ...req.body, id_usuarios: id_usuario };
    try {
      const umNovoPontoCriado = await database.Pontos.create(novoPonto);
      formata.criaAuditoriaPonto(
        `Ponto Criado| ${umNovoPontoCriado.situacao}`,
        umNovoPontoCriado.id_pontos
      );
      return res.status(200).json(umNovoPontoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Ex. /v1/usuarios/:id_usuario/pontos/:id_ponto
  static async atualizaPontos(req, res) {
    const { id_usuario, id_ponto } = req.params;
    const atualizaPontos = req.body;
    try {
      await database.Pontos.update(atualizaPontos, {
        where: { id_pontos: Number(id_ponto) },
      });
      const umPontoAtualizado = await database.Pontos.findOne({
        where: { id_pontos: Number(id_ponto) },
      });
      formata.criaAuditoriaPonto(
        `Ponto Atualizado| ${umPontoAtualizado.situacao}`,
        umPontoAtualizado.id_pontos
      );
      return res.status(200).json(umPontoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //Ex. /v1/usuarios/:id_usuario/pontos/:id_ponto
  static async deletaPonto(req, res) {
    const { id_usuario, id_ponto } = req.params;
    try {
      await database.Pontos.destroy({
        where: { id_usuarios: Number(id_usuario), id_pontos: Number(id_ponto) },
      });
      return res
        .status(200)
        .json({ mensagem: `Id ponto ${id_ponto} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PontoController;
