import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Pinia构造函数
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 实例化 Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 启用持久化
//国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import objCoppy from './utils/objCoppy'
//信息确认框
import myconfirm from './utils/myconfirm'
import './permission'
import * as echarts from 'echarts'
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(router).use(ElementPlus, {
    locale: zhCn,
}).use(pinia)
app.mount('#app')
//挂载全局属性
app.config.globalProperties.$objCoppy = objCoppy;
app.config.globalProperties.$myconfirm = myconfirm;
//全局注册图标组件
for (const [key, component] of
    Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}