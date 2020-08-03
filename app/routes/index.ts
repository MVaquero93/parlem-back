import express from 'express'
import apiRouter from './api/index'

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: 'Hello Parlem!',
    })
})

router.use('/api', apiRouter)

export default router
