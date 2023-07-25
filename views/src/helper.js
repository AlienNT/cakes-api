export async function timeout(delay, fn) {
    return await new Promise(resolve => {
        setTimeout(() => {
                fn()
                resolve()
            }, delay)
    })
}