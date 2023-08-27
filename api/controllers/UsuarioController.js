const {UsuariosServices} = require('../services')
const usuariosServices = new UsuariosServices('Usuarios')

class UsuarioController {
  static async pegaTodosUsuarios(req, res) {
    try {
      const todosUsuarios = await usuariosServices.pegaTodosOsUsuarios();
      return res.status(200).json(todosUsuarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
      const umUsuario = await usuariosServices.pegaUmUsuario( Number(id_usuario));
      return res.status(200).json(umUsuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaUsuario(req, res) {
    const novoUsuario = req.body;
    try {
      const umNovoUsuarioCriado = await usuariosServices.criaUsuario(novoUsuario);
      return res.status(200).json(umNovoUsuarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id_usuario } = req.params;
    const atualizaUsuario = req.body;
    try {
      await usuariosServices.atualizaUmUsuario(atualizaUsuario, Number(id_usuario));
      const umUsuarioAtualizado = await usuariosServices.pegaUmUsuario(Number(id_usuario));
      return res.status(200).json(umUsuarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaUsuario(req, res) {
    const { id_usuario } = req.params;
    try {
      await usuariosServices.deletaUsuario(Number(id_usuario));
      return res.status(200).json({ mensagem: `id ${id_usuario} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UsuarioController;
