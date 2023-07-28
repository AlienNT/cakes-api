export const AUTH = [
    {
        method: 'POST',
        path: '/login',
        isWork: true,
        request: {
            email : "email",
            password: "password"
        }
    },
    {
        method: 'GET',
        path: '/logout',
        isWork: true,
    },
    {
        method: 'GET',
        path: '/logoutAll',
        isWork: true,
    },
    {
        method: 'POST',
        path: '/registration',
        isWork: true,
        request: {
            email : "email",
            password: "password"
        }
    }
]