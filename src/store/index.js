import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import products from "./modules/products";

Vue.use(Vuex);

const persist = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ favorites: state.products.favorites }),
});

export default new Vuex.Store({
  modules: {
    products,
  },
  plugins: [persist.plugin],
});
