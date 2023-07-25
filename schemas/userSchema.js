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
        maxLength: 30
    },
    surname: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 30
    },
    phone: {
        type: Schema.Types.Number,
        minLength: 8,
        maxLength: 15
    },
    city: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 40
    },
    street: {
        type: Schema.Types.String,
        minLength: 2,
        maxLength: 40
    },
    house: {
        type: Schema.Types.String
    },
    apartment: {
        type: Schema.Types.Number
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    tokens: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Token'
        }
    ]
}, {
    timestamps: true
})