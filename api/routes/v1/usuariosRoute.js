const { Router } = require("express");
const UsuarioController = require("../../controllers/UsuarioController");

const router = Router();

/**
 * @swagger
 * /v1/usuarios:
 *   get:
 *     tags:
 *      - Usuarios
 *     summary: Retorna lista de todos os usuários
 *     description: Retorna a lista completa de todos os usuários da base
 *     responses:
 *       200:
 *         description: Lista de Usuários Completa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       500:
 *         description: Erro ao retorna lista de usuários.
 */
router.get("/v1/usuarios", UsuarioController.pegaTodosUsuarios);

/**
 * @swagger
 * /v1/usuarios/{id_usuarios}:
 *   get:
*     tags:
 *      - Usuarios
 *     summary: Retorna um usuário consultando por id
 *     description: Retorna um usuário base do sistema
 *     parameters:
 *       - name: id_usuarios
 *         in: path
 *         description: Id do usuário para retornar um usuário
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna 1 usuário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       500:
 *         description: Erro ao retornar usuário.
 */
router.get("/v1/usuarios/:id", UsuarioController.pegaUmUsuario);

/**
 * @swagger
 * /v1/usuarios/:
 *   post:
 *     tags:
 *      - Usuarios
 *     summary: Retorna um usuário consultando por id
 *     description: Retorna um usuário base do sistema
 *     requestBody:
 *       description: Exemplo de requestBody de um novo usuário
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Usuarios_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna 1 usuário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       500:
 *         description: Erro ao retornar usuário.
 */
router.post("/v1/usuarios", UsuarioController.criaUsuario);

/**
 * @swagger
 * /v1/usuarios/{id_usuarios}:
 *   put:
*     tags:
 *      - Usuarios
 *     summary: Retorna um usuário consultando por id
 *     description: Retorna um usuário base do sistema
 *     parameters:
 *       - name: id_usuarios
 *         in: path
 *         description: Id do usuário para retornar um usuário
 *         required: true
 *     requestBody:
 *       description:  Exemplo de requestBody de uma atualização de usuário
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Usuarios_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna 1 usuário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       500:
 *         description: Erro ao retornar usuário.
 */
router.put("/v1/usuarios/:id", UsuarioController.atualizaUsuario);

/**
 * @swagger
 * /v1/usuarios/{id_usuarios}:
 *   delete:
*     tags:
 *      - Usuarios
 *     summary: Retorna um usuário consultando por id
 *     description: Retorna um usuário base do sistema
 *     parameters:
 *       - name: id_usuarios
 *         in: path
 *         description: Id do usuário para retornar um usuário
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna 1 usuário com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       500:
 *         description: Erro ao retornar usuário.
 */
router.delete("/v1/usuarios/:id", UsuarioController.deletaUsuario);

module.exports = router;
