export const USER = [
    {
        method: 'GET',
        path: '/users',
        isWork: true
    },
    {
        method: 'GET',
        path: '/users/:id',
        isWork: true
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