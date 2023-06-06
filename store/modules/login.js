const login = {
  state: {
    areas: [],
  },
  mutations: {
    SET_AREAS(state, data) {
      state.areas = data;
    },
  },
  actions: {
    setAreas({
      commit
    }, data) {
      commit('SET_AREAS', data);
    },
  },
};

export default login;