<script setup>
import {computed} from "vue";
import VDetails from "./VDetails.vue";
import SubRoute from "./SubRoute.vue";

const props = defineProps({
  route: {
    type: Object
  },
  listTitle: {
    type: String
  }
})
const emit = defineEmits(['onCopy'])

const title =
    computed(() => props.route?.title)
const path =
    computed(() => props.route?.path)

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
  <ul class="api-route-list">
    <li
        class="api-route"
    >
      <div
          class="route-title"
      >
        {{ listTitle }}
      </div>
      <VDetails
          @on-copy="copy"
      >
        <template v-slot:content>
          <SubRoute
              v-for="(item, key) in route"
              :key="key"
              :sub-route="item"
              @on-copy="copy"
          />
        </template>
      </VDetails>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.api-route-list {
  width: 100%;
}

.api-route {
  min-width: 270px;
  padding: 10px 15px;
  border-radius: 5px;
  width: 100%;
  display: block;
  flex-direction: column;
  background: rgba(190, 209, 246, 0.63);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  .dark & {
    background: #333333;
  }
  > * {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
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




</style>