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
      {{description}}
    </template>
  </RouteRequestFieldsWrapper>
</div>
</template>