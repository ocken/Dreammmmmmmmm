<!--
    作者: 张占
    时间: 2023-07-13 14:59:17
    功能:  home layout
-->
<template>
  <div class="flex flex-row w-full h-full justify-between <md:hidden">
    <div class="grow bg-sky-400 w-1/6 opacity-40 ">
    </div>
    <div class="grow-0 w-5/6 ">
      <el-scrollbar height='900'>
        <div v-for="item in 100" :key="item" class="h-100 ">
          <Home></Home>
        </div>
      </el-scrollbar>

    </div>
    <div class="grow bg-light-50 w-1/6 opacity-30">
      {{ height }}
    </div>
  </div>
  <!-- 适配手机 -->
  <div class="md:hidden w-full h-full">
    <el-scrollbar height='900'>
      <div class="w-full mt-1" v-for="item in 100">
        <Index_mobile></Index_mobile>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "index",
  setup() {
    const { height } = useWindowSize()
    return {
      height
    }
  }
})
</script>
<style scoped></style>
