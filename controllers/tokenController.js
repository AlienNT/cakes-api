import {Token} from "../models/index.js";
import {generateAccessToken, generateRefreshToken} from "../helpers/authHelper.js";

class TokenController {
    async create(req) {
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

            const refreshToken = generateRefreshToken()
            const accessToken = generateAccessToken(userId)

            const {value} = await Token.create({
                value: refreshToken,
                user: userId,
                ipAddress: remoteAddress,
                userAgent
            })
            return value ? {
                refreshToken,
                accessToken
            } : null
        } catch (e) {
            console.log(e)
            return null
        }
    }

    getAccess(req, res) {
        try {
            res.json({message: ''})
        } catch (e) {
            console.log('TokenController create', e)
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