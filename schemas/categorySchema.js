import {Schema} from "mongoose";
export const categorySchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: [true, 'title is required'],
    },
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    active: {
        type: Schema.Types.Boolean,
        default: true
    },
    name: {
        type: Schema.Types.String,
        required: [true, 'name is required'],
        unique: [true, 'name must be unique']
    }
}, {
    timestamps: true
})