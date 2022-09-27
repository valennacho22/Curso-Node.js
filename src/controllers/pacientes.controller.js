module.exports = {

    listar: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Listar todos los Pacientes"
            })
        } catch (err) {
            console.log(err)
        }

    },

    listarInfo: async (req, res) => {
        try{
            console.log('Ejecutando Programa')

            res.json({
                message: "Información del Paciente"
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