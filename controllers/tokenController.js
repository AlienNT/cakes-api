import {Token} from "../models/index.js";

class TokenController {
    getAccess(req, res) {
        try {
            res.json({message: ''})
        } catch (e) {
            console.log(e)
        }
    }

    deleteRefreshToken(req, res) {
        try {
            const deletedToken = Token.findOneAndDelete()
            res.json({message: ''})
        } catch (e) {
            console.log(e)
        }
    }
}
export default new TokenController()