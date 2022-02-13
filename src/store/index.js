import { createStore } from "vuex";
import * as search from "./modules/search";
import * as profile from "./modules/profile";

export default createStore({
  state: {
    parameters: {
      ts: "12a",
      apikey: "67d5b80b6246066e65409141d355a52a",
      hash: "1676ffca6f2911e555cfb849a1f64c18",
      limit: 24,
    },
  },
  modules: {
    search,
    profile,
  },
});
