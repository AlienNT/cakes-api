import {User} from "../models/index.js";
import {getToken, verifyUser} from "../helpers/authHelper.js";


export default async function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = getToken(req)

        if (!token) {
            return res.status(401).json({message: "user unauthorized"})
        }
        const {_id} = verifyUser(token)
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).json({message: "user not found"})
        }
        req.user = user

        next()
    } catch (e) {
        console.log(e)
        return res.status(401).json({message: "user unauthorized"})
    }
}