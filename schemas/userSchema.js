import {Schema} from "mongoose";

export const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        unique: [true, 'пользователь с таким email уже существует'],
        require: [true, 'email required']
    },
    password: {
        type: Schema.Types.String,
        require: [true, 'password required']
    },
    name: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 30,
        default: null
    },
    surname: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 30,
        default: null
    },
    phone: {
        type: Schema.Types.Number,
        minLength: 8,
        maxLength: 15,
        default: null
    },
    city: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 40,
        default: null
    },
    street: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 40,
        default: null
    },
    house: {
        type: Schema.Types.String,
        default: null
    },
    apartment: {
        type: Schema.Types.Number,
        default: null
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    tokens: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Token'
        }
    ],
    basket: {
        type: Schema.Types.ObjectId,
        ref: 'Basket'
    },
    wishlist: {
        type: Schema.Types.ObjectId,
        ref: 'Wishlist'
    }
}, {
    timestamps: true
})