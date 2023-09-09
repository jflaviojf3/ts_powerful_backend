const { AuthServices } = require("../services");
const authServices = new AuthServices();

class AuthController {
  static async fazerLogin(req, res) {
    const login = req.body;
    try {
      const usuario = await authServices.pegaUmUsuarioLogin(login);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  static async decodificaToken(req, res) {
    const token = req.body.token;
    try {
      const usuario = await authServices.verificaToken(token);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
}

module.exports = AuthController;
