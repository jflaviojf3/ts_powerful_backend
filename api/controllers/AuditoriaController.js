const database = require("../models");
const formata = require("../utils");
const { Op } = require("sequelize");

class AuditoriaController {

  static async pegaTodosAuditoria(req, res) {
    try {
      const todosAuditoria = await database.Auditorias.findAll();
      return res.status(200).json(todosAuditoria);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/auditorias/tarefas/periodoInicio/:data_inicio/periodoFim/:data_fim
  static async pegaPeriodoAuditoriaTarefas(req, res) {
    const { data_inicio, data_fim } = req.params;
    const dataInicio = formata.formataData(data_inicio);
    const dataFim = formata.formataData(data_fim);

    try {
      const periodoAuditoria = await database.Auditorias.findAll({
        where: {
          data_hora_inicio: {
            [Op.between]: [`${dataInicio} 00:00:00`, `${dataFim} 23:59:59`],
          },
          id_pontos: { [Op.is]: null },
        },
      });
      return res.status(200).json(periodoAuditoria);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/auditorias/pontos/periodoInicio/:data_inicio/periodoFim/:data_fim
  static async pegaPeriodoAuditoriaPontos(req, res) {
    const { data_inicio, data_fim } = req.params;
    const dataInicio = formata.formataData(data_inicio);
    const dataFim = formata.formataData(data_fim);

    try {
      const periodoAuditoria = await database.Auditorias.findAll({
        where: {
          data_hora_inicio: {
            [Op.between]: [`${dataInicio} 00:00:00`, `${dataFim} 23:59:59`],
          },
          id_tarefas: { [Op.is]: null },
        },
      });
      return res.status(200).json(periodoAuditoria);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Ex. /v1/auditorias/pontos
  static async criaAuditoriasPontos(req, res) {
    const novaAuditoriaPonto = req.body;
    try {
      const umNovaAuditoriaPonto = await database.Auditorias.create(novaAuditoriaPonto);
      return res.status(200).json(umNovaAuditoriaPonto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Ex. /v1/auditorias/tarefas
  static async criaAuditoriasTarefas(req, res) {
    const novaAuditoriaTarefas = req.body;
    try {
      const umNovaAuditoriaTarefas = await database.Auditorias.create(novaAuditoriaTarefas);
      return res.status(200).json(umNovaAuditoriaTarefas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = AuditoriaController;
