const { Router } = require('express')
const UsuarioController = require ('../../controllers/UsuarioController')

const router = Router()

router.get('/v1/usuarios', UsuarioController.pegaTodosUsuarios)
router.get('/v1/usuarios/:id', UsuarioController.pegaUmUsuario)
router.post('/v1/usuarios', UsuarioController.criaUsuario)
router.put('/v1/usuarios/:id', UsuarioController.atualizaUsuario)
router.delete('/v1/usuarios/:id', UsuarioController.deletaUsuario)


module.exports = router