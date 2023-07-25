export function debounce(f, ms) {
    console.log('deb', f, ms)
    let isTimeout = false;

    return function () {
        if (isTimeout) return;

        f.apply(this, arguments);

        isTimeout = true;
        console.log('isTimeout', isTimeout)
        // f()
        setTimeout(() => isTimeout = false, ms);
    };

}
export async function timeout(delay, fn) {
    return await new Promise(resolve => {
        setTimeout(() => {
                fn()
                resolve()
            }, delay)
    })
}