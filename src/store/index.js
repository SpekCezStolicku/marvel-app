import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as search from "./modules/search";
import * as profile from "./modules/profile";

const persistState = createPersistedState();

export default createStore({
  state: {
    parameters: {
      ts: "12a",
      apikey: "67d5b80b6246066e65409141d355a52a",
      hash: "1676ffca6f2911e555cfb849a1f64c18",
      limit: 24,
    },
    loading: false,
  },
  mutations: {
    LOADING(state) {
      state.loading = !state.loading;
    },
  },
  modules: {
    search,
    profile,
  },
  plugins: [persistState],
});
