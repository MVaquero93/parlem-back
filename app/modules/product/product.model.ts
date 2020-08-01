import {Document, model, Schema} from 'mongoose'

export interface ProductModel {
    productName: string,
    productTypeName: string,
    numeracioTerminal: number,
    soldAt: string,
    customerId: number,
}


export interface ProductDocument extends Document, ProductModel {}

const productSchema = new Schema({
    productName: {
        type: String,
    },
    productTypeName: {
        type: String,
    },
    numeracioTerminal: {
        type: Number,
    },
    soldAt: {
        type: Date,
    },
    customerId: {
        type: Number,
    },
}, {
    timestamps: true,
})

productSchema.virtual('customer',{
    ref: 'Customer',
    localField: 'customerId',
    foreignField: 'customerId',
});


const Product = model<ProductDocument>('Product', productSchema)

export default Product
