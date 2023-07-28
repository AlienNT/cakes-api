import {routes} from "./names/index.js";

export const readonlyRoute = {
    /**
     * auth
     */
    LOGIN: routes.AUTH[0].path,
    LOGOUT: routes.AUTH[1].path,
    REGISTRATION: routes.AUTH[2].path,
    /**
     * users
     */
    USERS: routes.USER[0].path,
    USER: routes.USER[1].path,
    USER_UPDATE: routes.USER[2].path,
    USER_DELETE: routes.USER[3].path,
    /**
     * categories
     */
    CATEGORIES: routes.CATEGORY[0].path,
    CATEGORY_UPDATE: routes.CATEGORY[1].path,
    CATEGORY_CREATE: routes.CATEGORY[2].path,
    CATEGORY_DELETE: routes.CATEGORY[3].path,
    /**
     * products
     */
    PRODUCTS_BY_CATEGORY: routes.PRODUCT[0].path,
    PRODUCTS_ALL: routes.PRODUCT[1].path,
    PRODUCTS_BY_ID: routes.PRODUCT[2].path,
    PRODUCTS_CREATE: routes.PRODUCT[3].path,
    PRODUCTS_UPDATE: routes.PRODUCT[4].path,
    PRODUCTS_DELETE: routes.PRODUCT[5].path,
    /**
     * reviews
     */
    REVIEWS_BY_PRODUCT: routes.REVIEW[0].path,
    REVIEWS_BY_ID: routes.REVIEW[1].path,
    REVIEWS_CREATE: routes.REVIEW[2].path,
    REVIEWS_UPDATE: routes.REVIEW[3].path,
    REVIEWS_DELETE: routes.REVIEW[4].path,
    /**
     * wishlist
     */
    WISHLIST_BY_USER_ID: routes.WISHLIST[0].path,
    WISHLIST_BY_ID: routes.WISHLIST[1].path,
    WISHLIST_CREATE: routes.WISHLIST[2].path,
    WISHLIST_UPDATE: routes.WISHLIST[3].path,
    WISHLIST_DELETE: routes.WISHLIST[4].path,
    /**
     * orders
     */
    ORDERS_BY_USER_ID: routes.ORDER[0].path,
    ORDERS_BY_ID: routes.ORDER[1].path,
    ORDERS_CREATE: routes.ORDER[2].path,
    ORDERS_UPDATE: routes.ORDER[3].path,
    ORDERS_DELETE: routes.ORDER[4].path,
    /**
     * basket
     */
    BASKET_BY_USER_ID: routes.BASKET[0].path,
    BASKET_CREATE: routes.BASKET[1].path,
    BASKET_UPDATE: routes.BASKET[2].path,
    BASKET_DELETE: routes.BASKET[3].path,
}