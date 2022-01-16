import axios from "axios";
import { recoverEnv } from "../../env";

export default {
  namespaced: true,
  state: {
    products: [],
    favorites: [],
  },
  getters: {
    getFavorites: (state) => state.favorites,
    getProducts: (state) => state.products,
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
  },
  actions: {
    fetchProducts({ commit }) {
      return axios({ url: recoverEnv().VUE_APP_API, method: "GET" }).then(
        (res) => {
          commit("setProducts", res.data);
        }
      );
    },
  },
};
