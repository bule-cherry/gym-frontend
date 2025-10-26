<template>
    <div class="full-screen">
        <el-container class="layout" >
            <el-aside class="asside">Aside</el-aside>
            <el-container >
                <el-header class="header">Header</el-header>
                <el-main class="main">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
</script>

<style>
.full-screen {
    height: 100vh;
    width: 100vw;
}
.layout {
    height: 100%;
    .asside {
        background-color: blueviolet;
    }
    .header {
        background-color: chocolate;
    }
    .main {
        background-color: darkcyan;
    }
}


</style>