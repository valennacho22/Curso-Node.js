const express = require('express');

const globalConstants = require('./const/globalConstants')

const routerConfig = require('./routes/index.routes')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
}
const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())
}

const init = () => {
    const app = express()
    configuracionApi(app)

    configuracionRouter(app)

    app.listen(globalConstants.PORT)
    console.log('Ejecutando aplicacion en el puerto: ' + globalConstants.PORT)

}

init();

