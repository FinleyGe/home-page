<script setup lang="ts">
import {NButton} from "naive-ui";
import {Sun, Moon} from "@vicons/tabler";

defineProps<{
  isDark: boolean;
  handleThemeChange: () => void;
}>();

</script>
<template>
  <n-button
    :on-click="handleThemeChange"
    circle
    type="primary"
  >
    <template #icon>
      <Sun v-if="isDark" />
      <Moon v-else />
    </template>
  </n-button>
</template>

<style scoped lang="scss">

</style>
