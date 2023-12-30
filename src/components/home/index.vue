<!--
    作者: 张占
    时间: 2023-07-15 09:32:08
    功能:
-->
<template>
  <div class=" h-2000 p-2 pt-35 ">
    <div class="flex flex-row   rounded-md bg-[#f2e7e5] ">
      <div class="my-mix-color w-40 h-96 z-10 rounded-md ">
        <p class="text-5xl translate-36">1989</p>
        <p class="text-7xl text-blue-700">04</p>
        <p class="text-18xl text-indigo-800 ">29
        </p>
      </div>
      <div class="pt-5 pl-3 pr-2  ml-5 relative z-20  ">
        <div class="h-65 rounded-xl  text-black   w-full  ">
          <p class="text-2xl   p-2 pl-4">{{ title }}</p>
          <div class="max-h-50 truncate">
            <p class="text-xl  whitespace-pre-line ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              store:这是一段故事，故事如果内容太多，可能会变得不太好看，这是一段故事，故事如果内容太多，可能会变得不太好看，这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的.这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的这是一段故事，故事如果内容太多，可能会变得不太好看，所以我必须限制文字内容的
            </p>
          </div>
        </div>
        <div class="absolute right-2  bottom-5 size-6 ">
          <el-divider />
          <div class="flex flex-row justify-end">
            <el-image :src="imgUrl" fit="cover" class="max-w-27  pl-4 overflow-hidden" v-for="item in 5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "card",
  props: {
    title: {
      type: String,
      default: "title"
    }
  },
  setup() {
    const imgUrl = "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    return {
      imgUrl
    }
  }
})
</script>

<style>
.my-mix-color {
  /* background-image: linear-gradient(135deg, #FF9D6C 10%, #BB4E75 100%); */
  background-image: linear-gradient(135deg, #43CBFF 10%, #9708CC 100%);
}
</style>
<!-- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -->
