import {Document, model, Schema} from 'mongoose'

export interface CustomerModel {
    givenName: string,
    docType: string,
    docNum: string,
    email: string,
    familyName1: string,
    phone: string,
    customerId: number,
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
    customerId: {
        type: Number,
    }
}, {
    timestamps: true,
})

const Customer = model<CustomerDocument>('Customer', customerSchema)

export default Customer
