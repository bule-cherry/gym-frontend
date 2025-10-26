<template>
  <div> 这是一个helloworld组件 </div>
  <el-form-item>
    <el-button type="primary" native-type="submit" @click="addCount">按钮</el-button>
    <h3>{{ store.count }}</h3>
  </el-form-item>
</template>

<script setup lang="ts">
import { testStore } from '@/store/test';
const store = testStore()
const addCount = ()=>{
  store.count++
}

</script>

<style scoped>

</style>
