<template>
  <div class="Portal">
    <div>
      <n-button>
        <template #icon>
          <n-icon :size="40" color="#0e7a0d">
            <logo-javascript />
          </n-icon>
        </template>
      </n-button>
    </div>
    <div>
      <n-button>TypeScript</n-button>
    </div>
    <div><n-button>React</n-button></div>
    <div><n-button>Node</n-button></div>
    <div><n-button>Vue</n-button></div>
    <div><n-button>Java</n-button></div>
    <div><n-button>Linux</n-button></div>
  </div>
</template>
<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { LogoJavascript } from '@vicons/ionicons5'
</script>
<style lang="less" scoped>
.Portal {
  width: 100%;
  height: 15rem;
  color: #fff;
}

@keyframes topbanner {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 110%;
  }
  100% {
    background-size: 100%;
  }
}
</style>
