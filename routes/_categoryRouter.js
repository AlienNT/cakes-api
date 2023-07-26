import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import CategoryController from "../controllers/categoryController.js";

const _categoryRouter = Router()
    .get(
        readonlyRoute.CATEGORIES,
        CategoryController.get
    )
    .patch(
        readonlyRoute.CATEGORY_UPDATE,
        CategoryController.update
    )
    .post(
        readonlyRoute.CATEGORY_CREATE,
        CategoryController.create
    )
    .delete(
        readonlyRoute.CATEGORY_DELETE,
        CategoryController.delete
    )
export default _categoryRouter