<template>
  <div class="recommend">
    <h1 class="recommend_title">
      <n-divider title-placement="left">置顶文章</n-divider>
      <n-card title="卡片" hoverable> 卡片内容 </n-card>
      <n-card title="卡片" hoverable size="large"> 卡片内容 </n-card>
      <n-card title="卡片" hoverable size="large"> 卡片内容 </n-card>
      <n-card title="卡片" hoverable size="large"> 卡片内容 </n-card>
      <n-card title="卡片" hoverable size="large"> 卡片内容 </n-card>
    </h1>
  </div>
</template>
<script lang="ts" setup>
import { NDivider, NCard } from 'naive-ui'
</script>
<style scoped lang="less">
.recommend {
  width: 900px;
  height: 900px;
  padding-left: 10px;
  padding-top: 10px;
  background-color: #fff;
  .recommend_title {
    :deep(.n-divider) {
      color: @font-color;
    }
  }
}
</style>
