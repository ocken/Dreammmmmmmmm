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
      <el-scrollbar height='900'>
        <div v-for="item in 100" :key="item" class="scrollbar-demo-item ">
          <my-card></my-card>
        </div>
      </el-scrollbar>
    </div>
    <div class="grow bg-light-50 w-1/6 opacity-30">
      {{ height }}
    </div>
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
  height: 400px;
  margin: 10px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 90%;
  color: var(--el-color-primary);
}
</style>
