const { Router } = require('express')
const ClienteController = require ('../../controllers/ClienteController')

const router = Router()

//ROTAS PARA RETORNO DOS CLIENTES

/**
 * @swagger
 * /v1/clientes:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Clientes
 *     summary: Retorna lista de Clientes
 *     description: Retorna a lista completa de todos os Clientes.
 *     responses:
 *       200:
 *         description: Retorna Lista de Clientes Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clientes'
 *       500:
 *         description: Erro ao Retornar Lista de Clientes.
 */
router.get('/v1/clientes', ClienteController.pegaTodosClientes)

/**
 * @swagger
 * /v1/clientes/{id_cliente}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Clientes
 *     summary: Retorna um Cliente
 *     description: Retorna detalhes de um Cliente
 *     parameters:
 *       - name: id_param
 *         in: path
 *         description: Id do Cliente
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhe do Cliente Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clientes'
 *       500:
 *         description: Erro ao Retornar Detalhe do Cliente.
 */
router.get('/v1/clientes/:id_cliente', ClienteController.pegaUmCliente)

/**
 * @swagger
 * /v1/clientes:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Clientes
 *     summary: Insere um novo Cliente.
 *     description: Insere um novo Cliente.
 *     requestBody:
 *       description: Exemplo para inserir um novo Cliente.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Clientes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Cliente Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clientes'
 *       500:
 *         description: Erro ao Inserir Clientes.
 */
router.post('/v1/clientes/nomeCliente', ClienteController.pegaNomeCliente)

/**
 * @swagger
 * /v1/clientes:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Clientes
 *     summary: Insere um novo Cliente.
 *     description: Insere um novo Cliente.
 *     requestBody:
 *       description: Exemplo para inserir um novo Cliente.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Clientes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Cliente Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clientes'
 *       500:
 *         description: Erro ao Inserir Clientes.
 */
router.post('/v1/clientes', ClienteController.criaCliente)

/**
 * @swagger
 * /v1/clientes/{id_cliente}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Clientes
 *     summary: Atualiza um Cliente.
 *     description: Atualiza um Cliente Existente;
 *     parameters:
*       - name: id_cliente
 *         in: path
 *         description: Id do Cliente
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar um Cliente
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Clientes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualiza Cliente com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clientes'
 *       500:
 *         description: Erro ao Atualizar Cliente.
 */
router.put('/v1/clientes/:id_cliente', ClienteController.atualizaCliente)

/**
 * @swagger
 * /v1/clientes/{id_cliente}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Clientes
 *     summary: Deleta um Cliente.
 *     description: Deleta um Cliente.
 *     parameters:
 *       - name: id_cliente
 *         in: path
 *         description: Id do Cliente
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Cliente com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clientes'
 *       500:
 *         description: Erro ao Deletar Cliente.
 */
router.delete('/v1/clientes/:id_cliente', ClienteController.deletaCliente)

module.exports = router