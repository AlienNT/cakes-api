export const USER = [
    {
        method: 'GET',
        path: '/users',
        isWork: true
    },
    {
        method: 'GET',
        path: '/users/:id',
        isWork: true,
        description: 'требует токен авторизации (headers Authorization Bearer token)'
    },
    {
        method: 'PATCH',
        path: '/users/:id',
        isWork: false
    },
    {
        method: 'DELETE',
        path: '/users/:id',
        isWork: false
    },
]