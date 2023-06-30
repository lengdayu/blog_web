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
import '@/assets/css/common.css'

const message = usePirntMessage('你要学会接受自己的平庸！', 0.1)
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  background-image: url('@/assets/banner/1.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #272727;
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
