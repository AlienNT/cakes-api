<script setup>
import RoutesListItem from "./RoutesListItem.vue";
import {useNotifier} from "../composition/useNotifier.js";
import {computed} from "vue";
import {objectToArray, splitArray} from "../helper.js";

const props = defineProps({
  routesList: {
    type: Object
  }
})

const {createNotifier} = useNotifier()

const routesArray = computed(() => {
  return objectToArray(props.routesList, {
    valueFieldName: 'routes'
  })
})

const twiceList = computed(() => {
  return splitArray(routesArray.value.sort((a, b) => a.title - b.title))
})

function onCopy() {
  createNotifier('Copied!', document.body)
}
</script>
<template>
  <div class="row">
    <ul
        class="api-routes-list col"
        v-for="(list, k) in twiceList"
        :key="k"
    >
      <li
          v-for="(route, key) in list"
          :key="key"
          class="list-item"
      >
        <RoutesListItem
            :route="route?.routes"
            :list-title="route?.title"
            @on-copy="onCopy"
        />
      </li>
    </ul>
  </div>

</template>

<style lang="scss">
.api-routes-list {
  text-align: left;
  display: flex;
  flex: 1 1 50%;
  flex-wrap: wrap;
  align-content: flex-start;
}

.list-item {
  max-width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  flex: 100%;
  display: flex;
}

</style>