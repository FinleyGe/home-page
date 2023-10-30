<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Page } from '../types/page';
import Title from '@components/Title.vue';
import Sites from '@components/Sites.vue';
import type { Site } from '../types/site';
import MusicPlayer from '@components/MusicPlayer.vue';
const uptime = ref<string>('');
const timer = setInterval(updateTime, 1000);
const page = ref<Page>({
  size: 'large',
});

const sites = <Site[]>[
  {
    name: "Finley's Blog",
    url: "https://blog.f1nley.xyz/post"
  },
  {
    name: "QuickShare",
    url: "https://qs.f1nley.xyz"
  },
  {
    name: "Playground",
    url: "https://www.f1nley.xyz/playground"
  },
  {
    name: "About",
    url: "https://blog.f1nley.xyz"
  }
];

function handleResize() {
  if (window.innerWidth < 768) {
    page.value.size = 'small';
  } else {
    page.value.size = 'large';
  }
}

function updateTime() {
  const startTime = new Date('2022-05-26T00:00:00+08:00');
  const now = new Date();
  const diff = now.getTime() - startTime.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  uptime.value = `${days}天${hours}小时${minutes}分钟${seconds}秒`;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

function avatarClicked() {
  alert('啾咪!');
}

</script>

<template>
  <div class="back" :class="page.size">
    <main>
      <div class="card left">
        <div class="profile">
          <img @click="avatarClicked()" src="https://q2.qlogo.cn/headimg_dl?dst_uin=1227519153&spec=100&t=1678023672324"
            class="avatar" />
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
          <br />
          本站已运行
          <span>{{ uptime }}</span>
        </div>
      </div>
      <div class="card right">
        <Title head="站点导航" subtitle="Site Navigation" />
        <Sites :sites="sites" />
      </div>
    </main>
    <music-player />
    <footer>
      FinleyGe © 2022 - {{ new Date().getFullYear() }} |
      <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2022008114号-1</a>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import "@styles/variables.scss";

.back {
  &.large {
    display: grid;
    min-height: 90vh;
    grid-template-rows: 1fr 50px;
    margin-inline: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
    grid-gap: 10px;

    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }

    footer {
      text-align: center;
      font-size: 12px;
      background-color: $background-lightest;
      height: fit-content;
      color: $text-dark;
    }

    .card {
      padding: 30px;
      height: fit-content;

      @keyframes slidein-left {
        from {
          margin-left: -10%;
          margin-right: 10%;
        }

        to {
          margin-left: 0%;
          margin-right: 0%;
        }
      }

      @keyframes slidein-right {
        from {
          margin-left: 10%;
          margin-right: -10%;
        }

        to {
          margin-left: 0%;
          margin-right: 0%;
        }
      }

      &.left {
        background-color: $background-medium;
        border-radius: 10px;
        min-height: 500px;
        padding-left: 50px;

        animation-duration: 1s;
        animation-name: slidein-left;


        .profile {
          display: flex;
          padding-block: 12px;
          border-bottom: 1px solid #000;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: 20px;
            margin-right: 20px;

            &:hover {
              transform: rotate(360deg) scale(1.3);
              box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
              transition: ease-in-out 1s;
            }
          }

          .name {
            font-size: 2.5rem;
            display: flex;
            align-items: center;
            font-style: italic;
          }

        }

        .about {
          font-size: 1.2em;
          padding-top: 1em;
          padding-inline: 50px;
          white-space: nowrap;

          @keyframes slidein-about {

            from {
              margin-left: -10%;
              margin-right: 10%;
            }

            to {
              margin-left: 0%;
              margin-right: 0%;
            }

          }

          animation-name: slidein-about;
          animation-duration: 5s;
        }
      }

      &.right {
        animation-duration: 1s;
        animation-name: slidein-right;
        background-color: $background-dark;
        border-radius: 10px;
        min-height: 500px;

        font-size: 20px;
      }
    }
  }

  &.small {
    padding: 20px;
    margin: 10px;
    display: grid;
    min-height: 100vh;
    grid-template-rows: 1fr 50px;
    row-gap: 20px;

    footer {
      text-align: center;
      font-size: 15px;
      background-color: $background-lightest;
      height: fit-content;
      color: $text-dark;
      padding: 10px;
      margin: 10px;
    }

    .card {

      &.left {
        background-color: $background-medium;
        padding: 20px;
        border-radius: 10px;

        .profile {
          display: flex;
          padding-inline: 5px;
          padding-block: 10px;
          border-bottom: 1px solid $text-dark;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: 20px;
            margin-right: 20px;
          }

          .name {
            font-size: 2rem;
            font-style: italic;
            padding-top: 20px;
            padding-inline: 50px;
          }

        }

        .about {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
          font-size: 20px;
        }
      }

      &.right {
        margin-top: 20px;
        padding-inline: 20px;
        border-radius: 10px;
        background-color: $background-dark;
      }
    }
  }

  #player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }
}
</style>
