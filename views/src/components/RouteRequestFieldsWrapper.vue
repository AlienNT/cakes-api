<script setup>

</script>

<template>
<div class="request-fields">
  <slot name="content"/>
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
</style>