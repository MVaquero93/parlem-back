import {getProductsById} from "./customer.service";

const customerController = {
    getProductsById: async (req, res) => {
        res.send(await getProductsById(req.params.customerId))
    },
}

export default customerController
