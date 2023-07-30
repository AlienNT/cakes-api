<script setup>
import RouteRequestField from "./RouteRequestField.vue";

defineProps({
  requestFields: {
    type: Object
  }
})
</script>

<template>
  <div class="title">
    Request
  </div>
  <ul class="request-fields">
    }
    <li
        v-for="(field, key) in requestFields"
        :key="key"
    >
      <RouteRequestField
          :field-data="field"
      />
    </li>
    {
  </ul>
</template>

<style scoped lang="scss">
.request-fields {
  border-radius: 5px;
  padding: 15px;
  color: #6969b9;
  font-family: monospace, sans-serif;

  .dark & {
    background: #242424;
  }

  .light & {
    background: #ffffff;
  }
}


</style>