<script setup lang="ts">
import Name from "@components/Name.vue";
import ColorfulButton from "@components/ColorfulButton.vue";
import ColorfulTitle from "@components/ColorfulTitle.vue";
import { NSpace } from "naive-ui";
</script>
<template>
  <div class="bg-transparent">
    <Name />
    <p class="text-gray-500 italic mx-10 dark:text-gray-400">
      Just a normal student in ZJUT, who loves programming.
    </p>
    <p class="text-gray-500 italic mx-10 dark:text-gray-400">
      Keep learning, keep coding, keep thinking.
    </p>
    <div
      class="button-group mx-10"
    >
      <n-space vertical>
        <n-space>
          <colorful-button
            color="#e3b9f7"
            link="https://blog.f1nley.xyz"
          >
            blog
          </colorful-button>
          <colorful-button
            color="#1772F6"
            link="https://www.zhihu.com/people/ge-jun-75-34"
          >
            zhihu
          </colorful-button>

          <colorful-button
            color="#010409"
            link="https://github.com/FinleyGe"
          >
            github
          </colorful-button>
          <colorful-button
            color="#FF6699"
            link="https://space.bilibili.com/62847286"
          >
            bilibili
          </colorful-button>
          <colorful-button
            color="#FF9900"
            link="mailto://finleyge@qq.com"
          >
            email
          </colorful-button>
        </n-space>
        <n-space>
          <colorful-button
            link="https://qs.f1nley.xyz"
            color="#62176F"
          >
            QuickShare
          </colorful-button>
          <colorful-button
            router-link="/playground"
            color="#FF9900"
          >
            Playground
          </colorful-button>
        </n-space>
      </n-space>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
