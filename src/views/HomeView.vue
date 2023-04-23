<template>
  <div class="container">
    <Portal></Portal>
    <div class="body"></div>
  </div>
</template>

<script setup lang="ts">
import Portal from '@/components/Portal.vue'
console.log('first')
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  background-image: url('@/assets/1.jpg');
  background-position-y: center right;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
  .body {
    min-height: 689px;
  }
}
</style>
