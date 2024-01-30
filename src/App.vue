<script setup lang="ts">
import ThemeButton from "@components/ThemeButton.vue";
import { computed, onMounted, ref } from "vue";
import { NConfigProvider, NSpace, lightTheme, darkTheme, NButton } from "naive-ui";
import { Home } from "@vicons/tabler";
import { RouterView, useRouter } from "vue-router";

const isDark = ref<boolean>(false);
const theme = computed(() => {
  return isDark.value ? darkTheme : lightTheme;
});

function handleThemeFlush() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDark.value = true;
  } else {
    isDark.value = false;
  }
}

function handleThemeChange() {
  console.log("handleThemeChange");
  isDark.value = !isDark.value;
  if (isDark.value) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  handleThemeFlush();
}

onMounted(() => {
  handleThemeFlush();
  window.addEventListener("storage", handleThemeFlush);
});

const router = useRouter();

</script>
<template>
  <n-config-provider
    :class="{ 'dark': isDark }"
    :theme="theme"
  >
    <div
      :class="{ 'dark': isDark }"
      class="base bg-gray-50 dark:bg-gray-700 min-h-screen font-light"
    >
      <n-space
        class="mx-2 p-2"
        justify="end"
      >
        <ThemeButton
          :is-dark="isDark"
          :handle-theme-change="handleThemeChange"
        />
        <n-button
          type="primary"
          circle
          :on-click="() => router.push('/')"
        >
          <template #icon>
            <Home />
          </template>
        </n-button>
      </n-space>
      <main>
        <router-view />
      </main>
      <footer class="text-gray-500 dark:text-gray-400 bottom-0 w-full text-center">
        FinleyGe © 2022 - {{ new Date().getFullYear() }}
        <br>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          class="text-blue-500 dark:text-blue-400"
        >晋ICP备2022008114号-1</a>
      </footer>
    </div>
  </n-config-provider>
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 110px);
}
</style>
