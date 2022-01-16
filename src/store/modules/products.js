import axios from "axios";
import { recoverEnv } from "../../env";

export default {
  namespaced: true,
  state: {
    products: [],
    favorites: [],
    loading: false,
  },
  getters: {
    getFavorites: (state) => state.favorites,
    getFavoritesIds: (state) => state.favorites.map(({ id }) => id),
    getProducts: (state) => state.products,
    getLoading: (state) => state.loading,
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    addFavorites(state, value) {
      state.favorites.push(value);
    },
    removeFavorites(state, id) {
      state.favorites = state.favorites.filter(
        ({ id: idFavorite }) => idFavorite !== id
      );
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      commit("setLoading", true);
      return axios({ url: recoverEnv().VUE_APP_API, method: "GET" })
        .then((res) => {
          commit("setProducts", res.data.products);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
  },
};
