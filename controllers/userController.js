import {User} from "../models/index.js";
import {errorResponse, exclude, successResponse} from "../helpers/responseHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";
import {getHash} from "../helpers/authHelper.js";

class UserController {
    async getById(req, res) {
        try {
            const {id} = req?.params
            const user = await User.findById(id)

            if (!user) {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['user not found']
                })
            } else {
                return successResponse(res, {
                    data: user
                })
            }
        } catch (e) {
            console.log(e)

           return errorResponse(res, {
                errors: ['get user error']
            })
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find({},
                exclude([
                    'orders',
                    'reviews',
                    'tokens',
                    'password',
                    'city',
                    'street',
                    'house',
                    'apartment',
                    'email',
                    'phone'
                ])
            )

            if (!users) {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['users not found']
                })
            } else {
                return successResponse(res, {
                    data: users
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['get users error']
            })
        }
    }

    async create(req) {
        try {
            const {email, password} = req?.body;

            return await User.create({email, password: getHash(password)})

        } catch (e) {
            console.log(e)

            return null
        }
    }

    update() {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req?.params
            const user = await User.findOneAndDelete({_id: id})

            if (user) {
                return successResponse(res, {
                    status: statusCode.ACCEPTED
                })
            } else {
                return errorResponse(res, {
                    errors: ['delete error']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['delete error']
            })
        }
    }
}

export default new UserController()