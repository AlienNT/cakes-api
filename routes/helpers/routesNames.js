import ProductController from "../../controllers/productController.js";

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

