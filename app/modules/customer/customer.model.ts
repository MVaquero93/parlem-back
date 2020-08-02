import {Document, model, Schema} from 'mongoose'
import {ProductDocument} from "../product/product.model";
import "../product/product.model"

export interface CustomerModel {
    givenName: string,
    docType: string,
    docNum: string,
    email: string,
    familyName1: string,
    phone: string,
    subscribedProducts: ProductDocument['_id'],
}


export interface CustomerDocument extends Document, CustomerModel {}

const customerSchema = new Schema({
    givenName: {
        type: String,
    },
    docType: {
        type: String,
    },
    docNum: {
        type: String,
    },
    email: {
        type: String,
    },
    familyName1: {
        type: String,
    },
    phone: {
        type: String,
    },
    subscribedProducts: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
}, {
    timestamps: true,
})


const Customer = model<CustomerDocument>('Customer', customerSchema)

export default Customer
