<script setup>
import {useNotifier} from "../composition/useNotifier.js";

const {isShow} = useNotifier()

defineProps({
  message: {
    type: String
  }
})
</script>

<template>
  <transition
      appear
      name="slide"
  >
    <div class="notifier" v-if="isShow">
      <div class="wrapper">
        <div class="message">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.notifier {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 150px;
  margin: auto;
  z-index: 2;
  color: #ffffff;
  padding: 15px;
  display: flex;


}

.wrapper {
  margin: auto;
  background: green;
  padding: 5px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(45, 73, 45, 0.96);

}

.message {
  font-weight: 500;
  font-size: 18px;
}
</style>