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
 *       description: Exemplo de requestBody de um novo usuário
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Usuarios_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna o usuário Inserido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       500:
 *         description: Erro ao Inserir usuário.
 */
router.post("/v1/auth", AuthController.fazerLogin);

module.exports = router;