<script setup>
import {computed} from "vue";

const props = defineProps({
  fieldData: {
    type: Object,
    default: null
  }
})

const name = computed(() => {
  return props.fieldData?.name
})

const type = computed(() => {
  return props.fieldData?.type
})

const isRequire = computed(() => {
  return !!props.fieldData?.required
})

</script>

<template>
  <div
      class="field"
      :class="isRequire && 'require'"
  >
    <div class="field-name">
      "{{ name }}":
    </div>
    <div class="field-value">
      "{{ type }}",
    </div>
    <div class="field-required" v-if="isRequire">
      //required
    </div>
  </div>
</template>

<style scoped lang="scss">
$textShadow: 1px 1px 1px rgba(59, 59, 59, 0.5);
.field {
  display: flex;
  gap: 5px;
  font-family: monospace, sans-serif;
}

.field-name {
  margin-left: 15px;
  color: #00b700;
}

.field-value {
  color: #ffc33c;
}
.require {
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    left: 5px;
    background: #ff6464;
    border-radius: 50%;
    color: #ff8989;
    display: flex;
    align-self: center;
    justify-content: center;
  }
}

.field-required {
  //color: #ff8989;
  color: gray;
  opacity: .8;
  font-weight: 300;
}
</style>