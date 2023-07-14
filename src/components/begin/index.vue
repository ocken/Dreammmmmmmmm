<!--
    作者: 张占
    时间: 2023-07-13 15:12:22
    功能:
-->
<template>
  <div class="m-auto h-screen bgPng">
    <div name="top" class=" h-1/5  pt-5  pb-5 bg-gradient-to-r from-sky-500 to-indigo-500">
      <var-menu></var-menu>
    </div>
    <div name="body" class="h-3/5 bg-pink-50">
      <router-view></router-view>
    </div>
    <div name="footer" class="h-1/5  bg-gray-100">
      <var-footer></var-footer>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: "head",
  setup() {
    const activeIndex = ref('1')
    return activeIndex
  }
})
</script>
<style lang="scss">
.bgPng {
  background-image: url("@/assets/img/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

}
</style>
