import {computed, h, reactive, render} from "vue";
import VNotifier from "../components/VNotifier.vue";
import {timeout} from "../helper.js";

let timer
const state = reactive({
    isShow: false,
})

export function useNotifier(component = VNotifier) {

    const isShow = computed(() => state.isShow)

    function setIsShow(status) {
        state.isShow = status
    }

    async function createNotifier(message, parent) {
        await timeout(0, ()=> {
            setIsShow(false)
            clearTimeout(timer)
        })
        await timeout(100, () => setIsShow(true))

        timer = setTimeout(() => {
            setIsShow(false)
        }, 1500)

        render(h(component, {message}), parent)
    }

    return {
        createNotifier,
        isShow
    }
}