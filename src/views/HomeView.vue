<template>
  <div class="container">
    <div class="header">
      <Header></Header>
    </div>
    <div class="body">
      <div class="print_meesage">
        <span class="text">{{ message }}</span>
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
  .header {
    position: fixed;
    width: 100%;
    background-color: #272727;
    z-index: 9999; /* 设置更高的层级 */
  }
  .body {
    position: relative;
    top: 10px + @header-height;
    left: 63px;
    height: 100vh;
    z-index: 1;
    .print_meesage {
      & > .text {
        color: @font-color;
        font-size: 30px;
        background: linear-gradient(to right, #ffffff 0%, #ffffff 50%, #f5f5f5 50%, #f5f5f5 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
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
