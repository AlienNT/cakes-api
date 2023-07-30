export function authorizedUserFields(user) {
    const {_id, email, name, surname, phone, city, street, house, apartment} = user

    return {_id, email, name, surname, phone, city, street, house, apartment}
}
export function unauthorizedUserFields(user) {
    const {_id, name, surname} = user

    return {_id, name, surname}
}