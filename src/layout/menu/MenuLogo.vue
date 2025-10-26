<template>
    <div class="logo">
        <img :src="MenuLogo" alt="logo" />
        <span  v-if="show" class="logo-title">{{ title }}</span>
    </div>
</template>
<script setup lang="ts">
import MenuLogo from '@/assets/MenuLogo.png'
import { ref, watch } from "vue";
const title = ref("车厘子健身房系统");
/**
 * 定义从父组件接收的 props
 * isCollapsed 表示侧边栏是否折叠
 */
const props = defineProps({
    isCollapsed: {
        require: true, // 父组件必须传这个参数
        type: Boolean, // 类型是布尔值
    },
});
const show = ref(true);
/**
 * 监听 props.isCollapsed 的变化
 * 当侧边栏折叠/展开时，动态修改 show 的值
 */
watch(
    () => props.isCollapsed, // 监听 isCollapsed 的值
    (collapsed: boolean) => {
        if (!collapsed) {
            // 如果展开（collapsed = false）
            // 延迟 300ms 后显示标题（避免动画卡顿）
            setTimeout(() => {
                show.value = !collapsed; // 展开后显示标题
            }, 300);
        } else {
            // 如果折叠（collapsed = true）
            // 立即隐藏标题
            show.value = !collapsed; // 折叠时不显示标题
        }
    }
);
</script>
<style lang="scss" scoped>
.logo {
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #2b2f3a;
    text-align: center;
    cursor: pointer;
    align-items: center;

    img {
        width: 36px;
        height: 36px;
        margin-right: 12px;
        margin-left: 20px;
    }

    .logo-title {
        color: #fff;
        font-weight: 800;
        line-height: 60px;
        font-size: 22px;
        font-family: FangSong;
    }
}
</style>