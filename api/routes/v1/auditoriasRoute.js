const { Router } = require('express')
const AuditoriaController = require ('../../controllers/AuditoriaController')

const router = Router()

router.get('/v1/auditorias', AuditoriaController.pegaTodosAuditoria)
router.get('/v1/auditorias/tarefas/periodoInicio/:data_inicio/periodoFim/:data_fim', AuditoriaController.pegaPeriodoAuditoriaTarefas)
router.get('/v1/auditorias/pontos/periodoInicio/:data_inicio/periodoFim/:data_fim', AuditoriaController.pegaPeriodoAuditoriaPontos)
router.post('/v1/auditorias/pontos', AuditoriaController.criaAuditoriasPontos)
router.post('/v1/auditorias/tarefa', AuditoriaController.criaAuditoriasTarefas)

module.exports = router