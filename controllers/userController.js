import {User} from "../models/index.js";
import {errorResponse, include, successResponse} from "../helpers/responseHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";
import {getHash} from "../helpers/authHelper.js";
import {authorizedUserFields, unauthorizedUserFields} from "./fieldsHelper/userFieds.js";

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
                    data: authorizedUserFields(user)
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
                include([
                    '_id',
                    'name',
                    'surname'
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

    async update(req, res) {
        try {
            const {id} = req.params

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect id']
                })
            }
            const updatedUser = await User.findByIdAndUpdate(id, authorizedUserFields(req?.body), {
                returnDocument: 'after'
            })

            if (updatedUser) {
                return successResponse(res, {
                    data: authorizedUserFields(updatedUser)
                })
            } else {
                return errorResponse(res, {
                    errors: ['user not updated']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['user update error']
            })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req?.params
            const user = await User.findByIdAndDelete(id, {
                returnDocument: "after"
            })

            if (user) {
                return successResponse(res, {
                    status: statusCode.ACCEPTED,
                    data: unauthorizedUserFields(user)
                })
            } else {
                return errorResponse(res, {
                    errors: ['user not deleted']
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