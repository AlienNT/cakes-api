import {Schema} from "mongoose";

const tokenSchema = new Schema({
    token: {
        type: Schema.Types.String,
        unique: true,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
}, {
    timestamps: true,
    expireAfterSeconds: 86400
})