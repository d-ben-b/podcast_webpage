/** @format */

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import AboutUs from "./components/AboutUs.vue";
import PodCast from "./components/PodCast.vue";
import Home from "./components/Home.vue";
import CrumplePage from "./components/CrumplePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/about-us", component: AboutUs },
    { path: "/podcast", component: PodCast },
    { path: "/home", component: Home },
    { path: "/crumple-page", component: CrumplePage },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
