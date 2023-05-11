const database = require("../models");

class ClienteController {
  static async pegaTodosClientes(req, res) {
    try {
      const todosClientes = await database.Clientes.findAll();
      return res.status(200).json(todosClientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmCliente(req, res) {
    const { id_cliente } = req.params;
    try {
      const umCliente = await database.Clientes.findOne({
        where: { id_clientes: Number(id_cliente) },
      });
      return res.status(200).json(umCliente);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaCliente(req, res) {
    const novoCliente = req.body;
    try {
      const umNovoClienteCriado = await database.Clientes.create(novoCliente);
      return res.status(200).json(umNovoClienteCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaCliente(req, res) {
    const { id_cliente } = req.params;
    const atualizaCliente = req.body;
    try {
      await database.Clientes.update(atualizaCliente, {
        where: { id_clientes: Number(id_cliente) },
      });
      const umClienteAtualizado = await database.Clientes.findOne({
        where: { id_clientes: Number(id_cliente) },
      });
      return res.status(200).json(umClienteAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaCliente(req, res) {
    const { id_cliente } = req.params;
    try {
      await database.Clientes.destroy({
        where: { id_clientes: Number(id_cliente) },
      });
      return res
        .status(200)
        .json({ mensagem: `Id Cliente ${id_cliente} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClienteController;
