module.exports = {

    listar: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Listar todos los medicos"
            })
        } catch (err) {
            console.log(err)
        }

    },

    listarInfo: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Información del Medico"
            })
        } catch (err) {
            console.log(err)
        }

    },

    crear: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Crear Usuario"
            })
        } catch (err) {
            console.log(err)
        }

    },
}