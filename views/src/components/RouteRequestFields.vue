<script setup>
import {onMounted} from "vue";

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
  <div class="request-fields">
    }
    <div
        class="field"
        v-for="(value, key) in requestFields"
        :key="key"
    >
      <div class="field-key">
        "{{ key }}":
      </div>
      <div class="field-value">
        "{{ value }}",
      </div>
    </div>
    {
  </div>
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
.field {
  display: flex;
  gap: 5px;
}
.field-key {
  margin-left: 15px;
  color: #02b902;
  font-family: monospace, sans-serif;
}

.field-value {
  color: #e1ae01;
  font-family: monospace, sans-serif;
}
</style>