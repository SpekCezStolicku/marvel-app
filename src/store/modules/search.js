import axiosService from "../../services/axiosService";

export const state = {
  searchResult: [],
  searchRandomResult: [],
  totalResults: 1535, // logic: allMarvelHeroes - displayLimit = totalResults
  offset: null,
  loading: true,
  firstSearch: false,
};
export const mutations = {
  // 2 FUNCTIONS ALMOST SAME ...facepalm
  GET_RANDOM_RESULT(state, res) {
    state.searchRandomResult = res.data.data.results;
  },
  GET_HEROES_RESULT(state, res) {
    state.searchResult = res.data.data.results;
  },
  LOADING(state, bool) {
    state.loading = bool;
  },
  NO_RESULT(state, condition) {
    state.firstSearch = condition;
  },
  CLEAN_SEARCH_HISTORY(state) {
    state.searchResult = [];
  },
};
export const actions = {
  // GET RANDOM 24 HEROES OBJECTS FROM API AND SAVED TO THE STATE
  randomSearch({ state, commit }) {
    commit("LOADING", true);
    state.offset = Math.floor(Math.random() * state.totalResults) + 1; //Generates random numbers up to totalResult
    return axiosService
      .getRandomHero(state.offset)
      .then((response) => {
        commit("GET_RANDOM_RESULT", response);
        commit("LOADING", false);
      })
      .catch((error) => {
        commit("LOADING", false);
        console.log(error);
      });
  },
  // CALL API AND GET HEROES BY NAME
  heroesSearch({ commit }, heroName) {
    commit("LOADING", true);
    commit("CLEAN_SEARCH_HISTORY");
    commit("NO_RESULT", false);
    return axiosService
      .getHeroByName(heroName)
      .then((response) => {
        if (response.data.data.results.length > 0) {
          commit("GET_HEROES_RESULT", response);
          commit("LOADING", false);
        } else {
          commit("NO_RESULT", true);
          commit("LOADING", false);
        }
      })
      .catch((error) => {
        console.log(error);
        commit("LOADING", false);
      });
  },
};
