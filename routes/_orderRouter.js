import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import OrderController from "../controllers/orderController.js";
import router from "./index.js";
import {Router} from "express";

const _orderRouter = Router()
    .get(
        readonlyRoute.ORDERS_BY_USER_ID,
        OrderController.getByUserId
    )
    .get(
        readonlyRoute.ORDERS_BY_ID,
        OrderController.getById
    )
    .post(
        readonlyRoute.ORDERS_CREATE,
        OrderController.create
    )
    .patch(
        readonlyRoute.ORDERS_UPDATE,
        OrderController.update
    )
    .delete(
        readonlyRoute.ORDERS_DELETE,
        OrderController.delete
    )
export default _orderRouter