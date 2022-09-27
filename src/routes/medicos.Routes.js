const router = require('express').Router()

const medicosRoutes = require('../controllers/medicos.controller')

router.get('/', medicosRoutes.listar)
router.post('/', medicosRoutes.crear)
router.get('/:idMedicos', medicosRoutes.listarInfo)

module.exports = router