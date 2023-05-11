const database = require("../models");

class ParametroController {
  static async pegaTodosParametros(req, res) {
    try {
      const todosParametros = await database.tabelaGenerica.findAll();
      return res.status(200).json(todosParametros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmParametro(req, res) {
    const { id_param } = req.params;
    try {
      const umParametro = await database.tabelaGenerica.findByPk(
        Number(id_param)
      );
      return res.status(200).json(umParametro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTodosPropriedadeParametro(req, res) {
    const { id_propriedade } = req.params;
    try {
      const umTodasPropParam = await database.tabelaGenerica.findAll({
        where: { id_propriedade: Number(id_propriedade) },
      });
      return res.status(200).json(umTodasPropParam);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaParametro(req, res) {
    const novoParametro = req.body;
    try {
      const umNovoParametroCriado = await database.tabelaGenerica.create(
        novoParametro
      );
      return res.status(200).json(umNovoParametroCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaParametro(req, res) {
    const { id_param } = req.params;
    const atualizaParametro = req.body;
    try {
      await database.tabelaGenerica.update(atualizaParametro, {
        where: { id_tabGenerica: Number(id_param) },
      });
      const umParametroAtualizado = await database.tabelaGenerica.findOne({
        where: { id_tabGenerica: Number(id_param) },
      });
      return res.status(200).json(umParametroAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaParametro(req, res) {
    const { id_param } = req.params;
    try {
      await database.tabelaGenerica.destroy({
        where: { id_tabGenerica: Number(id_param) },
      });
      return res.status(200).json({ mensagem: `Id parametro ${id_param} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ParametroController;
