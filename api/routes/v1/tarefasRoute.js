const { Router } = require('express')
const TarefaController = require ('../../controllers/TarefaController')

const router = Router()

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefa:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna lista de todos as Tarefas do usuário
 *     description: Retorna a lista completa das tarefas do usuário da base
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna tarefas de um usuário
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Tarefa Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Tarefas de Usuários.
 */
router.get('/v1/usuarios/:id_usuario/tarefa', TarefaController.pegaTodasTarefasUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefa/{id_tarefa}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna uma Tarefas do usuário
 *     description: Retorna uma Tarefa do usuário da base
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna tarefas de um usuário
 *         required: true
 *       - name: id_tarefa
 *         in: path
 *         description: Id da tarefa para retorna todas as entradas de uma tarefa
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Todas Entradas de uma Tarefa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Entrada de Tarefa de Usuários.
 */
router.get('/v1/usuarios/:id_usuario/tarefa/:id_tarefa', TarefaController.pegaUmaTarefaUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefaDia/{dia}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna lista de tarefas incluidas no dia.
 *     description: Retorna lista de tarefas incluidas no dia com todas as entradas;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna tarefas de um usuário
 *         required: true
 *       - name: dia
 *         in: path
 *         description: Dia atual ou o dia que pretende retornar
 *         required: true
 *         example: 20230501
 *     responses:
 *       200:
 *         description: Lista de Tarefa do dia Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Tarefas do dia.
 */
router.get('/v1/usuarios/:id_usuario/tarefaDia/:dia', TarefaController.pegaTarefaDoDiaUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefaDia/{dia}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna lista de tarefas incluidas no dia.
 *     description: Retorna lista de tarefas incluidas no dia com todas as entradas;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna tarefas de um usuário
 *         required: true
 *       - name: dia
 *         in: path
 *         description: Dia atual ou o dia que pretende retornar
 *         required: true
 *         example: 20230501
 *     responses:
 *       200:
 *         description: Lista de Tarefa do dia Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Tarefas do dia.
 */
router.get('/v1/usuarios/:id_usuario/tarefaAtiva', TarefaController.pegaTarefaAtivaUsuario)


/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefasPorDia:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna lista de tarefas incluidas no dia.
 *     description: Retorna lista de tarefas incluidas no dia com todas as entradas;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna tarefas de um usuário
 *         required: true
 *       - name: dia
 *         in: path
 *         description: Dia atual ou o dia que pretende retornar
 *         required: true
 *         example: 20230501
 *     responses:
 *       200:
 *         description: Lista de Tarefa do dia Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Tarefas do dia.
 */
router.get('/v1/usuarios/:id_usuario/tarefaPorDia', TarefaController.pegaTarefasPorDiaUsuario)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefaInicio/{data_inicio}/tarefaFim/{data_fim}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna lista de tarefas incluidas no periodo.
 *     description: Retorna lista de tarefas incluidas no periodo informado com todas as entradas;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para retorna tarefas de um usuário
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
 *         description: Lista de Tarefa do Periodo com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Tarefas do Periodo.
 */
router.get('/v1/usuarios/:id_usuario/tarefaInicio/:data_inicio/tarefaFim/:data_fim', TarefaController.pegaPeriodoTarefaUsuario)

/**
 * @swagger
 * /v1/projeto/{id_projeto}/tarefaInicio/{data_inicio}/tarefaFim/{data_fim}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Retorna lista de tarefas incluidas no periodo relacionado a um projeto.
 *     description: Retorna lista de tarefas incluidas no periodo informado com todas as entradas;
 *     parameters:
 *       - name: id_projeto
 *         in: path
 *         description: Id do projeto para retorna tarefas de um projeto
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
 *         description: Lista de Tarefa de um Projeto Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Lista de Tarefas de um Projeto.
 */
router.get('/v1/projeto/:id_projeto/tarefaInicio/:data_inicio/tarefaFim/:data_fim', TarefaController.pegaPeriodoTarefasProjetos)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefa:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Insere uma nova Tarefa.
 *     description: Insere uma nova tarefa relacionada a um usuário e podendo ou não está relacionado a um projeto;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para inserir tarefa
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir uma nova tarefa
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Tarefas_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Tarefa de Usuário Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Inserir Tarefas.
 */
router.post('/v1/usuarios/:id_usuario/tarefa', TarefaController.criaTarefa)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefa/{id_tarefa}/entrada/{cod_entrada}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Atualiza uma Tarefa.
 *     description: Atualiza uma tarefa relacionada a um usuário e podendo ou não está relacionado a um projeto;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do usuário para inserir tarefa
 *         required: true
 *       - name: id_tarefa
 *         in: path
 *         description: Id da tarefa
 *         required: true
 *       - name: cod_entrada
 *         in: path
 *         description: Codigo da tarefa relacionado ao ID tarefa
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar uma nova tarefa
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Tarefas_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Lista de Tarefa Atualizada com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Retornar Tarefa Atualizada.
 */
router.put('/v1/usuarios/:id_usuario/tarefa/:id_tarefa/entrada/:cod_entrada', TarefaController.atualizaTarefa)

/**
 * @swagger
 * /v1/usuarios/{id_usuario}/tarefa/{id_tarefa}/entrada/{cod_entrada}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tarefas
 *     summary: Deleta uma Tarefa.
 *     description: Deleta uma tarefa relacionada a um usuário e podendo ou não está relacionado a um projeto;
 *     parameters:
 *       - name: id_usuario
 *         in: path
 *         description: Id do Usuário
 *         required: true
 *       - name: id_tarefa
 *         in: path
 *         description: Id da Tarefa
 *         required: true
 *       - name: cod_entrada
 *         in: path
 *         description: Codigo da tarefa relacionado ao ID tarefa
 *         required: true
 *     responses:
 *       200:
 *         description: Tarefa Deletada com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefas'
 *       500:
 *         description: Erro ao Deletar Tarefa.
 */
router.delete('/v1/usuarios/:id_usuario/tarefa/:id_tarefa/entrada/:cod_entrada', TarefaController.deletaTarefa)


module.exports = router