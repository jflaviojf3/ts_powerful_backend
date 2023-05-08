const { Router } = require('express')
const ProjetoController = require ('../../controllers/ProjetoController')

const router = Router()

//Criação e organização de projetos
router.get('/v1/organizacoes/:id_organizacao/projetos', ProjetoController.pegaTodosProjetos)
router.get('/v1/organizacoes/:id_organizacao/projetos/:id', ProjetoController.pegaUmProjeto)
router.post('/v1/organizacoes/:id_organizacao/projetos', ProjetoController.criaProjeto)
router.put('/v1/organizacoes/:id_organizacao/projetos/:id', ProjetoController.atualizaProjeto)
router.delete('/v1/organizacoes/:id_organizacao/projetos/:id', ProjetoController.deletaProjeto)

//Manutenção do objetivos de projetos
router.get('/v1/projetos/:id_projeto/objetivos', ProjetoController.pegaTodosObjetivos)
router.post('/v1/projetos/:id_projeto/objetivos', ProjetoController.criaObjetivo)
router.put('/v1/projetos/:id_projeto/objetivos/:id_objetivo', ProjetoController.atualizaObjetivo)
router.delete('/v1/projetos/:id_projeto/objetivos/:id_objetivo', ProjetoController.deletaObjetivo)

module.exports = router