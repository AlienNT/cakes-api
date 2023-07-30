import {Schema} from "mongoose";

export const productSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: [true, 'title is required'],
        minLength: 2,
        maxLength: 255
    },
    description: {
        type: Schema.Types.String,
        maxLength: 500
    },
    compound: {
        type: Schema.Types.String,
        maxLength: 600
    },
    weight: {
        type: Schema.Types.Number,
        default: null,
        min: 0

    },
    quantity: {
        type: Schema.Types.Number,
        default: 0,
        min: 0
    },
    manufacturer: {
        type: Schema.Types.String,
    },
    more: {
        type: Schema.Types.String,
        maxLength: 500
    },
    price: {
        type: Schema.Types.Number,
        required: [true, 'price is required'],
        min: 0
    },
    rating: {
        type: Schema.Types.Number,
        default: null,
        max: 5,
        min: 1
    },
    discount: {
        type: Schema.Types.Number,
        min: 0,
        max: 100,
        default: null
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'category id is required']
    }
}, {
    timestamps: true
})