export function productFields (product) {
    const {_id, title, category, description, compound, weight, quantity, manufacturer, more, price, rating, discount} = product

    return {_id, title, category, description, compound, weight, quantity, manufacturer, more, price, rating, discount}
}