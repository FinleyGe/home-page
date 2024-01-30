import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import "@styles/style.scss";
import "@styles/tailwind.css";
import "@styles/font.scss";

createApp(App).use(router).mount("#app");
