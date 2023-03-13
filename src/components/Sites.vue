<script setup lang="ts">
// import { withDefaults } from "vue";
import { Site } from "../types/site";

// const props = withDefaults(
//   defineProps<{
//     sites: Site[];
//   }>(), {
//   sites: [<Site>{
//     name: "Baidu",
//     url: "https://www.baidu.com/",
//     description: "Baidu",
//     ok: true,
//   },]
// });
const props = defineProps<{
  sites: Site[];
}>();

function openSite(site: Site) {
  window.open(site.url);
}

</script>

<template>
  <div class="sites">
    <div class="site" v-for="site in props.sites" @click="openSite(site)">
      <div class="title">
        <div class="name">
          {{ site.name }}
        </div>
        <div class="link">
          {{ site.url }}
        </div>
      </div>
      <img src="@assets/right-arrow.svg" alt="arrow" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@styles/variables.scss";

.sites {
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .site {
    display: grid;
    grid-template-columns: 1fr 20px;
    padding: 10px;
    background-color: $background-medium;
    border-radius: 10px;
    height: 40px;
    text-align: left;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: $background-light;
    }

    .name {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    .link {
      font-size: 0.5rem;
      color: $text-medium;
    }

  }
}
</style>
