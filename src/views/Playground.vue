<script setup lang="ts">
import {NSpace, NCard, NButton, NDivider} from "naive-ui";
import {useRouter} from "vue-router";

const router = useRouter();

interface Play {
  name: string;
  disabled: boolean;
  description: string;
}

const plays = <Play[]> [{
  name: "GetZJUTClassTable",
  disabled: false,
  description: "ZJUT 课表导出"
}
];

function handleClick(name: string){
  router.push("/playground/" + name);
}

</script>
<template>
  <div class="base">
    <header>
      <h1
        class="text-black dark:text-gray-50 cursor-pointer w-max mx-auto"
        @click="router.push('/playground')"
      >
        Playground
      </h1>
    </header>
    <main>
      <n-space>
        <div
          v-for="play in plays"
          :key="play.name"
          class="container text-black dark:text-gray-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
        >
          <h3>
            {{ play.name }}
          </h3>
          <p>{{ play.description }}</p>
          <n-button
            type="primary"
            :disabled="play.disabled"
            @click="handleClick(play.name)"
          >
            go
          </n-button>
        </div>
      </n-space>
      <hr class="my-8">
      <div class="container mx-auto text-black dark:text-gray-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <router-view />
      </div>
    </main>
    <footer />
  </div>
</template>

<style scoped lang="scss">
.base{
  padding: 1rem;
  header{
    text-align: center;
    h1{
      font-size: 2rem;
    }
  }
}
</style>
