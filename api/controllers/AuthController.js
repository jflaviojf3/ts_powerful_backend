const database = require("../models");

class AuthController {
//   static async pegaTodosUsuarios(req, res) {
//     try {
//       const todosUsuarios = await database.Usuarios.findAll();
//       return res.status(200).json(todosUsuarios);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   }

//   static async pegaUmUsuario(req, res) {
//     const { id_usuario } = req.params;
//     try {
//       const umUsuario = await database.Usuarios.findOne({
//         where: { id_usuarios: Number(id_usuario) },
//       });
//       return res.status(200).json(umUsuario);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   }

  static async fazerLogin(req, res) {
    const {email, senha} = req.body;
    var resultado = '';
    try {
      const usuario = await database.Usuarios.findOne({
        attributes: { exclude: ['id_usuarios', 'senha', 'createdAt', 'updatedAt', 'deletedAt'] },
        where: { email: `${email}`, senha: `${senha}` },
      });
      if (usuario == null) {
        resultado = res.status(401).json({message:"Usuario ou Senha Invalido"})
      } else {
        resultado = res.status(200).json(usuario);
      }
       return resultado
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

//   static async atualizaUsuario(req, res) {
//     const { id_usuario } = req.params;
//     const atualizaUsuario = req.body;
//     try {
//       await database.Usuarios.update(atualizaUsuario, {
//         where: { id_usuarios: Number(id_usuario) },
//       });
//       const umUsuarioAtualizado = await database.Usuarios.findOne({
//         where: { id_usuarios: Number(id_usuario) },
//       });
//       return res.status(200).json(umUsuarioAtualizado);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   }

//   static async deletaUsuario(req, res) {
//     const { id_usuario } = req.params;
//     try {
//       await database.Usuarios.destroy({
//         where: { id_usuarios: Number(id_usuario) },
//       });
//       return res.status(200).json({ mensagem: `id ${id_usuario} deletado` });
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   }
}

module.exports = AuthController;
