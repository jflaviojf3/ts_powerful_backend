const {ParametrosServices} = require('../services')
const parametrosServices = new ParametrosServices('Parametros')

class ParametroController {
  static async pegaTodosParametros(req, res) {
    try {
      const todosParametros = await parametrosServices.pegaTodosOsRegistros();
      return res.status(200).json(todosParametros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmParametro(req, res) {
    const { id_param } = req.params;
    try {
      const umParametro = await parametrosServices.pegaUmParametro(Number(id_param));
      return res.status(200).json(umParametro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTodosPropriedadeParametro(req, res) {
    const { id_propriedade } = req.params;
    try {
      const umTodasPropParam = await parametrosServices.pegaTodasPropriedadeParametro( Number(id_propriedade) );
      return res.status(200).json(umTodasPropParam);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaParametro(req, res) {
    const novoParametro = req.body;
    try {
      const umNovoParametroCriado = await parametrosServices.criaParametro(
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
      await parametrosServices.atualizaUmParametro(atualizaParametro, Number(id_param));
      const umParametroAtualizado = await parametrosServices.pegaUmParametro(Number(id_param));
      return res.status(200).json(umParametroAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaParametro(req, res) {
    const { id_param } = req.params;
    try {
      await parametrosServices.deletaParametro(Number(id_param));
      return res.status(200).json({ mensagem: `Id parametro ${id_param} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ParametroController;
