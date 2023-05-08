const { Router } = require('express')
const CargoController = require ('../../controllers/CargoController')

const router = Router()

//Cargos
router.get('/v1/cargos', CargoController.pegaTodosCargos)
router.get('/v1/cargos/:id', CargoController.pegaUmCargo)
router.post('/v1/cargos', CargoController.criaCargo)
router.put('/v1/cargos/:id', CargoController.atualizaCargo)
router.delete('/v1/cargos/:id', CargoController.deletaCargo)

//Atribuicoes
router.get('/v1/cargos/:id_cargos/atribuicoes', CargoController.pegaTodasAtribuicoes)
router.post('/v1/cargos/:id_cargos/atribuicoes', CargoController.criaAtribuicao)
router.put('/v1/cargos/:id_cargos/atribuicoes/:id_atribuicoes', CargoController.atualizaAtribuicao)
router.delete('/v1/cargos/:id_cargos/atribuicoes/:id_atribuicoes', CargoController.deletaAtribuicao)

module.exports = router