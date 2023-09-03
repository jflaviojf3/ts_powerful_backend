const { verify, decode } = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ menssage: "Access token nao informado" });
  }

  const [, accessToken] = token.split(" ");

  try {
    verify(accessToken, process.env.JSONSECRET_AUTH);

    const { id, email } = await decode(accessToken);

    (req.usuarioId = id), (req.usuarioEmail = email);

    return next();
  } catch (error) {
    res.status(401).send({ menssage: "Usuario nao autorizado" });
  }
};
