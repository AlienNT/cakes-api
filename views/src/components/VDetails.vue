<script setup>
import {computed, ref, useSlots} from "vue";
import {getClasses, tryFunc} from "../../../helper.js";


const props = defineProps({
  detailsContent: {
    type: [String, Object],
    default: null
  },
  closButtonTitle: {
    type: String,
    default: 'Show details'
  },
  openButtonTitle: {
    type: String,
    default: 'Hide details'
  },
  isButtonTypeSlot: {
    type: Boolean,
    default: false
  },
  fullWidthButton: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()

const showDetails = ref(false)

const buttonTitle = computed(() => {
  return showDetails.value ?
      props.openButtonTitle :
      props.closButtonTitle
})

const isSlotContent = computed(() => {
  return !!getSlotContent(slots?.content)
})

const isSlotButtonTitle = computed(() => {
  return !!getSlotContent(slots?.buttonTitle)
})

const classes = computed(() => {
  return getClasses([
    props.fullWidthButton ? 'full-width-button' : null
  ])
})

function getSlotContent(slot) {
  return tryFunc(() => slot()[0]?.children)
}

function toggleDetails() {
  if (isSlotContent.value) {
    showDetails.value = !showDetails.value
  }
}

</script>

<template>
  <div class="details">
    <button
        type="button"
        class="details-button"
        :class="classes"
        @click="toggleDetails"
    >
      <span
          class="button-title-wrapper"
          v-if="isSlotButtonTitle"
      >
        <span
            class="arrow"
            :class="!isSlotContent ? 'hide-arrow' : ''"
        >
          {{ showDetails ? '▼' : '►' }}
        </span>
        <slot
            name="buttonTitle"
        />
      </span>
      <span
          v-else
          class="button-title"
      >
      {{ buttonTitle }}
      </span>
    </button>
    <div class="details-content"
         v-if="showDetails && isSlotContent"
    >
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.details-button {
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  align-self: flex-start;

  .light & {
    background: #5680a4;
  }

  &.full-width-button {
    width: 100%;
    background: transparent;
    padding: 0;
  }
}


.details-content {
  color: #242424;
  display: flex;
  flex-direction: column;
  gap: 10px;

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

.button-title-wrapper {
  display: flex;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.hide-arrow {
  opacity: .1;
}
</style>