import express from 'express'
const router = express.Router()
import customerCtr from '../../modules/customer/customer.controller'

router.get('/:customerId', customerCtr.getProductsById)

export default router
