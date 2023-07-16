<!--
    作者: 张占
    时间: 2023-07-15 09:32:08
    功能:
-->
<template>
  <div class="flex flex-row ">
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-40 z-10">
      <p class="text-5xl translate-36">1989</p>
      <p class="text-7xl text-blue-700">04</p>
      <p class="text-18xl text-indigo-700">29
      </p>
    </div>
    <div class="pt-5 pl-3 pr-2  ml-5 relative z-20">
      <div class="h-65 rounded-xl  text-black  w-full   ">
        <p class="text-2xl underline underline-offset-2">title:</p>
        <div class="max-h-55">
          <p class="text-xl  whitespace-pre-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            store:这是一段故事，故事如果内容太多，可能会变得不太好看，这是一段故事，故事如果内容太多，可能会变得不太好看，这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的.这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的
          </p>
        </div>

      </div>

      <div class="absolute bottom-5 right-10">
        <el-divider />
        <el-image :src="imgUrl" fit="cover" class="max-w-27  ml-2 " v-for="item in 5" />
      </div>

    </div>

    <!-- <div class="w-50 pl-5 z-20 text-black">
      <div class="pt-5  text-2xl text-black ">
        title：名称
      </div>
    </div> -->

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "card",
  setup() {
    const imgUrl = "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    return {
      imgUrl
    }
  }
})
</script>

<style></style>
