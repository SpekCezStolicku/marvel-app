import axiosService from "../../services/axiosService";

export const state = {
  searchResult: [],
  searchRandomResult: [],
  recentSearching: [],
  totalResults: 1535,
  offset: null,
};
export const mutations = {
  GET_RANDOM_SEARCH_RESULT(state, res) {
    state.searchRandomResult = res.data.data.results;
  },
};
export const actions = {
  randomSearch({ state, commit }) {
    state.offset = Math.floor(Math.random() * state.totalResults) + 1;
    return axiosService
      .getRandomHero(state.offset)
      .then((response) => {
        commit("GET_RANDOM_SEARCH_RESULT", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
