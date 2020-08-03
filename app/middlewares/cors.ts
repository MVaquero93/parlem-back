import cors from 'cors'

const corsMiddleware = cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    optionsSuccessStatus: 200,
})

export default corsMiddleware
