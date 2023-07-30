export async function timeout(delay, fn) {
    return await new Promise(resolve => {
        setTimeout(() => {
            fn()
            resolve()
        }, delay)
    })
}

export function splitArray(array) {
    if (!array) return

    const first = []
    const second = []

    array.forEach(item => {
        if (first.length < array.length / 2) {
            first.push(item)
        } else {
            second.push(item)
        }
    })

    return [
        first,
        second
    ]
}

export function objectToArray(object, {
    keyFieldName = 'title',
    valueFieldName = 'value'
}) {
    return Object.keys(object).map(key => {
        return {
            [keyFieldName]: key,
            [valueFieldName]: object[key]
        }
    })
}