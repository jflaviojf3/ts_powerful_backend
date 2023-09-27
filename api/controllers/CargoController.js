const database = require("../models");

class CargoController {
  // MANUTENÇÃO DE CARGO
  static async pegaTodosCargos(req, res) {
    try {
      const todosCargos = await database.Cargos.findAll();
      return res.status(200).json(todosCargos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmCargo(req, res) {
    const { id_cargo } = req.params;
    try {
      const umCargo = await database.Cargos.findOne({
        where: { id_cargos: Number(id_cargo) },
      });
      return res.status(200).json(umCargo);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaCargoNome(req, res){
    const nomeCargos = req.body.nome
    try {
        const umCargo = await database.Cargos.findOne({ where: {nome:nomeCargos}})
        return res.status(200).json(umCargo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

  static async criaCargo(req, res) {
    const novoCargo = req.body;
    try {
      const umNovoCargoCriado = await database.Cargos.create(novoCargo);
      return res.status(200).json(umNovoCargoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaCargo(req, res) {
    const { id_cargo } = req.params;
    const atualizaCargo = req.body;
    try {
      await database.Cargos.update(atualizaCargo, {
        where: { id_cargos: Number(id_cargo) },
      });
      const umCargoAtualizado = await database.Cargos.findOne({
        where: { id_cargos: Number(id_cargo) },
      });
      return res.status(200).json(umCargoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaCargo(req, res) {
    const { id_cargo } = req.params;
    try {
      await database.Cargos.destroy({ where: { id_cargos: Number(id_cargo) } });
      return res.status(200).json({ mensagem: `Id cargo ${id_cargo} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //MANUTENÇÃO DAS ATRIBUIÇÕES ex: /v1/cargos/:id_cargos/atribuicoes'
  static async pegaTodasAtribuicoes(req, res) {
    const { id_cargo } = req.params;
    try {
      const todasAtribuicoes = await database.Atribuicoes.findAll({
        where: {
          id_cargos: Number(id_cargo),
        },
      });
      return res.status(200).json(todasAtribuicoes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaAtribuicao(req, res) {
    const { id_cargo } = req.params;
    const novaAtribuicao = { ...req.body, id_cargos: id_cargo };
    try {
      const umaNovaAtribuicaoCriado = await database.Atribuicoes.create(
        novaAtribuicao
      );
      return res.status(200).json(umaNovaAtribuicaoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Exemplo: /v1/cargos/:id_cargos/atribuicoes/:id_atribuicoes
  static async atualizaAtribuicao(req, res) {
    const { id_cargo, id_atribuicao } = req.params;
    const atualizaAtribuicao = req.body;
    try {
      await database.Atribuicoes.update(atualizaAtribuicao, {
        where: {
          id_cargos: Number(id_cargo),
          id_atribuicoes: Number(id_atribuicao),
        },
      });
      const umaAtribuicaoAtualizado = await database.Atribuicoes.findOne({
        where: {
          id_cargos: Number(id_cargo),
          id_atribuicoes: Number(id_atribuicao),
        },
      });
      return res.status(200).json(umaAtribuicaoAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaAtribuicao(req, res) {
    const { id_cargo, id_atribuicao } = req.params;
    try {
      await database.Atribuicoes.destroy({
        where: {
          id_cargos: Number(id_cargo),
          id_atribuicoes: Number(id_atribuicao),
        },
      });
      return res.status(200).json({ mensagem: `Id atribuicao ${id_atribuicao} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = CargoController;
