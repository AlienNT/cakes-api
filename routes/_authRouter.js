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
    .get(
        readonlyRoute.LOGOUT,
        AuthController.logout
    )
    .get(
        readonlyRoute.LOGOUT_ALL_DEVICES,
        AuthController.logoutOnAllDevices
    )
export default _authRouter