const { Router } = require('express')
const ParametroController = require ('../../controllers/ParametroController')

const router = Router()

router.get('/v1/parametros', ParametroController.pegaTodosParametros)

module.exports = router