<template>
  <div class="Title">
    <div class="head">
      {{ props.head }}
    </div>
    <div class="subtitle">
      {{ props.subtitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
const props = withDefaults(defineProps<{
  head: string;
  subtitle: string;
}>(), {
  head: "Head",
  subtitle: "Subtitle",
});
</script>

<style scoped lang="scss">
@import "@styles/variables.scss";

.Title {
  text-align: right;
  padding-bottom: 10px;
  border-bottom: 1px solid $text-medium;

  .head {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.5rem;
    color: $text-medium;
  }
}
</style>
