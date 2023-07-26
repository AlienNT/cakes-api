import {Router} from "express";
import {readonlyRoute} from "./helpers/readonlyRoutes.js";
import AuthController from "../controllers/authController.js";

const _authRouter = Router()
    .post(
        readonlyRoute.LOGIN,
        AuthController.login
    )
    .post(
        readonlyRoute.REGISTRATION,
        AuthController.registration
    )
    .post(
        readonlyRoute.LOGOUT,
        AuthController.logout
    )
export default _authRouter