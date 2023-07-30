import {Schema} from "mongoose";
import {config} from "../config/index.js";

const tokenSchema = new Schema({
    value: {
        type: Schema.Types.String,
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    ipAddress: {
        type: Schema.Types.String,
    },
    userAgent: {
        type: Schema.Types.String,
    },
}, {
    timestamps: true,
})

tokenSchema.index({createdAt: 1}, {expireAfterSeconds: config.REFRESH_TOKEN_EXPIRES.number})

export default tokenSchema