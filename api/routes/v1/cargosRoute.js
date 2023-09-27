const { Router } = require('express')
const CargoController = require ('../../controllers/CargoController')

const router = Router()

//Cargos

/**
 * @swagger
 * /v1/cargos:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cargos
 *     summary: Retorna lista de Cargos
 *     description: Retorna a lista completa de todos os Cargos.
 *     responses:
 *       200:
 *         description: Retorna Lista de Cargos Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargos'
 *       500:
 *         description: Erro ao Retornar Lista de Cargos.
 */
router.get('/v1/cargos', CargoController.pegaTodosCargos)

/**
 * @swagger
 * /v1/cargos/{id_cargo}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cargos
 *     summary: Retorna um Cargo
 *     description: Retorna nome de um Cargo
 *     parameters:
 *       - name: id_cargo
 *         in: path
 *         description: Id Cargo
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna Cargo Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargos'
 *       500:
 *         description: Erro ao Retornar Cargos.
 */
router.get('/v1/cargos/:id_cargo', CargoController.pegaUmCargo)

/**
 * @swagger
 * /v1/cargos:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cargos
 *     summary: Insere um novo Cargo.
 *     description: Insere um novo Cargo.
 *     requestBody:
 *       description: Exemplo para inserir um novo Cargo.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Cargos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Cargo Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargos'
 *       500:
 *         description: Erro ao Inserir Cargo.
 */
router.post('/v1/cargos/nomeCargo', CargoController.pegaCargoNome)

/**
 * @swagger
 * /v1/cargos:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cargos
 *     summary: Insere um novo Cargo.
 *     description: Insere um novo Cargo.
 *     requestBody:
 *       description: Exemplo para inserir um novo Cargo.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Cargos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Cargo Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargos'
 *       500:
 *         description: Erro ao Inserir Cargo.
 */
router.post('/v1/cargos', CargoController.criaCargo)

/**
 * @swagger
 * /v1/cargos/{id_cargo}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cargos
 *     summary: Atualiza um Cargo.
 *     description: Atualiza um Cargo Existente;
 *     parameters:
*       - name: id_cargo
 *         in: path
 *         description: Id do Cargo
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar um Cargo
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Cargos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualizar Cargo com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargos'
 *       500:
 *         description: Erro ao Atualizar Cargo.
 */
router.put('/v1/cargos/:id_cargo', CargoController.atualizaCargo)

/**
 * @swagger
 * /v1/cargos/{id_cargo}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cargos
 *     summary: Deleta um Cargo.
 *     description: Deleta um Cargo.
 *     parameters:
 *       - name: id_param
 *         in: path
 *         description: Id do Cargo
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Cargo com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargos'
 *       500:
 *         description: Erro ao Deletar Cargo.
 */
router.delete('/v1/cargos/:id_cargo', CargoController.deletaCargo)

//Atribuicoes

/**
 * @swagger
 * /v1/cargos/{id_cargo}/atribuicoes:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Atribuições
 *     summary: Retorna todas Atribuição.
 *     description: Retorna todas as Atribuição de um Cargo.
 *     parameters:
 *       - name: id_cargo
 *         in: path
 *         description: Id do Cargo
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna Atribuição com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Atribuicoes'
 *       500:
 *         description: Erro ao Retornar Atribuição.
 */
router.get('/v1/cargos/:id_cargo/atribuicoes', CargoController.pegaTodasAtribuicoes)

/**
 * @swagger
 * /v1/cargos/{id_cargo}/atribuicoes:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Atribuições
 *     summary: Insere uma Atribuição.
 *     description: Insere uma Atribuição.
 *     parameters:
 *       - name: id_cargo
 *         in: path
 *         description: Id do Cargo
 *         required: true
 *     requestBody:
 *       description: Exemplo para Inserer uma Atribuição
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Atribuicoes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Atribuição com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Atribuicoes'
 *       500:
 *         description: Erro ao Inserer Atribuição.
 */
router.post('/v1/cargos/:id_cargo/atribuicoes', CargoController.criaAtribuicao)

/**
 * @swagger
 * /v1/cargos/{id_cargo}/atribuicoes/{id_atribuicao}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Atribuições
 *     summary: Atualiza uma Atribuição.
 *     description: Atualiza uma Atribuição.
 *     parameters:
 *       - name: id_cargo
 *         in: path
 *         description: Id do Cargo
 *         required: true
 *       - name: id_atribuicao
 *         in: path
 *         description: Id da Atribuição
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar uma Atribuição
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Atribuicoes_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualiza Atribuição com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Atribuicoes'
 *       500:
 *         description: Erro ao Atualizar Atribuição.
 */
router.put('/v1/cargos/:id_cargo/atribuicoes/:id_atribuicao', CargoController.atualizaAtribuicao)

/**
 * @swagger
 * /v1/cargos/{id_cargo}/atribuicoes/{id_atribuicao}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Atribuições
 *     summary: Deleta uma Atribuição.
 *     description: Deleta uma Atribuição.
 *     parameters:
 *       - name: id_cargo
 *         in: path
 *         description: Id do Cargo
 *         required: true
 *       - name: id_atribuicao
 *         in: path
 *         description: Id da Atribuição
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Atribuição com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Atribuicoes'
 *       500:
 *         description: Erro ao Deletar Atribuição.
 */
router.delete('/v1/cargos/:id_cargo/atribuicoes/:id_atribuicao', CargoController.deletaAtribuicao)

module.exports = router