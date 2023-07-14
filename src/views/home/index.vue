<!--
    作者: 张占
    时间: 2023-07-13 14:59:17
    功能:  Begin
-->
<template>
  <div class="flex flex-row w-full h-full justify-between">
    <div class="grow bg-black w-1/6 opacity-40 ">
    </div>
    <div class="grow-0 w-5/8 ">
      <el-scrollbar height='height"+px"'>
        <div v-for="item in 100" :key="item" class="scrollbar-demo-item">{{ item }}</div>
      </el-scrollbar>
    </div>
    <div class="grow bg-light-50 w-1/6 opacity-30">B</div>
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
<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background-color: #fff;
  opacity: 70%;
  color: var(--el-color-primary);
}
</style>
