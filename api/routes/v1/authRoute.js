const { Router } = require("express");
const AuthController = require("../../controllers/AuthController");
const UsuarioController = require("../../controllers/UsuarioController");
const passport = require("passport");
const session = require("express-session");
const { trataUsuarioGoogle } = require("../../utils");

require("../../middleware/authGoogle");
//require("../../middleware/authGithub");
//require("../../middleware/authMicrosoft");

const router = Router();

function estaLogado(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.use(session({ secret: "JF3@", resave: false, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());

/**
 * @swagger
 * /v1/auth:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Realiza autenticação de usuario
 *     description: Realiza a autenticação de um usuário cadastrado no sistema
 *     requestBody:
 *       description: Exemplo de requestBody para autenticação
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Auth_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna os dados de usuário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 *       401:
 *         description: Erro de autenticação, usuário não autenticado.
 *       500:
 *         description: Erro de conexão com o servidor.
 */
router.post("/v1/auth", AuthController.fazerLogin);

/**
 * @swagger
 * /v1/authToken:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Decodifica o token do usuário
 *     description: Decodifica o token do usuario logado e retorna os seus dados
 *     requestBody:
 *       description: Exemplo de requestBody para autenticação
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Auth_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna os dados de usuário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 *       401:
 *         description: Erro de autenticação, usuário não autenticado.
 *       500:
 *         description: Erro de conexão com o servidor.
 */
router.post("/v1/authToken", AuthController.decodificaToken);

router.get(
  "/v1/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/v1/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/telaLogin",
  })
);

//router.get("/v1/auth/microsoft",passport.authenticate("microsoft"  /* , {prompt: "select_account"}*/));
//router.get(  "/v1/auth/microsoft/callback",  passport.authenticate("microsoft", {successRedirect: "/home",failureRedirect: "/telaLogin",}));

router.get("/home", estaLogado, (req, res) => {
  const usuarioGoogle = trataUsuarioGoogle(req.user._json);
  UsuarioController.criaUsuario(usuarioGoogle, res);
  res.redirect("/v1/api-docs");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Até a proxima!");
});

module.exports = router;
