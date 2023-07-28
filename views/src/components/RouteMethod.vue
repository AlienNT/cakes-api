<script setup>
import {computed} from "vue";
import {getClasses} from "../../../helper.js";

const props = defineProps({
  method: {
    type: String,
    default: 'GET'
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
const methodStyleClass =
    computed(() => props.method ?
        `method_${props.method.toLowerCase()}` :
        null)

const disabledStyleClass =
    computed(() => !props.isActive ?
        'disabled' :
        null)

const classes =
    computed(() => getClasses([
      methodStyleClass.value,
      disabledStyleClass.value
    ]))

</script>

<template>
<span
    class="method"
    :class="classes"
>
          {{ method }}
        </span>
</template>

<style scoped lang="scss">

</style>