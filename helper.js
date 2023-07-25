export const getRoute = (apiRoute = '/api') => (route) => {
    return apiRoute + route
}