import {Schema} from "mongoose";
import {config} from "../config/index.js";

export const tokenSchema = new Schema({
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
    }
}, {
    timestamps: true,
    expireAfterSeconds: config.REFRESH_TOKEN_EXPIRES
})