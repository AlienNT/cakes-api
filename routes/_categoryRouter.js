import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import CategoryController from "../controllers/categoryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const _categoryRouter = Router()
    .get(
        readonlyRoute.CATEGORIES,
        CategoryController.get
    )
    .patch(
        readonlyRoute.CATEGORY_UPDATE,
        authMiddleware,
        CategoryController.update
    )
    .post(
        readonlyRoute.CATEGORY_CREATE,
        authMiddleware,
        CategoryController.create
    )
    .delete(
        readonlyRoute.CATEGORY_DELETE,
        authMiddleware,
        CategoryController.delete
    )
export default _categoryRouter