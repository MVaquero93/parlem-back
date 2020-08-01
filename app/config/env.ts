import {config} from 'dotenv'
config()

const envConfig = {
    app: {
        protocol: process.env.APP_PROTOCOL || 'http',
        domain: process.env.APP_DOMAIN || 'localhost',
        port: process.env.PORT  || '3030',
    },
}

export default envConfig

