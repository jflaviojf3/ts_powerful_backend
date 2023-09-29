const { Router } = require('express')
const EquipeController = require ('../../controllers/EquipeController')

const router = Router()

//Criação e Organização de Equipes

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/equipes:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Retorna lista de Equipes
 *     description: Retorna a lista de Equipes relacionado a organização.
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Equipes Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Retornar Lista de Equipes.
 */
router.get('/v1/organizacoes/:id_organizacao/equipes', EquipeController.pegaTodasEquipes)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/equipes/{id_equipe}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Retorna um Equipe da organização
 *     description: Retorna detalhes de um Equipe da organização selecionado pelo usuário
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização para filtro
 *         required: true
 *       - name: id_equipe
 *         in: path
 *         description: Id do Equipe que esteja relacionado a organização
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhe completo da Equipe Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Retornar Detalhe do Equipe.
 */
router.get('/v1/organizacoes/:id_organizacao/equipes/:id_equipe', EquipeController.pegaUmaEquipes)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/equipes:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Insere uma nova Equipe.
 *     description: Insere uma nova Equipe relacionado a uma organização
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir uma nova Equipe.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Equipes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Equipe Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Inserir Equipes.
 */
router.post('/v1/organizacoes/:id_organizacao/equipes/nomeEquipe', EquipeController.pegaNomeEquipe)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/equipes:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Insere uma nova Equipe.
 *     description: Insere uma nova Equipe relacionado a uma organização
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir uma nova Equipe.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Equipes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Equipe Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Inserir Equipes.
 */
router.post('/v1/organizacoes/:id_organizacao/equipes', EquipeController.criaEquipe)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/equipes/{id_equipe}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Atualiza uma Equipe.
 *     description: Atualiza uma Equipe relacionado a uma organização;
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
 *       - name: id_equipe
 *         in: path
 *         description: Id da Equipe
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar uma Equipe
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Equipes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualizar Equipe com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Atualizar Equipe.
 */
router.put('/v1/organizacoes/:id_organizacao/equipes/:id_equipe', EquipeController.atualizaEquipe)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/equipes/{id_equipe}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Deleta uma Equipe.
 *     description: Deleta uma Equipe relacionada a uma organização;
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da Organização
 *         required: true
 *       - name: id_equipe
 *         in: path
 *         description: Id da Equipe
 *         required: true
 *     responses:
 *       200:
 *         description: Deletada Equipe com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Deletar Equipe.
 */
router.delete('/v1/organizacoes/:id_organizacao/equipes/:id_equipe', EquipeController.deletaEquipe)

// RELACIONAMENTO EQUIPE USUARIO
/**
 * @swagger
 * /v1/equipes/{id_equipe}/usuarios:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Retorna lista de Usuários da Equipe
 *     description: Retorna a lista de Usuários relacionado a Equipe.
 *     parameters:
 *       - name: id_equipe
 *         in: path
 *         description: Id da Equipe
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Usuários da Equipe Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipes'
 *       500:
 *         description: Erro ao Retornar Lista de Usuarios da Equipe.
 */
router.get('/v1/equipes/:id_equipe/usuarios', EquipeController.pegaEquipeUsuarios)

/**
 * @swagger
 * /v1/equipes/{id_equipe}/usuarios:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Insere um Novo Usuário a Equipe.
 *     description: Insere um Novo Usuário a Equipe relacionado a uma projeto.
 *     parameters:
 *       - name: id_equipe
 *         in: path
 *         description: Id da Equipe
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir um novo Usuário
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/EquipesUsuarios_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Usuário Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EquipesUsuarios'
 *       500:
 *         description: Erro ao Inserir Usuário.
 */
router.post('/v1/equipes/:id_equipe/usuarios', EquipeController.criaEquipeUsuario)

/**
 * @swagger
 * /v1/equipes/{id_equipe}/usuarios/{id_usuario}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Equipes
 *     summary: Deleta Usuário de uma Equipe.
 *     description: Deleta um Usuário relacionada a uma Equipe;
 *     parameters:
 *       - name: id_equipe
 *         in: path
 *         description: Id do Equipe
 *         required: true
 *       - name: id_usuario
 *         in: path
 *         description: Id do Usuário
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Usuário da Equipe com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EquipesUsuarios'
 *       500:
 *         description: Erro ao Deletar Projeto.
 */
router.delete('/v1/equipes/:id_equipe/usuarios/:id_usuario', EquipeController.deletaEquipeUsuario)

module.exports = router