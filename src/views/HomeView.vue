<template>
  <div class="container">
    <Header></Header>
    <div class="body">
      <div class="print_meesage">
        <h2>{{ message }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import { splitMessage, usePirntMessage } from '@/hooks/usePringMessage'
import { ref } from 'vue'
const message = ref('')
const _message = splitMessage(
  '就让他带走你的那瞬间，成为我们的纪念，谁能发现我的世界，曾经有过你的脸。'
)
usePirntMessage(message, _message, 0, 0.3)
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  background-image: url('@/assets/banner/1.jpg');
  background-position-y: center right;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .body {
    min-height: 689px;
    .print_meesage {
      color: #fff;
    }
  }
}
</style>
