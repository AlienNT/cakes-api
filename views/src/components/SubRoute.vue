<script setup>
import {computed} from "vue";
import {getRoute, isEmpty} from "../../../helper.js";
import VDetails from "./VDetails.vue";
import RouteRequestFields from "./RouteRequestFields.vue";
import RouteMethod from "./RouteMethod.vue";

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
    computed(() => getRoute({
      route: props.subRoute?.path
    }))

const requestFields =
    computed(() => props.subRoute?.request || null)

const isWork =
    computed(() => props.subRoute?.isWork)


const isShowContent =
    computed(() => [
      !isEmpty(requestFields.value)
    ].every(item => item === true))

const isEmptyRequestFields =
    computed(() => isEmpty(requestFields.value))

</script>

<template>
  <VDetails
      is-button-type-slot
      full-width-button
  >
    <template v-slot:buttonTitle>
      <div
          class="sub-routes-item"
      >
        <RouteMethod
            :is-active="isWork"
            :method="method"
        />
        <button
            class="path route-path"
            :disabled="!isWork"
            @click.stop="emit('onCopy', path)"
        >
          {{ path }}
        </button>
      </div>
    </template>
    <template
        v-if="isShowContent"
        v-slot:content
    >
      <div v-if="!isEmptyRequestFields">
        <RouteRequestFields
            :request-fields="requestFields"
        />
      </div>
    </template>
  </VDetails>
</template>

<style scoped lang="scss">
.sub-routes-item {
  font-size: 12px;
  display: flex;
  overflow: hidden;
  flex: auto;
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

  .light & {
    background: $pathBGColorLight;
    color: $pathColorLight;
  }

  .dark & {
    background: $pathBGColorDark;
    color: $pathColorLight;
  }

  &:not([disabled]) {
    .light & {
      &:hover {
        background: lighten($pathBGColorLight, 10%);
        color: lighten($pathColorLight, 10%);
      }
    }

    .dark & {
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

.request-fields {
  background: #242424;
  border-radius: 5px;
  padding: 15px;
  color: #6969b9;
  font-family: monospace, sans-serif;
}

.field-name {
  margin-left: 15px;
  color: #55ab55;
  font-family: monospace, sans-serif;
}

.field-value {
  color: #deb15c;
  font-family: monospace, sans-serif;
}
</style>