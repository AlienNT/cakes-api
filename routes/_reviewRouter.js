import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import ReviewController from "../controllers/reviewController.js";

const _reviewRouter = Router()
    .get(
        readonlyRoute.REVIEWS_BY_PRODUCT,
        ReviewController.getByProduct
    )
    .get(
        readonlyRoute.REVIEWS_BY_ID,
        ReviewController.get
    )
    .post(
        readonlyRoute.REVIEWS_CREATE,
        ReviewController.create
    )
    .patch(
        readonlyRoute.REVIEWS_UPDATE,
        ReviewController.update
    )
    .delete(
        readonlyRoute.REVIEWS_DELETE,
        ReviewController.delete
    )
export default _reviewRouter