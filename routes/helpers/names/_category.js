import categoryRequestFields from "../../../helpers/requestFields/categoryRequestFields.js";

export const CATEGORY = [
    {
        method: 'GET',
        path: '/categories',
        isWork: true
    },
    {
        method: 'PATCH',
        path: '/categories/:id',
        isWork: true,
        request: categoryRequestFields
    },
    {
        method: 'POST',
        path: '/categories',
        isWork: true,
        request: categoryRequestFields
    },
    {
        method: 'DELETE',
        path: '/categories/:id',
        isWork: true
    },
]