<script setup lang="ts">
defineProps<{
  color: string
}>();

</script>
<template>
  <div class="base">
    <span class="content text-black dark:text-gray-100">
      <slot />
    </span>
    <span class="bar" />
  </div>
</template>

<style scoped lang="scss">
.base {
  position: relative;
  width: fit-content;
  .content {
    font-size: 16px;
    z-index: 2;
    background-color: transparent;
    position: relative;

    &:hover {
      & ~ .bar {
        height: 16px;
        transition: height 0.2s ease-in-out;
      }
    }
  }

  .bar {
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 8px;
    color: v-bind("color");
    z-index: 1;
  }
}

</style>
