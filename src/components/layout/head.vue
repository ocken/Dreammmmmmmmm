<!--
    作者: 张占
    时间: 2023-07-13 15:17:40
    功能:
-->
<template>
  <div class="flex flex-row ">
    <el-avatar class="ml-10 shadow-2xl hover:animate-spin hover:duration-700" :size="78" :src="url" />
    <div class="m-2 ml-10 text-2xl">
      <router-link :to="{ path: '/' }"> Dreammmmmmmmmmmmm</router-link>
    </div>
  </div>
  <div class="absolute right-100 top-10">
    &lt; empty ... />
  </div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item class="pl-40" :to="{ path: '/home' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/begin' }">Begin</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/begin' }">photos</el-breadcrumb-item>
    <el-breadcrumb-item>story</el-breadcrumb-item>
    <el-breadcrumb-item>...</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts'>
import { url } from 'inspector';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "ver_menu",
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (index: string) => {
      console.log(index)
    }
    const url = ref("https://img2.baidu.com/it/u=1808513966,1447852385&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")


    return {
      activeIndex, handleSelect, url
    }
  }
})
</script>
