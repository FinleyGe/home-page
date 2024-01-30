<script setup lang="ts">
import { getClasstable } from "./api";
import { NInput, NButton, NSpace, NSelect, NDatePicker} from "naive-ui";
import { ref } from "vue";

const options = ref([
  {
    label: "上",
    value: "上",
    disabled: false
  },
  {
    label: "下",
    value: "下",
    disabled: false
  },
  {
    label: "短",
    value: "短",
    disabled: false
  }
]);

const term = ref<string>("下");
const id = ref<string>("");
const password = ref<string>("");
const year = ref<string>("2023");
const start = ref<string>("2024-02-26");

function handleClick(){
  getClasstable({
    username: id.value,
    password: password.value,
    year: year.value,
    term: term.value,
    start_date: start.value
  });
}
</script>
<template>
  <div class="base">
    <header>
      <h3> ZJUT 课表导出 </h3>
      为什么要有这个功能? <br>
      便于导入到其他日历软件，如 Google Calendar, Outlook 等。
      <br>
      说明：调用微精弘的后端接口，导出课表到ics文件提供下载。
      直接对接后端，服务器不保存任何数据。所有数据直接获取于正方教务系统。
      作者本人 @FinleyGe 和精弘网络不对数据准确性负责。
    </header>
    <main>
      <n-space vertical>
        <n-input
          v-model:value="id"
          placeholder="学号"
        />
        <n-input
          v-model:value="password"
          placeholder="密码(微精弘)"
          type="password"
        />
        <n-input
          v-model:value="year"
          placeholder="学年(例:2023)"
        />
        <n-select
          v-model:value="term"
          :options="options"
        />
        <n-date-picker
          v-model:formatted-value="start"
          placeholder="学期开始时间"
          type="date"
          value-format="yyyy-MM-dd"
        />
        <n-button @click="handleClick()">
          导出
        </n-button>
      </n-space>
    </main>
  </div>
</template>

<style scoped lang="scss">
</style>
