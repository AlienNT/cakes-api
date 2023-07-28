import {
    comparePassword,
    generateAccessToken,
    generateRefreshToken,
    getPublicAuthFields
} from "../helpers/authHelper.js";
import {checkRequireFields, errorResponse, successResponse} from "../helpers/responseHelper.js";
import {User} from "../models/index.js";
import userController from "./userController.js";
import statusCode from "../helpers/statusCodeHelper.js";
import {config} from "../config/index.js";

class AuthController {
    async registration(req, res) {
        try {
            const {email, password} = req?.body
            const errors = checkRequireFields({email, password})

            if (errors.length) {
                errorResponse(res, {
                    errors: errors
                })
            }
            const isUserExist = await User.findOne({email})

            if (!isUserExist) {
                const user = await userController.create(req, res)

                successResponse(res, {
                    status: statusCode.CREATED,
                    data: getPublicAuthFields(user)
                })
            } else {
                errorResponse(res, {
                    errors: ['user already exist']
                })
            }
        } catch (e) {
            console.log(e)
            errorResponse(res, {
                errors: ['registration error']
            })
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req?.body
            console.log('cookies', req?.cookies)
            const errors = checkRequireFields({email, password})

            if (errors.length) {
                errorResponse(res, {
                    errors: errors
                })
            }

            const user = await User.findOne({email})

            if (!user) {
                errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['user with this email not found']
                })
            }
            const isCorrectPass = comparePassword(password, user.password)

            if (isCorrectPass) {
                successResponse(res, {
                    data: {
                        ip: req.socket.remoteAddress,
                        refreshToken: generateRefreshToken(),
                        accessToken: generateAccessToken(user._id)
                    },
                    cookie: {
                        name: "refreshToken",
                        value: generateRefreshToken(),
                        config: {
                            secure: config.IS_COOKIE_SECURE,
                            httpOnly: true,
                            expires: config.REFRESH_TOKEN_EXPIRES,
                        }
                    }
                })
            } else {
                errorResponse(res, {
                    errors: ['wrong password']
                })
            }

        } catch (e) {
            console.log(e)
            errorResponse(res, {
                errors: ['login error']
            })
        }
    }

    logout(req, res) {
        try {
            res.json({message: 'logout'})
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AuthController()