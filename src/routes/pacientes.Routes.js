const router = require('express').Router()

const pacientesRoutes = require('../controllers/pacientes.controller')

router.get('/', pacientesRoutes.listar)
router.post('/', pacientesRoutes.crear)
router.get('/:idPacientes', pacientesRoutes.listarInfo)

module.exports = router