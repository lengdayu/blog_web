import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 定义全局变量
        additionalData: `@import "@/assets/css/common.less";`
      }
    }
  }
  // server: {
  //   host: '127.0.0.1', //打开显示本地地址
  //   open: true, // 是否自动启动浏览器
  //   port: 8000, //端口号
  //   proxy: {
  //     // 本地开发环境通过代理实现跨域
  //     // 正则表达式写法
  //     '/api': {
  //       target: 'http://127.0.0.1:8000', // 后端服务实际地址
  //       changeOrigin: true, //开启代理
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
