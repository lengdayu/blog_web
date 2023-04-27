<template>
  <div class="top">
    <div class="button_group">
      <div class="button_item" v-for="(item, index) in iconPngArray" :key="index">
        <img :src="item.src" alt="" />
      </div>
    </div>
    <div class="time">{{ nowTime }}</div>
  </div>
</template>
<script setup lang="ts">
import { nowTime, refreshTime } from '@/hooks/useNowTime'
refreshTime(nowTime) //时钟刷新
type iconItem = {
  src: string
}
const iconPngArray: iconItem[] = [
  { src: new URL(`../assets/icon/JavaScript.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/typescript.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/Vue.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/react.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/Nodejs.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/Docker.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/java.png`, import.meta.url).href },
  { src: new URL(`../assets/icon/linux.png`, import.meta.url).href }
]
</script>
<style lang="less" scoped>
.top {
  width: 50%;
  height: @header-height;
  color: #fff;
  display: flex;
  flex: 1;
  .button_group {
    width: 550px;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    .button_item {
      margin: 20px auto;
      height: 44px;
      cursor: pointer;
      background-color: #3d3c3c;
      border-radius: 2px;
      img {
        width: 44px;
        height: 44px;
        transition: all 0.1s linear 0s;
      }
    }
    .button_item :hover {
      transform: scale(1.5);
    }
  }
  .time {
    margin: 20px 0px 20px 20px;
    text-align: center;
    line-height: 44px;
    font-size: 30px;
    color: @font-color;
  }
}
</style>
