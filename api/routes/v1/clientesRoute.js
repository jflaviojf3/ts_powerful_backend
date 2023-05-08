const { Router } = require('express')
const ClienteController = require ('../../controllers/ClienteController')

const router = Router()

//ROTAS PARA RETORNO DOS CLIENTES
router.get('/v1/clientes', ClienteController.pegaTodosClientes)
router.get('/v1/clientes/:id', ClienteController.pegaUmCliente)
router.post('/v1/clientes', ClienteController.criaCliente)
router.put('/v1/clientes/:id', ClienteController.atualizaCliente)
router.delete('/v1/clientes/:id', ClienteController.deletaCliente)

module.exports = router