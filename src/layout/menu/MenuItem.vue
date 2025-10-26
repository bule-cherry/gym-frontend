<!-- @/components/MenuItem.vue -->
<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- 有子菜单时：渲染 el-sub-menu -->
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <!-- 递归渲染子菜单 -->
      <menu-item :menuList="menu.children" />
    </el-sub-menu>

    <!-- 无子菜单时：渲染 el-menu-item -->
    <el-menu-item v-else :index="menu.path" style="color: #f4f4f5">
      <el-icon>
        <component :is="menu.meta.icon" />
      </el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
// 接收父组件传入的菜单列表
defineProps<{
  menuList: Array<any>;
}>();
</script>

<style scoped>
/* scoped 表示样式只作用于当前组件 */
</style>