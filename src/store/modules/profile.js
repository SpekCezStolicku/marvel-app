export const state = {
  favoriteHeroes: [],
};

export const mutations = {
  ADD_FAVORITE(state, heroObj) {
    state.favoriteHeroes.push(heroObj);
  },
  REMOVE_DUPLICATE(state) {
    state.favoriteHeroes = [...new Set(state.favoriteHeroes)];
  },
};
