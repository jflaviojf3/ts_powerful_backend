const { Router } = require('express')
const OrganizacaoController = require ('../../controllers/OrganizacaoController')

const router = Router()

//Manutenção de organizações
router.get('/v1/organizacoes', OrganizacaoController.pegaTodosOrganizacao)
router.get('/v1/organizacoes/:id', OrganizacaoController.pegaUmOrganizacao)
router.post('/v1/organizacoes', OrganizacaoController.criaOrganizacao)
router.put('/v1/organizacoes/:id', OrganizacaoController.atualizaOrganizacao)
router.delete('/v1/organizacoes/:id', OrganizacaoController.deletaOrganizacao)

module.exports = router