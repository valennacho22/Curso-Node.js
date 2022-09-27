const { Router } = require('express')

const pacientesRoutes = require("./pacientes.Routes")
const medicosRoutes = require("./medicos.Routes")
const tratamientosRoutes = require("./tratamientos.Routes")

const rutas_init = () => {
    const router = Router()

    router.use("/pacientes", pacientesRoutes)
    router.use("/medicos", medicosRoutes)
    router.use("/tratamiento", tratamientosRoutes)

    return router
}

module.exports = { rutas_init }