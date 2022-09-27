module.exports = {

    listar: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Listar todos los Tratamientos"
            })
        } catch (err) {
            console.log(err)
        }

    },

    listarInfo: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Información del Tratamiento"
            })
        } catch (err) {
            console.log(err)
        }

    },

    crear: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Crear Tratamiento"
            })
        } catch (err) {
            console.log(err)
        }

    },
}