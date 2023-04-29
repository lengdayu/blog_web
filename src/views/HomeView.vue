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
      <Recommend class="recommend"></Recommend>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import Recommend from '@/components/recommend.vue'

import { usePirntMessage } from '@/hooks/usePringMessage'
const message = usePirntMessage(
  '就让他带走你的那瞬间，成为我们的纪念，谁能发现我的世界，曾经有过你的脸。',
  0.15
)
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .header {
    width: 100%;
  }
  .body {
    min-height: calc(100vh - @header-height);
    margin-left: 64px;

    .recommend {
      margin-top: 10px;
    }
    .print_meesage {
      color: @font-color;
      font-size: 30px;
      & > .text {
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
