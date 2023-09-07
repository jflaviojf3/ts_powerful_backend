const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const cors = require('cors');
const options = require("../../swagger");
const swaggerSpec = swaggerJSDoc(options);
const pageLogin = require('../../tempLogin')

const usuarios = require("./usuariosRoute");
const auth = require("./authRoute");
const parametros = require("./parametrosRoute");
const cargos = require("./cargosRoute");
const organizacoes = require("./organizacoesRoute");
const clientes = require("./clientesRoute");
const projetos = require("./projetosRoute");
const equipes = require("./equipesRoute");
const pontos = require("./pontosRoute");
const auditorias = require("./auditoriasRoute");
const tarefas = require("./tarefasRoute");

module.exports = (app) => {
  app.use(cors({ origin: '*' }))
  app.use(bodyParser.json());
  app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/", (req, res) => res.redirect("/telaLogin"));
  app.get("/telaLogin", (req, res) =>
    res.send(pageLogin())
  );
  app.use(auditorias);
  app.use(auth);
  app.use(usuarios);
  app.use(parametros);
  app.use(cargos);
  app.use(organizacoes);
  app.use(clientes);
  app.use(projetos);
  app.use(equipes);
  app.use(pontos);
  app.use(tarefas);
};
