<template>
    <div class="full-screen">
        <el-container class="layout">
            <el-aside width="auto" class="asside">
                <menu-bar></menu-bar>
            </el-aside>
            <el-container>
                <el-header class="header">
                    <Header></Header>
                </el-header>
                <el-main class="main">
                    <Tabs style="padding: 0px 20px"></Tabs>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import Header from "@/layout/header/Header.vue";
import MenuBar from "@/layout/menu/MenuBar.vue";
import Tabs from '@/layout/tabs/Tabs.vue';
</script>
<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #009688;
}
.full-screen {
    height: 100vh;
    /* 视口高度 */
    width: 100vw;
    /* 视口宽度 */
}

.layout {
    height: 100%;

    .asside {
        // background-color: blueviolet;
        background-color: #304156;
    }

    .header {
        background-color: #009688;
    }
}
</style>