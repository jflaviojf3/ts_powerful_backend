const { Router } = require('express')
const OrganizacaoController = require ('../../controllers/OrganizacaoController')

const router = Router()

//Manutenção de organizações

/**
 * @swagger
 * /v1/organizacoes:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Organizações
 *     summary: Retorna lista de Organizações
 *     description: Retorna a lista completa de todos as Organizações.
 *     responses:
 *       200:
 *         description: Retorna Lista de Organizações Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizacoes'
 *       500:
 *         description: Erro ao Retornar Lista de Organizações.
 */
router.get('/v1/organizacoes', OrganizacaoController.pegaTodosOrganizacao)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Organizações
 *     summary: Retorna uma Organização
 *     description: Retorna nome de uma Organização
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id Organização
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna Organização Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizacoes'
 *       500:
 *         description: Erro ao Retornar Organizações.
 */
router.get('/v1/organizacoes/:id_organizacao', OrganizacaoController.pegaUmOrganizacao)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Organizações
 *     summary: Retorna uma Organização
 *     description: Retorna nome de uma Organização
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id Organização
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna Organização Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizacoes'
 *       500:
 *         description: Erro ao Retornar Organizações.
 */
router.post('/v1/organizacoes/nomeOrganizacao', OrganizacaoController.pegaOrganizacaoNome)

/**
 * @swagger
 * /v1/organizacoes:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Organizações
 *     summary: Insere uma nova Organizacão.
 *     description: Insere uma nova Organizacão.
 *     requestBody:
 *       description: Exemplo para inserir um novo Organizacão.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Organizacoes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Organizacão Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizacoes'
 *       500:
 *         description: Erro ao Inserir Organizacão.
 */
router.post('/v1/organizacoes', OrganizacaoController.criaOrganizacao)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Organizações
 *     summary: Atualiza uma Organização.
 *     description: Atualiza uma Organização Existente;
 *     parameters:
*       - name: id_organizacao
 *         in: path
 *         description: Id do Organização
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar uma Organização
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Organizacoes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualiza Organização com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizacoes'
 *       500:
 *         description: Erro ao Atualizar Organização.
 */
router.put('/v1/organizacoes/:id_organizacao', OrganizacaoController.atualizaOrganizacao)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Organizações
 *     summary: Deleta uma Organização.
 *     description: Deleta uma Organização.
 *     parameters:
 *       - name: id_param
 *         in: path
 *         description: Id da Organização
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Organização com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizacoes'
 *       500:
 *         description: Erro ao Deletar Organização.
 */
router.delete('/v1/organizacoes/:id_organizacao', OrganizacaoController.deletaOrganizacao)

module.exports = router