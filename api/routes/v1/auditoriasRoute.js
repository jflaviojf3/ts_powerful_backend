const { Router } = require('express')
const AuditoriaController = require ('../../controllers/AuditoriaController')

const router = Router()

/**
 * @swagger
 * /v1/auditorias:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Auditorias
 *     summary: Retorna lista de Auditorias
 *     description: Retorna a lista completa de todos as Auditorias.
 *     responses:
 *       200:
 *         description: Retorna Lista de Auditoria Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditorias'
 *       500:
 *         description: Erro ao Retornar Lista de Auditorias.
 */
router.get('/v1/auditorias', AuditoriaController.pegaTodosAuditoria)

/**
 * @swagger
 * /v1/auditorias/tarefas/periodoInicio/{data_inicio}/periodoFim/{data_fim}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Auditorias
 *     summary: Retorna Auditoria de Tarefas
 *     description: Retorna Lista de Auditoria do registro de tarefas
 *     parameters:
 *       - name: data_inicio
 *         in: path
 *         description: Data inicio do periodo
 *         required: true
 *       - name: data_fim
 *         in: path
 *         description: Data fim do periodo
 *         required: true
 *     responses:
 *       200:
 *         description: Retorna Lista de Auditoria Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditorias'
 *       500:
 *         description: Erro ao Retornar Detalhe da Auditoria.
 */
router.get('/v1/auditorias/tarefas/periodoInicio/:data_inicio/periodoFim/:data_fim', AuditoriaController.pegaPeriodoAuditoriaTarefas)

/**
 * @swagger
 * /v1/auditorias/pontos/periodoInicio/{data_inicio}/periodoFim/{data_fim}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Auditorias
 *     summary: Retorna Auditoria de Pontos
 *     description: Retorna Lista de Auditoria de Pontos
 *     parameters:
 *       - name: data_inicio
 *         in: path
 *         description: Data inicio do periodo
 *         required: true
 *       - name: data_fim
 *         in: path
 *         description: Data fim do periodo
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhe do Auditoria Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditorias'
 *       500:
 *         description: Erro ao Retornar Detalhe da Auditoria.
 */
router.get('/v1/auditorias/pontos/periodoInicio/:data_inicio/periodoFim/:data_fim', AuditoriaController.pegaPeriodoAuditoriaPontos)

/**
 * @swagger
 * /v1/auditorias/pontos:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Auditorias
 *     summary: Insere uma nova Auditoria de Ponto.
 *     description: Insere uma nova Auditoria de Ponto.
 *     requestBody:
 *       description: Exemplo para inserir um novo Auditoria.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Auditorias_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Auditoria Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditorias'
 *       500:
 *         description: Erro ao Inserir Auditorias.
 */
router.post('/v1/auditorias/pontos', AuditoriaController.criaAuditoriasPontos)

/**
 * @swagger
 * /v1/auditorias/tarefas:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Auditorias
 *     summary: Insere uma nova Auditoria de Tarefa.
 *     description: Insere uma nova Auditoria de Tarefa.
 *     requestBody:
 *       description: Exemplo para inserir um novo Auditoria.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Auditorias_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Auditoria Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditorias'
 *       500:
 *         description: Erro ao Inserir Auditorias.
 */
router.post('/v1/auditorias/tarefas', AuditoriaController.criaAuditoriasTarefas)

module.exports = router