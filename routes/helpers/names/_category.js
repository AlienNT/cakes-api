const requestFields = [
    {
        name: "title",
        type: 'string',
        required: true
    },
    {
        name: "active",
        type: 'boolean'
    },
    {
        name: "name",
        type: 'string',
        required: true
    }
]
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
        request: requestFields
    },
    {
        method: 'POST',
        path: '/categories',
        isWork: true,
        request: requestFields
    },
    {
        method: 'DELETE',
        path: '/categories/:id',
        isWork: true
    },
]