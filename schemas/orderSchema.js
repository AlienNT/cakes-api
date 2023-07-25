import {Schema} from "mongoose";

export const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true,
        amount: {
            type: Schema.Types.Number,
            default: 1,
            min: 1
        }
    }]
}, {
    timestamps: true
})