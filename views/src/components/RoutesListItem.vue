<script setup>
import {computed, ref} from "vue";
import {getRoute} from "../../../helper.js";
import VDetails from "./VDetails.vue";

const props = defineProps({
  route: {
    type: Object
  }
})
const emit = defineEmits(['onCopy'])
const getFullPath = getRoute()

const title =
    computed(() => props.route?.title)
const path =
    computed(() => props.route?.path)
const queries =
    computed(() => props.route?.queries)
const fields =
    computed(() => props.route?.fields)
const fullPath =
    computed(() => getFullPath(path.value))
const target = ref(null)


async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    emit("onCopy")
  } catch ($e) {
    console.log($e)
  }
}
</script>

<template>
  <div
      class="api-route"
  >
    <div
        class="route-title"
    >
      {{ title }}
    </div>
    <div
        class="route-path"
        ref="target"
        @click="copy(fullPath)"
    >
      {{ fullPath }}
    </div>
    <VDetails
        :details-content="{queries, fields}"
        @on-copy="copy"
    />
  </div>
</template>

<style scoped lang="scss">

.api-route {
  padding: 10px 15px;
  border-radius: 5px;
  width: 100%;
  background: #eaeaea;
  .dark & {
    background: #333333;
  }
}

.route-title {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 18px;

  &:first-letter {
    text-transform: uppercase;
  }

  .dark & {
    color: #ffffff;
  }
}

.route-path {
  font-size: 16px;
  border: 1px dashed gainsboro;
  border-radius: 5px;
  padding: 5px 15px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;

  .dark & {
    background: #858585;
    color: #ffffff;
  }
}


</style>