const database = require("../models");
const formata = require("../utils");
const { Op, fn, col } = require("sequelize");

class TarefaController {
  static async pegaTodasTarefasUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
      const todasTarefasUsuario = await database.Tarefas.findAll({
        where: { id_usuarios: Number(id_usuario) },
      });
      return res.status(200).json(todasTarefasUsuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaTarefaUsuario(req, res) {
    const { id_usuario, id_tarefa } = req.params;
    try {
      const umaTarefa = await database.Tarefas.findAll({
        where: {
          id_usuarios: Number(id_usuario),
          id_tarefas: Number(id_tarefa),
        },
      });
      return res.status(200).json(umaTarefa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTarefaDoDiaUsuario(req, res) {
    const { id_usuario, dia } = req.params;
    const dataAtual = dia;
    try {
      const tarefasDia = await database.Tarefas.findAll({
        where: {
          data_inicio: {
            [Op.between]: [`${dataAtual} 00:00:00`, `${dataAtual} 23:59:59`],
          },
          id_usuarios: id_usuario,
        },
      });
      return res.status(200).json(tarefasDia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTarefasPorDiaUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
      const tarefasDia = await database.Tarefas.findAll({
        attributes: [[fn("DATE", col("data_inicio")), "data_dia"]],
        order: [['data_dia', 'DESC']],
        group: [fn("DATE", col("data_inicio"))],
        where: {
          id_usuarios: id_usuario,
        },
      });
      return res.status(200).json(tarefasDia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTarefaAtivaUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
      const tarefasDia = await database.Tarefas.findOne({
        where: {
          id_usuarios: id_usuario,
          data_fim: {
            [Op.is]: null
          }
        },
      });
      return res.status(200).json(tarefasDia);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaPeriodoTarefaUsuario(req, res) {
    const { id_usuario, data_inicio, data_fim } = req.params;
    const dataInicio = formata.formataData(data_inicio);
    const dataFim = formata.formataData(data_fim);
    try {
      const periodoTarefas = await database.Tarefas.findAll({
        where: {
          data_inicio: {
            [Op.between]: [`${dataInicio} 00:00:00`, `${dataFim} 23:59:59`],
          },
          id_usuarios: id_usuario,
        },
      });
      return res.status(200).json(periodoTarefas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //ex. /v1/projeto/:id_projeto/tarefaInicio/:data_inicio/tarefaFim/:data_fim
  static async pegaPeriodoTarefasProjetos(req, res) {
    const { id_projeto, data_inicio, data_fim } = req.params;
    const dataInicio = formata.formataData(data_inicio);
    const dataFim = formata.formataData(data_fim);
    try {
      const periodoTarefas = await database.Tarefas.findAll({
        where: {
          data_inicio: {
            [Op.between]: [`${dataInicio} 00:00:00`, `${dataFim} 23:59:59`],
          },
          id_projetos: id_projeto,
        },
      });
      return res.status(200).json(periodoTarefas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criaTarefa(req, res) {
    const { id_usuario } = req.params;
    const novaTarefa = { ...req.body, id_usuarios: id_usuario };
    try {
      const umaNovaTarefaCriada = await database.Tarefas.create(novaTarefa);
      formata.criaAuditoriaTarefa(
        `Tarefa Criada| ${umaNovaTarefaCriada.descricao}`,
        umaNovaTarefaCriada.data_inicio,
        umaNovaTarefaCriada.data_fim,
        umaNovaTarefaCriada.id_tarefas
      );
      return res.status(200).json(umaNovaTarefaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaTarefa(req, res) {
    const { id_usuario, id_tarefa, cod_entrada } = req.params;
    const atualizaTarefa = req.body;
    try {
      await database.Tarefas.update(atualizaTarefa, {
        where: {
          id_tarefas: Number(id_tarefa),
          entrada: Number(cod_entrada),
          id_usuarios: Number(id_usuario),
        },
      });
      const umTarefaAtualizada = await database.Tarefas.findOne({
        where: {
          id_tarefas: Number(id_tarefa),
          entrada: Number(cod_entrada),
          id_usuarios: Number(id_usuario),
        },
      });
      formata.criaAuditoriaTarefa(
        `Tarefa Criada| ${umTarefaAtualizada.descricao}`,
        umTarefaAtualizada.data_inicio,
        umTarefaAtualizada.data_fim,
        umTarefaAtualizada.id_tarefas
      );
      return res.status(200).json(umTarefaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaTarefa(req, res) {
    const { id_usuario, id_tarefa, cod_entrada } = req.params;
    try {
      await database.Tarefas.destroy({
        where: {
          id_tarefas: String(id_tarefa),
          entrada: String(cod_entrada),
          id_usuarios: String(id_usuario),
        },
      });
      return res
        .status(200)
        .json({ mensagem: `Id tarefa ${id_tarefa} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TarefaController;
