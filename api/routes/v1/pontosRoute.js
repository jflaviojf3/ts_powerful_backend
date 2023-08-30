const { Router } = require('express')
const PontoController = require ('../../controllers/PontoController')

const router = Router()

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontos:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Retorna lista de todos os Pontos do usuário
 *     description: Retorna a lista completa dos pontos do usuário da base
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna pontos de um usuário
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Pontos Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Retornar Lista de Pontos de Usuários.
 */
router.get('/v1/usuarios/:id_usuario/pontos', PontoController.pegaTodosPontosUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontos/{id_ponto}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Retorna uma Pontos do usuário
 *     description: Retorna uma Pontos do usuário da base
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna Pontos de um usuário
 *         required: true
 *       - name: id_ponto
 *         in: path
 *         description: Id do ponto para retornar um ponto
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna Ponto com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Retornar um Ponto do Usuários.
 */
router.get('/v1/usuarios/:id_usuario/pontos/:id_ponto', PontoController.pegaUmPontoUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontosDia/{dia}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Retorna lista de pontos incluidas no dia.
 *     description: Retorna lista de pontos incluidas no dia.;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna pontos de um usuário
 *         required: true
 *       - name: dia
 *         in: path
 *         description: Dia atual ou o dia que pretende retornar
 *         required: true
 *         example: 20230501
 *     responses:
 *       200:
 *         description: Lista de Pontos do dia Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Retornar Lista de Pontos do dia.
 */
router.get('/v1/usuarios/:id_usuario/pontosDia/:dia', PontoController.pegaPontoDoDiaUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontoInicio/{data_inicio}/pontoFim/{data_fim}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Retorna lista de pontos incluidas no periodo.
 *     description: Retorna lista de pontos incluidas no periodo informado;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna pontos de um usuário
 *         required: true
 *       - name: data_inicio
 *         in: path
 *         description: Data inicio do periodo
 *         required: true
 *         example: 20230501
 *       - name: data_fim
 *         in: path
 *         description: Data fim do periodo
 *         required: true
 *         example: 20230509
 *     responses:
 *       200:
 *         description: Lista de pontos do Periodo com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Retornar Lista de Pontos do Periodo.
 */
router.get('/v1/usuarios/:id_usuario/pontoInicio/:data_inicio/pontoFim/:data_fim', PontoController.pegaPeriodoPontoUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontos:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Insere um novo Ponto.
 *     description: Insere um novo ponto relacionada a um usuário;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para inserir um Ponto
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir um novo Ponto
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Pontos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Ponto Inserido Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Inserir Pontos.
 */
router.post('/v1/usuarios/:id_usuario/pontos', PontoController.criaPonto)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontos/{id_ponto}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Atualiza uma Ponto.
 *     description: Atualiza uma Ponto relacionada a um usuário;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para inserir um Ponto
 *         required: true
 *       - name: id_ponto
 *         in: path
 *         description: Id do Ponto
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar um novo Ponto
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Pontos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Ponto Atualizada com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Retornar Ponto Atualizado
 */
router.put('/v1/usuarios/:id_usuario/pontos/:id_ponto', PontoController.atualizaPontos)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/pontos/{id_ponto}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pontos
 *     summary: Deleta uma Ponto.
 *     description: Deleta uma Ponto relacionada a um usuário;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do Usuário
 *         required: true
 *       - name: id_ponto
 *         in: path
 *         description: Id da Ponto
 *         required: true
 *     responses:
 *       200:
 *         description: Ponto Deletada com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pontos'
 *       500:
 *         description: Erro ao Deletar Ponto.
 */
router.delete('/v1/usuarios/:id_usuario/pontos/:id_ponto', PontoController.deletaPonto)

module.exports = router