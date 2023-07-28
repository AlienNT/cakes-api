import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import BasketController from "../controllers/basketController.js";

const _basketRouter = Router()
    .get(
        readonlyRoute.BASKET_BY_USER_ID,
        BasketController.get
    )
    .post(
        readonlyRoute.BASKET_CREATE,
        BasketController.create
    )
    .patch(
        readonlyRoute.BASKET_UPDATE,
        BasketController.update
    )
    .delete(
        readonlyRoute.BASKET_DELETE,
        BasketController.delete
    )
export default _basketRouter