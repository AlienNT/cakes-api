import {Token} from "../models/index.js";
import {generateRefreshToken} from "../helpers/authHelper.js";

class TokenController {
    async create(req, res) {
        try {
            const {userId} = req
            const {remoteAddress} = req.socket
            const userAgent = req.headers['user-agent']

            const tokens = await Token
                .find({user: userId})
                .sort({orderNumber: 1})

            if (tokens?.length >= 5) {
                const oldestToken = tokens[0]

                const deletedToken = await Token.deleteOne(oldestToken._id)

                if (!deletedToken) {
                    return null
                }

            }
            const {value} = await Token.create({
                value: generateRefreshToken(),
                user: userId,
                ipAddress: remoteAddress,
                userAgent
            })

            return value
        } catch (e) {
            console.log(e)
            return null
        }
    }

    getAccess(req, res) {
        try {
            res.json({message: ''})
        } catch (e) {
            console.log(e)
        }
    }

    deleteRefreshToken(req) {
        try {
            const targetRefreshToken = req.cookies?.refreshToken
            return Token.findOneAndDelete({value: targetRefreshToken})
        } catch (e) {
            console.log(e)
            return null
        }
    }
}

export default new TokenController()