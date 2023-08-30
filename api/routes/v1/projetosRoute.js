const { Router } = require('express')
const ProjetoController = require ('../../controllers/ProjetoController')

const router = Router()

//Criação e organização de projetos

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/projetos:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Projetos
 *     summary: Retorna lista de Projetos
 *     description: Retorna a lista de projetos relacionado a organização.
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Projetos Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projetos'
 *       500:
 *         description: Erro ao Retornar Lista de Projetos.
 */
router.get('/v1/organizacoes/:id_organizacao/projetos', ProjetoController.pegaTodosProjetos)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/projetos/{id_projeto}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Projetos
 *     summary: Retorna um projeto da organização
 *     description: Retorna detalhes de um projeto da organização selecionado pelo usuário
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização para filtro
 *         required: true
 *       - name: id_projeto
 *         in: path
 *         description: Id do projeto que esteja relacionado a organização
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhe completo do projeto Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projetos'
 *       500:
 *         description: Erro ao Retornar Detalhe do Projeto.
 */
router.get('/v1/organizacoes/:id_organizacao/projetos/:id_projeto', ProjetoController.pegaUmProjeto)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/projetos:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Projetos
 *     summary: Insere um novo projeto.
 *     description: Insere um novo projeto relacionado a uma organização
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir um novo projeto
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Projetos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Projeto Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projetos'
 *       500:
 *         description: Erro ao Inserir Projetos.
 */
router.post('/v1/organizacoes/:id_organizacao/projetos', ProjetoController.criaProjeto)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/projetos/{id_projeto}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Projetos
 *     summary: Atualiza um Projeto.
 *     description: Atualiza um projeto relacionado a uma organização;
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da organização
 *         required: true
*       - name: id_projeto
 *         in: path
 *         description: Id do projeto
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar um projeto
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Projetos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualiza Projeto com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projetos'
 *       500:
 *         description: Erro ao Atualizar Projeto.
 */
router.put('/v1/organizacoes/:id_organizacao/projetos/:id_projeto', ProjetoController.atualizaProjeto)

/**
 * @swagger
 * /v1/organizacoes/{id_organizacao}/projetos/{id_projeto}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Projetos
 *     summary: Deleta um Projeto.
 *     description: Deleta um projeto relacionada a uma organização;
 *     parameters:
 *       - name: id_organizacao
 *         in: path
 *         description: Id da Organização
 *         required: true
 *       - name: id_projeto
 *         in: path
 *         description: Id do Projeto
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Projeto com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projetos'
 *       500:
 *         description: Erro ao Deletar Projeto.
 */
router.delete('/v1/organizacoes/:id_organizacao/projetos/:id_projeto', ProjetoController.deletaProjeto)


//Manutenção do OBJETIVOS de projetos

/**
 * @swagger
 * /v1/projetos/{id_projeto}/objetivos:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Objetivos
 *     summary: Retorna lista de Objetivos
 *     description: Retorna a lista de Objetivos relacionado a um projeto.
 *     parameters:
 *       - name: id_projeto
 *         in: path
 *         description: Id do Projeto
 *         required: true
 *     responses:
 *       200:
 *         description: Lista de Objetivos Completa Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Objetivos'
 *       500:
 *         description: Erro ao Retornar Lista de Objetivos de Projeto.
 */
router.get('/v1/projetos/:id_projeto/objetivos', ProjetoController.pegaTodosObjetivos)

/**
 * @swagger
 * /v1/projetos/{id_projeto}/objetivos:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Objetivos
 *     summary: Insere uma novo objetivo.
 *     description: Insere uma novo objetivo relacionado a uma projeto.
 *     parameters:
 *       - name: id_projeto
 *         in: path
 *         description: Id do Projeto
 *         required: true
 *     requestBody:
 *       description: Exemplo para inserir um novo Objetivo
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Objetivos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Insere Objetivo Com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Objetivos'
 *       500:
 *         description: Erro ao Inserir Objetivo.
 */
router.post('/v1/projetos/:id_projeto/objetivos', ProjetoController.criaObjetivo)

/**
 * @swagger
 * /v1/projetos/{id_projeto}/objetivos/{id_objetivo}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Objetivos
 *     summary: Atualiza um Objetivo.
 *     description: Atualiza um Objetivo relacionado a uma Projeto;
 *     parameters:
 *       - name: id_projeto
 *         in: path
 *         description: Id do Projeto
 *         required: true
*       - name: id_objetivo
 *         in: path
 *         description: Id do Objetivo
 *         required: true
 *     requestBody:
 *       description: Exemplo para atualizar um Objetivo
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBody/Objetivos_put_post'
 *       required: true
 *     responses:
 *       200:
 *         description: Atualiza Objetivos com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Objetivos'
 *       500:
 *         description: Erro ao Atualizar Objetivos.
 */
router.put('/v1/projetos/:id_projeto/objetivos/:id_objetivo', ProjetoController.atualizaObjetivo)

/**
 * @swagger
 * /v1/projetos/{id_projeto}/objetivos/{id_objetivo}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Objetivos
 *     summary: Deleta Objetivo de um Projeto.
 *     description: Deleta um Objetivo de um projeto relacionada a uma organização;
 *     parameters:
 *       - name: id_projeto
 *         in: path
 *         description: Id do Projeto
 *         required: true
 *       - name: id_objetivo
 *         in: path
 *         description: Id do Objetivo
 *         required: true
 *     responses:
 *       200:
 *         description: Deleta Objetivo com Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Objetivos'
 *       500:
 *         description: Erro ao Deletar Projeto.
 */
router.delete('/v1/projetos/:id_projeto/objetivos/:id_objetivo', ProjetoController.deletaObjetivo)

module.exports = router