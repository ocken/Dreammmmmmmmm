<!--
    作者: 张占
    时间: 2023-07-14 13:20:30
    功能:
-->
<template>
  <div class="m-auto h-screen my-bg">
    <div name="top" v-show="topShow" style="" class="h-1/6">
      <div class="bg-gradient-to-r from-sky-500 to-indigo-500 opacity-95 absolute top-0 w-screen p-5" :style="topCss">
        <var-menu></var-menu>
      </div>
    </div>

    <div name="body" class="h-4/6">
      <div class="absolute top-30 left-40">
        <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 h-10 w-20 m-5 rounded-lg" @click="closeTop"> Close
        </button>
        <button class="bg-blue-500 shadow-lg shadow-blue-500/50 h-10 w-20 m-5 rounded-lg" @click="openTop">Open </button>

      </div>
      <router-view>
      </router-view>
    </div>
    <div name="footer" v-show="footerShow"
      class="h-1/8  bg-gradient-to-r from-indigo-500 to-green-500 opacity-90 absolute bottom-0 w-screen p-2 "
      :style="footerCss">
      <var-footer>
      </var-footer>
      {{ topCss }}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import theme from './store/theme';
export default defineComponent({
  name: "App",
  setup() {

    const { topShow, footerShow } = storeToRefs(theme())

    const controlShow = () => {
      theme().controlTopShow()
      theme().controlFooterShow()
    }

    const topCss = ref([] as string[])
    const footerCss = ref([] as string[])
    const closeTop = () => {
      const TopSlow = [
        "animation: topSlow 1s 1;",
        "animation-fill-mode: forwards;",
      ]
      topCss.value = TopSlow

      const footerSlow = [
        "animation: footerSlow 1s 1;",
        "animation-fill-mode: forwards;",
      ]
      footerCss.value = footerSlow
      //footerShow.value = !footerShow.value
    }

    const openTop = () => {
      const slow = [
        "animation: unTopSlow 1s 1;",
        "animation-fill-mode: forwards;",
      ]
      topCss.value = slow

      const footerSlow = [
        "animation: unFooterSlow 1s 1;",
        "animation-fill-mode: forwards;",
      ]
      footerCss.value = footerSlow
    }

    return {
      topShow, footerShow, controlShow, topCss, closeTop, openTop, footerCss
    }
  }
})
</script>
<style lang="scss">
@import "@/assets/styles/slow.scss";

.my-bg {
  background-image: url("@/assets/img/bg01.png");
}
</style>
