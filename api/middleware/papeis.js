const UsuarioService = require("../services/UsuariosServices");
const usuarioService = new UsuarioService("Usuario");
const { ParametrosServices } = require("../services");
const parametrosServices = new ParametrosServices("Parametros");

const roles = (listaRoles) => {
  return async (req, res, next) => {
    const { usuarioId } = req;

    const usuario = await usuarioService.pegaUmRegistro({
      attributes: ["id_usuarios", "nome", "cod_perfil"],
      where: { id_usuarios: usuarioId },
    });

    if (!usuario) {
      res.status(401).send("Usuario nao cadastrado");
    }
    //CRIAR SERVICE PARA PARAMETROS E USAR AQUI O FILTRO POR CONSULTA COD_PARAMETRO ID = 2
    const listaPerfil = await parametrosServices.pegaTodosOsRegistros({
      attributes: [
        "id_propriedade",
        "descricao_propriedade",
        "cod_propriedade",
        "descricao_codigo",
      ],
      where: { id_propriedade: 2 },
    });

    if (!listaPerfil) {
      res.status(500).send("Falha na consulta de perfil");
    }

    //DEPOIS CRIAR UMA COMPARAÇÃO COM USUARIO.COD_PERFIL E SE EXISTE DENTRO DAQUELA LISTA DE PARAMETRO

    
    //E DEFINIR SE ELE TEM PERMISSÃO AO ENDPOINT, PASSADO POR PARAMETRO listaLRoles
  };
};

module.exports = roles;
