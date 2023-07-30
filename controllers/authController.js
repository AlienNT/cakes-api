import {
    comparePassword,
    getPublicAuthFields
} from "../helpers/authHelper.js";
import {
    checkRequireFields,
    clearCookie,
    errorResponse,
    setCookie,
    successResponse
} from "../helpers/responseHelper.js";
import {Token, User} from "../models/index.js";
import userController from "./userController.js";
import statusCode from "../helpers/statusCodeHelper.js";
import tokenController from "./tokenController.js";

class AuthController {
    async registration(req, res) {
        try {
            const {email, password} = req?.body
            const errors = checkRequireFields({email, password})

            if (errors.length) {
                return errorResponse(res, {
                    errors: errors
                })
            }
            const isUserExist = await User.findOne({email})

            if (!isUserExist) {
                const user = await userController.create(req, res)

                return successResponse(res, {
                    status: statusCode.CREATED,
                    data: getPublicAuthFields(user)
                })
            } else {
                return errorResponse(res, {
                    errors: ['user already exist']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['registration error']
            })
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req?.body

            const errors = checkRequireFields({email, password})

            if (errors.length) {
                return errorResponse(res, {
                    errors: errors
                })
            }

            const user = await User.findOne({email})

            if (!user) {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['user with this email not found']
                })
            }
            req.userId = user._id

            const isCorrectPass = comparePassword(password, user.password)

            const {refreshToken, accessToken} = await tokenController.create(req, res)

            if (!refreshToken) {
                return errorResponse(res, {
                    errors: ['token create error']
                })
            }

            if (isCorrectPass) {
                setCookie(res, {
                    name: "refreshToken",
                    value: refreshToken
                })

                return successResponse(res, {
                    data: {
                        accessToken
                    }
                })
            } else {
                return errorResponse(res, {
                    errors: ['wrong password']
                })
            }

        } catch (e) {
            console.log('AuthController login', e)
            return errorResponse(res, {
                errors: ['login error']
            })
        }
    }

    async logout(req, res) {
        try {
            const deletedToken = await tokenController.deleteRefreshToken(req)

            clearCookie(res, {
                name: 'refreshToken'
            })
            return successResponse(res, {
                data: {
                    deletedToken: deletedToken?.value || null
                }
            })

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['logout error']
            })
        }
    }

    async logoutOnAllDevices(req, res) {
        try {
            const {refreshToken} = req.cookies

            const token = await Token.findOne({value: refreshToken})

            if (!token) {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['token not found']
                })
            }

            const deletedTokens = await Token.deleteMany({user: token?.user})

            clearCookie(res, {
                name: 'refreshToken'
            })
            return successResponse(res, {
                data: {
                    deletedToken: deletedTokens
                }
            })

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['logout error']
            })
        }
    }
}

export default new AuthController()