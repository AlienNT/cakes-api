import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import WishlistController from "../controllers/wishlistController.js";

const _wishlistRouter = Router()
    .get(
        readonlyRoute.WISHLIST_BY_USER_ID,
        WishlistController.getByUserId
    )
    .get(
        readonlyRoute.WISHLIST_BY_ID,
        WishlistController.getById
    )
    .post(
        readonlyRoute.WISHLIST_CREATE,
        WishlistController.create
    )
    .patch(
        readonlyRoute.WISHLIST_UPDATE,
        WishlistController.update
    )
    .delete(
        readonlyRoute.WISHLIST_DELETE,
        WishlistController.delete
    )
export default _wishlistRouter