<template>
  <div class="about">
    <v-md-preview :text="articleContent" class="md_container"></v-md-preview>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { GetArticle } from '@/utils/api/index'

const route = useRoute()
const articleContent = ref('')

onBeforeMount(async () => {
  let res = await GetArticle(Number(route.params.id))
  if (res.data.code === '00000') {
    articleContent.value = res.data.data
  }
})
</script>

<style lang="less" scoped>
.about {
  background-color: @markdown-preview-background-color;
  display: flex;
  justify-content: center;
  .md_container {
    width: 60%;
    :deep(.v-md-pre-wrapper) {
      background-color: @markdown-preview-wrapper-color;
    }
  }
}
</style>
