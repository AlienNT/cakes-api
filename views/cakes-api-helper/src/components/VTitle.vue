<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <h1 class="title">{{title}}</h1>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  padding: 5px 15px;
  margin-bottom: 10px;
  .dark & {
    color: #ffffff;
  }
}

</style>