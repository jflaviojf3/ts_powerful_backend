const database = require("../models");

class EquipeController {
  // MANUTENÇÃO DE EQUIPES
  static async pegaTodasEquipes(req, res) {
    const { id_organizacao } = req.params;
    try {
      const todosEquipes = await database.Equipes.findAll({
        where: { id_organizacoes: Number(id_organizacao) },
      });
      return res.status(200).json(todosEquipes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  // Ex. /v1/organizacoes/:id_organizacao/equipe/:id
  static async pegaUmaEquipes(req, res) {
    const { id_organizacao, id_equipe } = req.params;
    try {
      const umEquipes = await database.Equipes.findOne({
        where: {
          id_equipes: Number(id_equipe),
          id_organizacoes: Number(id_organizacao),
        },
      });
      return res.status(200).json(umEquipes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/organizacoes/:id_organizacao/equipe
  static async criaEquipe(req, res) {
    const { id_organizacao } = req.params;
    const novaEquipe = { ...req.body, id_organizacoes: id_organizacao };
    try {
      const umaNovaEquipeCriada = await database.Equipes.create(novaEquipe);
      return res.status(200).json(umaNovaEquipeCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/organizacoes/:id_organizacao/equipes/:id_equipe
  static async atualizaEquipe(req, res) {
    const { id_organizacao, id_equipe } = req.params;
    const atualizaEquipe = { ...req.body, id_equipes: id_equipe };
    try {
      await database.Equipes.update(atualizaEquipe, {
        where: {
          id_equipes: Number(id_equipe),
          id_organizacoes: Number(id_organizacao),
        },
      });
      const umaEquipeAtualizado = await database.Equipes.findOne({
        where: {
          id_equipes: Number(id_equipe),
          id_organizacoes: Number(id_organizacao),
        },
      });
      return res.status(200).json(umaEquipeAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/organizacoes/:id_organizacao/projetos/:id
  static async deletaEquipe(req, res) {
    const { id_organizacao, id_equipe } = req.params;
    try {
      await database.Equipes.destroy({
        where: {
          id_equipes: Number(id_equipe),
          id_organizacoes: Number(id_organizacao),
        },
      });
      return res
        .status(200)
        .json({ mensagem: `Id Equipe ${id_equipe} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //MANUTENÇÃO DOS Equipe e Usuario  ex: /v1/equipes/:id_equipe/usuarios
  static async pegaEquipeUsuarios(req, res) {
    const { id_equipe } = req.params;
    try {
      const todosUsuariosEquips = await database.EquipesUsuarios.findAll({
        where: {
          id_equipes: Number(id_equipe),
        },
      });
      return res.status(200).json(todosUsuariosEquips);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/equipes/:id_equipe/usuarios
  static async criaEquipeUsuario(req, res) {
    const { id_equipe } = req.params;
    const novaEquipeUsuario = { ...req.body, id_equipes: id_equipe };
    try {
      const umNovoUsuarioEquipe = await database.EquipesUsuarios.create(
        novaEquipeUsuario
      );
      return res.status(200).json(umNovoUsuarioEquipe);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Ex. /v1/equipes/:id_equipe/usuarios/:id_usuario
  static async deletaEquipeUsuario(req, res) {
    const { id_equipe, id_usuario } = req.params;
    try {
      const idEquipeUsuario = await database.EquipesUsuarios.findOne({
        where: {
          id_equipes: Number(id_equipe),
          id_usuarios: Number(id_usuario),
        },
      });
      await database.EquipesUsuarios.destroy({
        where: {
          id_equipes: Number(id_equipe),
          id_usuarios: Number(id_usuario),
        },
      });
      return res
        .status(200)
        .json({ mensagem: `Id EquipeUsuario ${idEquipeUsuario.id_equipes_usuarios} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = EquipeController;
