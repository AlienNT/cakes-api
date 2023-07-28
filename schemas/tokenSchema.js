import {Schema} from "mongoose";

export const tokenSchema = new Schema({
    value: {
        type: Schema.Types.String,
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true,
    expireAfterSeconds: 86400
})