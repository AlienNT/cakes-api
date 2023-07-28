import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import ProductController from "../controllers/productController.js";

const _productRouter = Router()
    .get(
        readonlyRoute.PRODUCTS_BY_CATEGORY,
        ProductController.getByCategory
    )
    .get(
        readonlyRoute.PRODUCTS_ALL,
        ProductController.getAll
    )
    .get(
        readonlyRoute.PRODUCTS_BY_ID,
        ProductController.getById
    )
    .post(
        readonlyRoute.PRODUCTS_CREATE,
        ProductController.create
    )
    .patch(
        readonlyRoute.PRODUCTS_UPDATE,
        ProductController.update
    )
    .delete(
        readonlyRoute.PRODUCTS_DELETE,
        ProductController.delete
    )
export default _productRouter