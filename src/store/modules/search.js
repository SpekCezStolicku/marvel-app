import axiosService from "../../services/axiosService";

export const state = {
  searchResult: [],
  searchRandomResult: [],
  totalResults: 1535, // logic: allMarvelHeroes - displayLimit = totalResults
  offset: null,
};
export const mutations = {
  GET_RANDOM_RESULT(state, res) {
    state.searchRandomResult = res.data.data.results;
  },
  GET_HEROES_RESULT(state, res) {
    state.searchResult = res.data.data.results;
  },
};
export const actions = {
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
