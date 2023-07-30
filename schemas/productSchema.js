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
        require: false,
        min: 0

    },
    quantity: {
        type: Schema.Types.Number,
        require: false,
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
        require: true,
        min: 0
    },
    rating: {
        type: Schema.Types.Number,
        require: false,
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
    ]
}, {
    timestamps: true
})