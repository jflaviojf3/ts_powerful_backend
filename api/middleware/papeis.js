const UsuarioService = require("../services/UsuariosServices");
const usuarioService = new UsuarioService("Usuario");

const roles = (listaRoles) => {
  return async (req, res, next) => {
    const { usuarioId } = req;

    const usuario = await usuarioService.pegaUmRegistro({
      include: [{ attributes: ["id_usuarios", "nome"] }],
      where: { id_usuarios: usuarioId },
    });

    if(!usuario){
        res.status(401).send('Usuario nao cadastrado')
    }

  };
};
