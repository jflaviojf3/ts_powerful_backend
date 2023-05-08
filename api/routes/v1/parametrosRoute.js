const { Router } = require('express')
const ParametroController = require ('../../controllers/ParametroController')

const router = Router()

router.get('/v1/parametros', ParametroController.pegaTodosParametros)
router.get('/v1/parametros/propriedade/:id_param', ParametroController.pegaTodosPropriedadeParametro)
router.get('/v1/parametros/:id', ParametroController.pegaUmParametro)
router.post('/v1/parametros', ParametroController.criaParametro)
router.put('/v1/parametros/:id', ParametroController.atualizaParametro)
router.delete('/v1/parametros/:id', ParametroController.deletaParametro)

module.exports = router