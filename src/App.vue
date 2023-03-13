<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Page } from './types/page';
import Title from '@components/Title.vue';
import Sites from '@components/Sites.vue';
import type { Site } from './types/site';

const page = ref<Page>({
  size: 'large',
});

const sites = <Site[]>[
  {
    name: "Finley's Blog",
    url: "https://blog.f1nley.xyz/"
  },
  {
    name: "QuickShare",
    url: "https://qs.f1nley.xyz/"
  }
];

function handleResize() {
  if (window.innerWidth < 768) {
    page.value.size = 'small';
  } else {
    page.value.size = 'large';
  }
}
onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

</script>

<template>
  <div class="back" :class="page.size">
    <div class="card left">
      <div class="profile">
        <img src="https://q2.qlogo.cn/headimg_dl?dst_uin=1227519153&spec=100&t=1678023672324" class="avatar" />
        <div class="name">
          Finley Ge
        </div>
      </div>
      <div class="about">
        欢迎来到我的小站。
        <br />
        Welcome to my tiny site.
        <br />
        随便看看。
        <br />
        Just take a look~
      </div>
    </div>
    <div class="card right">
      <Title head="站点导航" subtitle="Site Navigation" />
      <Sites :sites="sites" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@styles/variables.scss";

.back {
  &.large {
    display: grid;
    grid-template-columns: 60% 40%;
    margin-inline: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
    grid-gap: 10px;

    .card {
      padding: 30px;

      &.left {
        background-color: $background-medium;
        border-radius: 10px;
        min-height: 500px;
        padding-left: 50px;

        .profile {
          display: flex;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: 20px;
            margin-right: 20px;
          }

          .name {
            font-size: 2.5rem;
            padding-top: 20px;
            padding-inline: 50px;
          }
        }

        .about {
          font-size: 20px;
          padding-top: 20px;
          padding-inline: 50px;
        }
      }

      &.right {
        background-color: $background-dark;
        border-radius: 10px;
        min-height: 500px;

        font-size: 20px;
      }
    }
  }

  &.small {
    display: flex;
    flex-direction: column;

    .card {

      &.left {
        background-color: $background-medium;

        .profile {
          display: flex;
          padding-inline: 5px;
          padding-bottom: 10px;
          border-bottom: 1px solid $text-dark;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: 20px;
            margin-right: 20px;
          }

          .name {
            font-size: 2.5rem;
            padding-top: 20px;
            padding-inline: 50px;
          }

        }

        .about {
          margin: 20px;
          font-size: 20px;
        }
      }

      &.right {
        padding-inline: 20px;
        background-color: $background-dark;
      }
    }
  }
}
</style>
