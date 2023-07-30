import {model} from "mongoose";
import {userSchema} from "../schemas/userSchema.js";
import {basketSchema} from "../schemas/basketSchema.js";
import {categorySchema} from "../schemas/categorySchema.js";
import {orderSchema} from "../schemas/orderSchema.js";
import {productSchema} from "../schemas/productSchema.js";
import {reviewSchema} from "../schemas/reviewSchema.js";
import tokenSchema from "../schemas/tokenSchema.js";
import {wishlistSchema} from "../schemas/wishlistSchema.js";

export const Basket = model('Basket', basketSchema)
export const Category = model('Category', categorySchema)
export const Order = model('Order', orderSchema)
export const Product = model('Product', productSchema)
export const Review = model('Review', reviewSchema)
export const Token = model('Token', tokenSchema)
export const User = model('User', userSchema)
export const WishList = model('WishList', wishlistSchema)