import ProductController from "../controllers/productController.js";

export const routesNames = {
    REGISTRATION: {
        path: '/registration',
        title: 'registration'
    },
    LOGIN: {
        path: '/login',
        title: 'login'
    },
    CATEGORIES: {
        path: '/categories',
        title: 'categories'
    },
    PRODUCTS: {
        path: '/products',
        title: 'products',
        queries: {
            perPage: 'count',
            sortBy: 'field name',
            orderBy: 'ask\'desk',
            example: '/products?perPage=10&sortBy=price'
        }
    },
    PRODUCT: {
        path: '/products/:id',
        title: 'product'
    },
    PRODUCTS_BY_CATEGORY: {
        path: '/categories/:category',
        title: 'products by category',
        queries: {
            perPage: 'count',
            sortBy: 'field name',
            orderBy: 'ask\'desk',
            example: '/categories/:category?perPage=10&sortBy=price'
        },
        fields: {
            title: 'required, string',
            description: 'string',
            compound: 'string',
            weight: 'number',
            quantity: 'number, required',
            manufacturer: 'string',
            more: 'string',
            price: 'number, required',
            rating: 'number, readonly, считается на основе отзывов',
            discount: 'number (percent)',
            categoryId: 'ObjectId',
        }
    },
}
export const routes = {
    LOGIN: [
        {
            method: 'POST',
            path: '/login'
        }
    ],
    LOGOUT: [
        {
            method: 'POST',
            path: '/logout'
        }
    ],
    REGISTRATION: [
        {
            method: 'POST',
            path: '/registration'
        }
    ],
    USER: [
        {
            method: 'GET',
            path: '/users'
        },
        {
            method: 'GET',
            path: '/users/:id'
        },
        {
            method: 'PATCH',
            path: '/users/:id'
        },
        {
            method: 'DELETE',
            path: '/users/:id'
        },
    ],
    CATEGORY: [
        {
            method: 'GET',
            path: '/categories'
        },
        {
            method: 'PATCH',
            path: '/categories/:categoryName'
        },
        {
            method: 'POST',
            path: '/categories'
        },
        {
            method: 'DELETE',
            path: '/categories/:categoryName'
        },
    ],
    PRODUCT: [
        {
            method: 'GET',
            path: '/categories/:categoryName/products',
        },
        {
            method: 'GET',
            path: '/products',
        },
        {
            method: 'GET',
            path: '/products/:id',
        },
        {
            method: 'POST',
            path: '/products',
        },
        {
            method: 'PATCH',
            path: '/products/:id',
        },
        {
            method: 'DELETE',
            path: '/products/:id',
        }
    ],
    REVIEWS: [
        {
            method: 'GET',
            path: '/reviews'
        },
        {
            method: 'GET',
            path: '/reviews/:id'
        },
        {
            method: 'POST',
            path: '/reviews'
        },
        {
            method: 'PATCH',
            path: '/reviews'
        },
        {
            method: 'DELETE',
            path: '/reviews'
        },
    ],
    WISHLIST: [
        {
            method: 'GET',
            path: '/wishList/:userId'
        },
        {
            method: 'GET',
            path: '/wishList/:id'
        },
        {
            method: 'POST',
            path: '/wishList'
        },
        {
            method: 'PATCH',
            path: '/wishList/:id'
        },
    ],
    ORDER: [
        {

        },
        {

        }
    ],
    BASKET: [
        {

        },
    ]
}
export const readonlyRoute = {
    //
    LOGIN: routes.LOGIN[0].path,
    LOGOUT: routes.LOGOUT[0].path,
    REGISTRATION: routes.REGISTRATION[0].path,
    //
    USERS: routes.USER[0].path,
    USER: routes.USER[1].path,
    USER_UPDATE: routes.USER[2].path,
    USER_DELETE: routes.USER[3].path,
    //
    CATEGORIES: routes.CATEGORY

}