import {Router} from "express";
import UserController from "../controllers/userController.js";
import CategoryController from "../controllers/categoryController.js";
import ProductController from "../controllers/productController.js";
import ReviewController from "../controllers/reviewController.js";
import WishlistController from "../controllers/wishlistController.js";
import OrderController from "../controllers/orderController.js";
import BasketController from "../controllers/basketController.js";
import {readonlyRoute} from "./readonlyRoutes.js";

const router = Router()

router
    /**
     * user
     */
    .get(
        readonlyRoute.USERS,
        UserController.getAll
    )
    .get(
        readonlyRoute.USER,
        UserController.getById
    )
    .patch(
        readonlyRoute.USER_UPDATE,
        UserController.update
    )
    .delete(
        readonlyRoute.USER_DELETE,
        UserController.delete
    )
    .post(
        readonlyRoute.LOGIN,
        UserController.login
    )
    .post(
        readonlyRoute.REGISTRATION,
        UserController.registration
    )
    .post(
        readonlyRoute.LOGOUT,
        UserController.logout
    )
router
    /**
     * category
     */
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
router
    /**
     * product
     */
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
router
    /**
     * review
     */
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
router
    /**
     * wish list
     */
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
router
    /**
     * order
     */
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
router
    /**
     * basket
     */
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
export default router