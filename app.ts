import express from 'express'
import envConfig from './app/config/env'
import router from './app/routes/index'
import './app/database'

const app = express()


// Middlewares

app.use(router)

const appServer = app.listen(envConfig.app.port, () => {
    console.log('listening at port: ' + envConfig.app.port)
})

export default appServer
