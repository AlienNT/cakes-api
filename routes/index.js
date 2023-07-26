import {Router} from "express";
import _authRouter from "./_authRouter.js";
import _userRouter from "./_userRouter.js";
import _categoryRouter from "./_categoryRouter.js";
import _orderRouter from "./_orderRouter.js";
import _productRouter from "./_productRouter.js";
import _reviewRouter from "./_reviewRouter.js";
import _wishlistRouter from "./_wishlistRouter.js";

const router = Router()
    .use(_authRouter)
    .use(_userRouter)
    .use(_categoryRouter)
    .use(_orderRouter)
    .use(_productRouter)
    .use(_reviewRouter)
    .use(_wishlistRouter)
export default router