const { Router } = require('express')
const ParametroController = require ('../../controllers/ParametroController')

const router = Router()

/**
 * @swagger
 * /v1/parametros:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Parametros
 *     summary: Retorna lista de Parametros
 *     description: Retorna a lista completa de todos os parametros.
 *     responses:
 *       200:
 *         description: Retorna Lista de Parametros Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parametros'
 *       500:
 *         description: Erro ao Retornar Lista de Parametros.
 */
router.get('/v1/parametros', ParametroController.pegaTodosParametros)

/**
 * @swagger
 * /v1/parametros/propriedade/{id_propriedade}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Parametros
 *     summary: Retorna Lista Propriedade
 *     description: Retorna Lista de Parametros de uma Propriedade
 *     parameters:
 *       - name: id_propriedade
 *         in: path
 *         description: Codigo da Propriedade
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Propriedade Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parametros'
 *       500:
 *         description: Erro ao Retornar Lista de Propriedade do Parametro.
 */
router.get('/v1/parametros/propriedade/:id_propriedade', ParametroController.pegaTodosPropriedadeParametro)

/**
 * @swagger
 * /v1/parametros/{id_param}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Parametros
 *     summary: Retorna um Parametro
 *     description: Retorna detalhes de um Parametro
 *     parameters:
 *       - name: id_param
 *         in: path
 *         description: Id do Parametro
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhe do Parametro Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parametros'
 *       500:
 *         description: Erro ao Retornar Detalhe do Parametro.
 */
router.get('/v1/parametros/:id_param', ParametroController.pegaUmParametro)

/**
 * @swagger
 * /v1/parametros:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Parametros
 *     summary: Insere um novo Parametro.
 *     description: Insere um novo Parametro.
 *     requestBody:
 *       description: Exemplo para inserir um novo Parametro.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Parametros_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Parametro Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parametros'
 *       500:
 *         description: Erro ao Inserir Parametros.
 */
router.post('/v1/parametros', ParametroController.criaParametro)

/**
 * @swagger
 * /v1/parametros/{id_param}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Parametros
 *     summary: Atualiza um Parametro.
 *     description: Atualiza um Parametro Existente;
 *     parameters:
*       - name: id_param
 *         in: path
 *         description: Id do Parametro
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar um Parametro
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Parametros_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualiza Parametro com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parametros'
 *       500:
 *         description: Erro ao Atualizar Parametro.
 */
router.put('/v1/parametros/:id_param', ParametroController.atualizaParametro)

/**
 * @swagger
 * /v1/parametros/{id_param}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Parametros
 *     summary: Deleta um Parametro.
 *     description: Deleta um Parametro.
 *     parameters:
 *       - name: id_param
 *         in: path
 *         description: Id do Parametro
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Parametro com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parametros'
 *       500:
 *         description: Erro ao Deletar Parametro.
 */
router.delete('/v1/parametros/:id_param', ParametroController.deletaParametro)

module.exports = router