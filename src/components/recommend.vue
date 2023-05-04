<template>
  <div class="recommend">
    <h1 class="recommend_title">
      <n-divider title-placement="left">置顶文章</n-divider>
      <n-card :title="item.title" hoverable v-for="(item, index) in articles" :key="index">
        {{ item.path }}
      </n-card>
    </h1>
  </div>
</template>
<script lang="ts" setup>
import { NDivider, NCard } from 'naive-ui'
import { onBeforeMount } from 'vue'
import { GetAllArticles } from '@/utils/api/index'
interface articleInfo {
  id: number
  created_at: string
  updated_at: string
  deleted_at?: string
  author: string
  file_name: string
  path: string
  title: string
  label?: string
}

let articles: articleInfo[] = []
onBeforeMount(async () => {
  let res = await GetAllArticles({ pageCount: 1, pageSize: 20 })
  if (res.data.code === '00000') {
    let articleInfos: articleInfo[] = res.data.data
    articles = articleInfos
    console.log(articles)
  }
})
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
