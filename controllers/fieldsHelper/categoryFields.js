export function categoryFields(req) {
    const {_id, title, products, active, name} = req

    return {_id, title, products, active, name}
}