import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
//引入 element plus 环境
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')

//全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
 }
