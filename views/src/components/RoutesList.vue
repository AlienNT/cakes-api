<script setup>
import RoutesListItem from "./RoutesListItem.vue";
import {useNotifier} from "../composition/useNotifier.js";

const {createNotifier} = useNotifier()

defineProps({
  routesList: {
    type: Object
  }
})

function onCopy() {
  createNotifier('Copied!', document.body)
}
</script>

<template>
  <ul class="api-routes-list row">
    <li
        v-for="(route, key) in routesList"
        :key="key"
        class="col"
    >
      <RoutesListItem
          :route="route"
          @on-copy="onCopy"
      />
    </li>
  </ul>
</template>

<style lang="scss">
.api-routes-list {
  text-align: left;
  display: flex;
  flex-wrap: wrap;

  li {
    padding-top: 15px;
    padding-bottom: 15px;
    flex: 1 1 50%;
    display: flex;
  }
}

</style>