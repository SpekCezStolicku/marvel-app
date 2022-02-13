export const getters = {
  getHeroById: (state) => (id) => {
    return state.searchResult.find((hero) => hero.id === id);
  },
};
