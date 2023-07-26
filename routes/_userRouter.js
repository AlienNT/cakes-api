import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import UserController from "../controllers/userController.js";

const _userRouter = Router()
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
export default _userRouter