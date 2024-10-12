/** @format */

import { createApp } from "vue";

import App from "./App.vue";
import AboutUs from "./components/AboutUs.vue";
import PodCast from "./components/PodCast.vue";
import Home from "./components/Home.vue";
import CrumplePage from "./components/CrumplePage.vue";

const app = createApp(App);
app.component("about-us", AboutUs);
app.component("podcast", PodCast);
app.component("home", Home);
app.component("crumple-page", CrumplePage);
app.mount("#app");
