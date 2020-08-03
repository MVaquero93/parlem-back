import express from 'express'
import envConfig from './app/config/env'
import router from './app/routes/index'
import './app/database'
import corsMiddleware from './app/middlewares/cors'

const app = express()

app.use(
    router,
    corsMiddleware
)

const appServer = app.listen(envConfig.app.port, () => {
    console.log('listening at port: ' + envConfig.app.port)
})

export default appServer
