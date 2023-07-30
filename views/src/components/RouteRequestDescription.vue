<script setup>
import RouteRequestFieldsWrapper from "./RouteRequestFieldsWrapper.vue";

defineProps({
  description: {
    type: String
  }
})
</script>

<template>
<div class="request-description">
  <div class="title">
    Description
  </div>
  <RouteRequestFieldsWrapper>
    <template v-slot:content>
      <div class="description">
        {{description}}
      </div>
    </template>
  </RouteRequestFieldsWrapper>
</div>
</template>

<style scoped lang="scss">
$routeDescriptionColor: #fad302;
.description {
  font-size: 14px;
  color: $routeDescriptionColor;
  .light &{
    color: #242424;
  }
}
</style>