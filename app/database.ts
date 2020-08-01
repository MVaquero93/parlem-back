import {connect, connection } from 'mongoose'
import envConfig from "./config/env"

connect(envConfig.dbString, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    reconnectTries: 10,
}).then(() => {
    console.log('mongo connect success')
}).catch((err) => {
    console.log('mongo connect fail ' + (err.message || 'db error'))
})

const db = connection

export default db
