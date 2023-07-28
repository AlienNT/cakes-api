<script setup>
import {computed} from "vue";
import {getRoute} from "../../../helper.js";

const props = defineProps({
  subRoute: {
    type: Object
  }
})
const emit = defineEmits([
  'onCopy'
])
const method =
    computed(() => props.subRoute?.method)
const path =
    computed(() => getRoute({route: props.subRoute?.path}))
const isWork =
    computed(() => props.subRoute?.isWork)
const methodStyleClass =
    computed(() => method.value ? `method_${method.value.toLowerCase()}` : null)
const disabledStyleClass =
    computed(() => !isWork?.value ? 'disabled' : null)

const classes =
    computed(() => [
      methodStyleClass.value,
      disabledStyleClass.value
    ].join(' '))
</script>

<template>
  <div
      class="sub-routes-item"
  >
  <span
      class="method"
      :class="classes"
  >
    {{ method }}
  </span>
    <button
        class="path route-path"
        :disabled="!isWork"
        @click="emit('onCopy', path)"
    >
      {{ path }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.sub-routes-item {
  font-size: 12px;
  display: flex;
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 5px;
}

$pathBGColorDark: #252525;
$pathBGColorLight: #fafafa;

$pathColorDark: #ffffff;
$pathColorLight: #46b646;

$darkBorderColor: #46b646;

.path {
  flex: 1 1;
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 15px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: .2s ease;
  word-break: break-all;
  text-align: left;

  &:not([disabled]) {
    .light & {
      background: $pathBGColorLight;
      color: $pathColorLight;

      &:hover {
        background: lighten($pathBGColorLight, 10%);
        color: lighten($pathColorLight, 10%);
      }
    }

    .dark & {
      background: $pathBGColorDark;
      color: $pathColorLight;

      &:hover {
        background: lighten($pathBGColorDark, 1%);
        color: lighten($pathColorLight, 15%);
      }
    }
  }
}

.method {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  padding: 5px;
  flex: none;
  border-radius: 5px;
  margin-right: 15px;
  font-size: 12px;
  text-shadow: 2px 2px 2px #242424;
  color: #ffffff;
}

.method_get {
  background: #35ad35;
}

.method_post {
  background: #6767d2;
}

.method_patch {
  background: #c9a668;
}

.method_delete {
  background: #d55252;
}
</style>