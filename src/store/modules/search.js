import axiosService from "../../services/axiosService";

export const state = {
  searchResult: [],
  searchRandomResult: [],
  totalResults: 1535, // logic: allMarvelHeroes - displayLimit = totalResults
  offset: null,
};
export const mutations = {
  // 2 FUNCTIONS ALMOST SAME ...facepalm
  GET_RANDOM_RESULT(state, res) {
    state.searchRandomResult = res.data.data.results;
  },
  GET_HEROES_RESULT(state, res) {
    state.searchResult = res.data.data.results;
  },
};
export const actions = {
  // GET RANDOM 24 HEROES OBJECTS FROM API AND SAVED TO THE STATE
  randomSearch({ state, commit }) {
    state.offset = Math.floor(Math.random() * state.totalResults) + 1; //Generates random numbers up to totalResult
    return axiosService
      .getRandomHero(state.offset)
      .then((response) => {
        commit("GET_RANDOM_RESULT", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // CALL API AND GET HEROES BY NAME
  heroesSearch({ commit }, heroName) {
    return axiosService
      .getHeroByName(heroName)
      .then((response) => {
        commit("GET_HEROES_RESULT", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
