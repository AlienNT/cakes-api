<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  detailsContent: {
    type: [String, Object],
    default: null
  }
})
const emit = defineEmits(['onCopy'])
const showDetails = ref(false)

const content = computed(() => {
  if (typeof props.detailsContent === 'string') {
    return props.detailsContent
  }
  return props.detailsContent
})

function toggleDetails() {
  showDetails.value = !showDetails.value
}
</script>

<template>
  <div class="details">
    <button
        type="button"
        class="details-button"
        @click="toggleDetails"
    >
      {{ showDetails ? 'Hide' : 'Show' }} details
    </button>
    <div class="details-content"
         v-if="showDetails"
    >
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.details-button {
  padding: 5px 15px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
}

.details-content {
  color: #242424;

  .dark & {
    color: #ffffff;
  }
}

.content-title {
  margin-bottom: 5px;
}

.query-item {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 14px;
}

.key {
  font-weight: 700;
  min-width: 100px;
  color: $lightTitleColor;
  cursor: pointer;

  .dark & {
    color: #00ad00;
  }
}

.field {
  flex: 1 1 auto;
}
</style>