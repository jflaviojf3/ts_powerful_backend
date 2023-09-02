const { Router } = require("express");
const AuthController = require("../../controllers/AuthController");

const router = Router();

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
router.post("/v1/auth",  AuthController.fazerLogin);

module.exports = router;