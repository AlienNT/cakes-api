import {Schema} from "mongoose";

export const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    rate: {
        type: Schema.Types.Number,
        min: 1,
        max: 5,
        require: false,
        default: null
    },
    description: {
        type: Schema.Types.String,
        maxLength: 500
    }
}, {
    timestamps: true
})