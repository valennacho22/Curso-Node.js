const router = require('express').Router()

const tratamientosRoutes = require('../controllers/tratamientos.controller')

router.get('/', tratamientosRoutes.listar)
router.post('/', tratamientosRoutes.crear)
router.get('/:idTratamientos', tratamientosRoutes.listarInfo)

module.exports = router