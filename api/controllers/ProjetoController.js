const database = require("../models");

class ProjetoController {
  // MANUTENÇÃO DE PROJETOS
  static async pegaTodosProjetos(req, res) {
    const { id_organizacao } = req.params;
    try {
      const todosProjetos = await database.Projetos.findAll({
        where: { id_organizacoes: Number(id_organizacao) },
      });
      return res.status(200).json(todosProjetos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  // Ex. /v1/organizacoes/:id_organizacao/projetos/:id
  static async pegaUmProjeto(req, res) {
    const { id_organizacao, id } = req.params;
    try {
      const umProjeto = await database.Projetos.findOne({
        where: {
          id_projetos: Number(id),
          id_organizacoes: Number(id_organizacao),
        },
      });
      return res.status(200).json(umProjeto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/organizacoes/:id_organizacao/projetos
  static async criaProjeto(req, res) {
    const { id_organizacao } = req.params;
    const novoProjeto = { ...req.body, id_organizacoes: id_organizacao };
    try {
      const umNovoProjetoCriado = await database.Projetos.create(novoProjeto);
      return res.status(200).json(umNovoProjetoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/organizacoes/:id_organizacao/projetos/:id
  static async atualizaProjeto(req, res) {
    const { id_organizacao, id } = req.params;
    const atualizaProjeto = req.body;
    try {
      await database.Projetos.update(atualizaProjeto, {
        where: {
          id_projetos: Number(id),
          id_organizacoes: Number(id_organizacao),
        },
      });
      const umProjetoAtualizado = await database.Projetos.findOne({
        where: {
          id_projetos: Number(id),
          id_organizacoes: Number(id_organizacao),
        },
      });
      return res.status(200).json(umProjetoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/organizacoes/:id_organizacao/projetos/:id
  static async deletaProjeto(req, res) {
    const { id_organizacao, id } = req.params;
    try {
      await database.Projetos.destroy({
        where: {
          id_projetos: Number(id),
          id_organizacoes: Number(id_organizacao),
        },
      });
      return res.status(200).json({ mensagem: `Id Projeto ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //MANUTENÇÃO DOS OBJETIVOS  ex: /v1/projetos/:id_projeto/objetivos
  static async pegaTodosObjetivos(req, res) {
    const { id_projeto } = req.params;
    try {
      const todosObjetivos = await database.Objetivos.findAll({
        where: {
          id_projetos: Number(id_projeto),
        },
      });
      return res.status(200).json(todosObjetivos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaObjetivo(req, res) {
    const { id_projeto } = req.params;
    const novoObjetivo = { ...req.body, id_projetos: id_projeto };
    try {
      const umaNovaObjetivoCriado = await database.Objetivos.create(
        novoObjetivo
      );
      return res.status(200).json(umaNovaObjetivoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Exemplo: /v1/projetos/:id_projeto/objetivos/:id_objetivo
  static async atualizaObjetivo(req, res) {
    const { id_projeto, id_objetivo } = req.params;
    const atualizaObjetivo = { ...req.body, id_projetos: id_projeto };
    try {
      await database.Objetivos.update(atualizaObjetivo, {
        where: {
          id_projetos: Number(id_projeto),
          id_objetivos: Number(id_objetivo),
        },
      });
      const umObjetivoAtualizado = await database.Objetivos.findOne({
        where: {
          id_projetos: Number(id_projeto),
          id_objetivos: Number(id_objetivo),
        },
      });
      return res.status(200).json(umObjetivoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaObjetivo(req, res) {
    const { id_projeto, id_objetivo } = req.params;
    try {
      await database.Objetivos.destroy({
        where: {
          id_projetos: Number(id_projeto),
          id_objetivos: Number(id_objetivo),
        },
      });
      return res
        .status(200)
        .json({ mensagem: `Id Objetivo ${id_objetivo} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ProjetoController;
