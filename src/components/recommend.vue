<template>
  <div class="recommend">
    <h1 class="recommend_title">
      <n-divider title-placement="left">置顶文章</n-divider>
    </h1>
    <n-card
      class="n_card"
      hoverable
      :title="item.title"
      v-for="(item, index) in articles"
      :key="index"
      @click="getContent(item.id)"
    >
      <span>发布时间：{{ item.created_at }}</span>
      <span>最后更新时间：{{ item.updated_at }}</span>
      <br />
      {{ item.path }}
    </n-card>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NDivider, NCard } from 'naive-ui'
import { GetAllArticles } from '@/utils/api/index'

const router = useRouter()
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

let articles = ref<articleInfo[]>([])
const getContent = async (id: number) => {
  router.push({ name: 'article', params: { id } })
}
onBeforeMount(async () => {
  let res = await GetAllArticles({ pageCount: 1, pageSize: 20 })
  if (res.data.code === '00000') {
    let articleInfos = res.data.data
    articles.value = articleInfos
  }
})
</script>
<style scoped lang="less">
.recommend {
  width: 900px;
  padding: 10px 10px 20px 20px;
  background-color: @back-color;
  .recommend_title {
    :deep(.n-divider) {
      color: @font-color;
    }
    width: 90%;
  }
  .n_card {
    width: 85%;
    margin-top: 7px;
    cursor: pointer;
    background: @card-back-color;
  }
}
</style>
