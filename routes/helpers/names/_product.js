export const PRODUCT = [
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
]