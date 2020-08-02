import Customer from "./customer.model";


const getProductsById = (id) => {
    return Customer.findById(id).populate('subscribedProducts')
}

export {
    getProductsById
}
