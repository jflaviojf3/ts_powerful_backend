const { Router } = require('express')
const PontoController = require ('../../controllers/PontoController')

const router = Router()

router.get('/v1/usuarios/:id_usuario/pontos', PontoController.pegaTodosPontosUsuario)
router.get('/v1/usuarios/:id_usuario/pontos/:id_ponto', PontoController.pegaUmPontoUsuario)
router.get('/v1/usuarios/:id_usuario/pontosDia/:dia', PontoController.pegaPontoDoDiaUsuario)
router.post('/v1/usuarios/:id_usuario/pontos', PontoController.criaPonto)
/*router.put('/v1/usuarios/:id_usuarios/:id_ponto', PontoController.atualizaUsuario)
router.delete('/v1/usuarios/:id_usuarios/:id_ponto', PontoController.deletaUsuario)
*/

module.exports = router