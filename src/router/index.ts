import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@views/v2/Home.vue")
  },
  {
    path: "/playground",
    name: "Playground",
    component: () => import("@views/Playground.vue"),
    children: [
      {
        path: "GetZJUTClassTable",
        name: "GetZJUTClassTable",
        component: () => import("@/playground/GetZJUTClassTable.vue")
      }],
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
