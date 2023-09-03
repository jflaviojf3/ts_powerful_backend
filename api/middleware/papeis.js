const UsuarioService = require("../services/UsuariosServices");
const usuarioService = new UsuarioService("Usuario");

const papeis = (listaPermissao) => {
return  async (req, res, next) => {
  const { usuarioId } = req;

  const usuario = await usuarioService.pegaUmRegistro({
    attributes: ["id_usuarios", "nome", "cod_perfil"],
    where: { id_usuarios: usuarioId },
  });

  if (!usuario) {
    return res.status(401).send("Usuario nao cadastrado");
  }
  /* //CRIAR SERVICE PARA PARAMETROS E USAR AQUI O FILTRO POR CONSULTA COD_PARAMETRO ID = 2
  const { ...listaPerfil } =
    await parametrosServices.pegaTodasPropriedadeParametroPermissao(
      Number(idPropriedade)
    );

  const novaListaPerfil = Object.values(listaPerfil).map((item) => ({
    cod_propriedade: item.dataValues.cod_propriedade,
    descricao_codigo: item.dataValues.descricao_codigo,
  }));

  console.log(novaListaPerfil);
  if (!novaListaPerfil) {
    return res.status(500).send("Falha na consulta de perfil");
  }*/
  
  const perfilEncontrado = listaPermissao.some(
    (item) => item === usuario.cod_perfil
  );
  
  if (!perfilEncontrado) {
    return res.status(401).send("Usuario não possui acesso a essa rota");
  }
  next();
};
}

module.exports = papeis
