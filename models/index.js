import {model} from "mongoose";
import {userSchema} from "../schemas/userSchema.js";

export const Basket = model('Basket', userSchema)
export const Category = model('Category', userSchema)
export const Order = model('Order', userSchema)
export const Product = model('Product', userSchema)
export const Review = model('Review', userSchema)
export const Token = model('Token', userSchema)
export const User = model('User', userSchema)
export const WishList = model('WishList', userSchema)