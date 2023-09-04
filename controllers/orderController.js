import OrderService from "../services/orderService.js";
import {errorResponse, response, successResponse} from "../helpers/responseHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";

class OrderController {
    async getByUserId(req, res) {
        try {
            const {userId} = req?.params

            const order = await OrderService.getByUserId(userId)

            if (order) {
                return successResponse(res, {
                    data: order
                })
            } else {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['order by userId is not defined']
                })
            }

        } catch (e) {
            console.log(e)
            errorResponse(res, {
                errors: [e.message]
            })
        }
    }

    async getById(req, res) {
        try {
            const {id} = req.params?.id

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect user id']
                })
            }

            const order = await OrderService.getById(id)

        } catch (e) {
            console.log(e)
        }
    }

    create() {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    update() {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    delete() {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

export default new OrderController()