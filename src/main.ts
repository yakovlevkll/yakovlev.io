import { createApp } from "vue";
import App from "./App.vue";
import "@/plugins/registerServiceWorker";
import router from "@/plugins/router";
import store from "@/plugins/store";

import "@/assets/styles/main.styl";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
