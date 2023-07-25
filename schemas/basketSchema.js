import {Schema} from "mongoose";

export const basketSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        amount: {
            type: Schema.Types.Number,
            default: 1,
            min: 1
        }
    }]
}, {
    timestamps: true
})