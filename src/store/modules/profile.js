export const state = {
  favoriteHeroes: [],
};

export const mutations = {
  ADD_FAVORITE(state, heroObj) {
    state.favoriteHeroes.push(heroObj);
  },
};
