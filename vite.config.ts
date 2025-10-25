import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0', //允许所有端口访问
    port:8080, //项目端口号
    hmr: true, //启用热加载
    open: true, //项目启动之后自动打开浏览器
  },
  //配置src目录别名为@
  resolve:{
    alias: [{
      find: '@',
      replacement: resolve(__dirname, 'src')
    }]
  }
})
