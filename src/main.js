import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "./components/reusable/Loading.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("Loading", Loading)
  .mount("#app");
