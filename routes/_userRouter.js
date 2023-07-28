import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import UserController from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const _userRouter = Router()
    .get(
        readonlyRoute.USERS,
        UserController.getAll
    )
    .get(
        readonlyRoute.USER,
        authMiddleware,
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
export default _userRouter