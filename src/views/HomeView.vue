<template>
  <div class="container">
    <Header></Header>
    <div class="body">
      <div class="print_meesage">
        <span>{{ message }}</span>
        <span class="cursor">|</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import { usePirntMessage } from '@/hooks/usePringMessage'
const message = usePirntMessage(
  '就让他带走你的那瞬间，成为我们的纪念，谁能发现我的世界，曾经有过你的脸。',
  0.15
)
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  background-image: url('@/assets/banner/1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  .body {
    height: calc(100vh - @header-height);
    padding-left: 63px;
    padding-top: 10px;
    .print_meesage {
      color: @font-color;
      .cursor {
        padding-left: 4px;
        animation: blink 1s infinite;
      }
    }
  }
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
