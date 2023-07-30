<script setup>
import RouteRequestField from "./RouteRequestField.vue";
import RouteRequestFieldsWrapper from "./RouteRequestFieldsWrapper.vue";

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
  <RouteRequestFieldsWrapper>
    <template v-slot:content>
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
  </RouteRequestFieldsWrapper>
</template>

<style scoped lang="scss">



</style>