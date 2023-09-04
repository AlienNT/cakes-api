import {errorResponse, returnAfter, successResponse} from "../helpers/responseHelper.js";
import {Basket} from "../models/index.js";
import statusCode from "../helpers/statusCodeHelper.js";
import basketFields from "./fieldsHelper/basketFields.js";

class BasketController {
    async get(req, res) {
        try {
            const {userId} = req.params

            if (!userId) {
                return errorResponse(res, {
                    errors: ['incorrect user id']
                })
            }

            const basket = await Basket.findOne({user: userId})

            if (basket) {
                return successResponse(res, {
                    data: basket
                })
            } else {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['basket not found']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                status: statusCode.NOT_FOUND,
                errors: ['get basket error', e]
            })
        }
    }

    create(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect basket id']
                })
            }

            const updatedBasket = await Basket.findByIdAndUpdate(id, basketFields(req?.body), returnAfter)
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['basket update error', e]
            })
        }
    }

    delete(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

export default new BasketController()