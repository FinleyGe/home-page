<script setup lang="ts">
import { ref } from 'vue';

const isCollapsed = ref<boolean>(false);

</script>
<template>
  <div class="player" :class="isCollapsed ? 'collapsed' : ''">
    <div class="top">
      <button @click="isCollapsed = !isCollapsed">🎵</button>
    </div>
    <iframe style="border-radius:12px"
      src="https://open.spotify.com/embed/playlist/6mmxf0XIzhJNdU4C5BgFBj?utm_source=generator" width="100%" height="352"
      frameBorder="0" allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
      id="player"></iframe>
  </div>
</template>

<style scoped lang="scss">
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  .top {
    height: 20px;
    width: fit-content;
    button {
      border: none;
      background-color: transparent;
      font-size: 14px;
      cursor: pointer;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
  }

  transition: height 0.3s ease-in-out;

  &.collapsed {
    height: 20px;
    .top {
      height: 20px;
    }
    iframe {
      display: none;
    }

    transition: height 0.3s ease-in-out;
  }
}
</style>
