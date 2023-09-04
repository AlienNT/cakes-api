import {Order} from "../models/index.js";
import {returnAfter} from "../helpers/responseHelper.js";

function error(message) {
    throw new Error(message)
}

class OrderService {
    async getById(id) {
        return Order.findById(id);
    }

    async getByUserId(userId) {
        return Order.find({userId});
    }

    async create(order) {
        return Order.create(order);
    }

    async update(id, order) {
        return Order.findByIdAndUpdate(id, order, returnAfter);
    }

    async delete(id) {
        return Order.findByIdAndDelete(id);
    }
}

export default new OrderService()