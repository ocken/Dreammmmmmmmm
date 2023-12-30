<!--
    作者: 张占
    时间: 2023-07-13 15:12:22
    功能:
-->
<template>
  <div class="m-auto h-screen bgPng relative">
    <div name="top"
      class=" h-1/8  pt-5 w-full pb-5 bg-gradient-to-tr from-sky-500 via-indigo-200 to-light-50 absolute top-0 z-40 opacity-97">

      <Head></Head>
      routerName: {{ routerName }}
    </div>
    <div name="body" class="h-7/8 text-2xl text-black ">
      <router-view></router-view>
      <div>
        This is My Family
      </div>
    </div>
    <div name="footer" class="h-1/8 w-full bg-gray-100 absolute bottom-0 opacity-99">
      <foot></foot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import router from '../router';
export default defineComponent({
  name: "head",
  setup() {
    const activeIndex = ref('1')
    const routerName = computed(() => router.currentRoute.value.fullPath)
    return {
      activeIndex, routerName
    }
  }
})
</script>
<style lang="scss">
.bgPng {
  background-image: url("@/assets/img/bg01.png");
  background-repeat: repeat;
}
</style>
