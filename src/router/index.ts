import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from '@/components/HelloWorld.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/home',
        name:'Home',
        component:Layout // 这边注意一定是component而不是components
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router