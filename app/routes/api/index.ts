import express from 'express'
import productRouter from './product.route'
import customerRouter from './customer.route'

const router = express.Router()

router.use('/customer', customerRouter)

router.use('/product', productRouter)

export default router
