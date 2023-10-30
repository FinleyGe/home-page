<script setup lang="ts">
import {NSpace, NCard, NButton, NDivider, NConfigProvider} from "naive-ui";
import {useRouter} from "vue-router";

const router = useRouter();

interface Play {
  name: string;
  disabled: boolean;
  description: string;
}

const plays = <Play[]> [{
    name: 'GetZJUTClassTable',
    disabled: false,
    description: 'ZJUT 课表导出'
  }
]

function handleClick(name: string){
  router.push('/playground/' + name);
}
</script>
<template>
  <n-config-provider lang="zh-CN">
<div class="base">
  <header>
    <h1>Playground</h1>
  </header>
  <main>
    <n-space>
      <n-card v-for="play in plays">
        <h3>{{play.name}}</h3>
        <p>{{play.description}}</p>
        <n-button :disabled="play.disabled" @click="handleClick(play.name)">go</n-button>
      </n-card>
    </n-space>
    <n-divider/>
      <n-card>
        <router-view/>
      </n-card>
  </main>
  <footer></footer>
</div>
  </n-config-provider>
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
