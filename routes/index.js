import {Router} from "express";
import UserController from "../controllers/userController.js";
import CategoryController from "../controllers/categoryController.js";
import ProductController from "../controllers/productController.js";
import ReviewController from "../controllers/reviewController.js";
import WishlistController from "../controllers/wishlistController.js";
import {readonlyRoute, routes} from "./routesNames.js";
import OrderController from "../controllers/orderController.js";

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
    .get('/categories', CategoryController.get)
    .patch('/categories/:categoryName', CategoryController.update)
    .post('/categories', CategoryController.create)
    .delete('/categories/:categoryName', CategoryController.delete)
router
    /**
     * product
     */
    .get('/categories/:categoryName/products', ProductController.getByCategory)
    .get('/products', ProductController.getAll)
    .get('/products/:id', ProductController.getById)
    .post('/products', ProductController.create)
    .patch('/products/:id', ProductController.update)
    .delete('/products/:id', ProductController.delete)
router
    /**
     * review
     */
    .get('/reviews', ReviewController.getByProduct)
    .get('/reviews/:id', ReviewController.get)
    .post('/reviews', ReviewController.create)
    .patch('/reviews', ReviewController.update)
    .delete('/reviews', ReviewController.delete)
router
    /**
     * wish list
     */
    .get('/wishList/:userId', WishlistController.getByUserId)
    .get('/wishList/:id', WishlistController.getById)
    .post('/wishList', WishlistController.create)
    .patch('/wishList/:id', WishlistController.update)
    .delete('/wishList/:id', WishlistController.delete)
router
    /**
     * order
     */
    .get('/wishList/:userId', OrderController.getByUserId)
    .get('/wishList/:id', OrderController.getById)
    .post('/wishList', OrderController.create)
    .patch('/wishList/:id', OrderController.update)
    .delete('/wishList/:id', OrderController.delete)
export default router