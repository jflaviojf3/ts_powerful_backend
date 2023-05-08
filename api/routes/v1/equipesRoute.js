const { Router } = require('express')
const EquipeController = require ('../../controllers/EquipeController')

const router = Router()

//Criação e Organização de Equipes
router.get('/v1/organizacoes/:id_organizacao/equipes', EquipeController.pegaTodasEquipes)
router.get('/v1/organizacoes/:id_organizacao/equipes/:id_equipe', EquipeController.pegaUmaEquipes)
router.post('/v1/organizacoes/:id_organizacao/equipes', EquipeController.criaEquipe)
router.put('/v1/organizacoes/:id_organizacao/equipes/:id_equipe', EquipeController.atualizaEquipe)
router.delete('/v1/organizacoes/:id_organizacao/equipes/:id_equipe', EquipeController.deletaEquipe)

router.get('/v1/equipes/:id_equipe/usuarios', EquipeController.pegaEquipeUsuarios)
router.post('/v1/equipes/:id_equipe/usuarios', EquipeController.criaEquipeUsuario)
router.delete('/v1/equipes/:id_equipe/usuarios/:id_usuario', EquipeController.deletaEquipeUsuario)

module.exports = router