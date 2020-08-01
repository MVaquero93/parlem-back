import {config} from 'dotenv'
config()

const envConfig = {
    app: {
        protocol: process.env.APP_PROTOCOL || 'http',
        domain: process.env.APP_DOMAIN || 'localhost',
        port: process.env.PORT  || '3030',
    },
    dbString: process.env.DB_STRING || 'mongodb://127.0.0.1:27017/parlem'
}

export default envConfig

