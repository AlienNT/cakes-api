import {NEED_TOKEN_MESSAGE} from "../../../helpers/messages/requestMessages.js";
import productRequestFields from "../../../helpers/requestFields/productRequestFields.js";

export const PRODUCT = [
    {
        method: 'GET',
        path: '/categories/:categoryId/products',
        isWork: true
    },
    {
        method: 'GET',
        path: '/products',
        isWork: true
    },
    {
        method: 'GET',
        path: '/products/:id',
        isWork: true
    },
    {
        method: 'POST',
        path: '/products',
        isWork: true,
        request: productRequestFields,
        description: NEED_TOKEN_MESSAGE
    },
    {
        method: 'PATCH',
        path: '/products/:id',
        isWork: true,
        request: productRequestFields,
        description: NEED_TOKEN_MESSAGE
    },
    {
        method: 'DELETE',
        path: '/products/:id',
        isWork: true,
        description: NEED_TOKEN_MESSAGE
    }
]