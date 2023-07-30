const userFields = [
    {
        name: "name",
        type: "string",
    },
    {
        name: "surname",
        type: "string"
    },
    {
        name: "phone",
        type: "number"
    },
    {
        name: "city",
        type: "string"
    },
    {
        name: "street",
        type: "string"
    },
    {
        name: "house",
        type: "string"
    },
    {
        name: "apartment",
        type: "number"
    }
]
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
        isWork: true,
        request: userFields
    },
    {
        method: 'DELETE',
        path: '/users/:id',
        isWork: true
    },
]