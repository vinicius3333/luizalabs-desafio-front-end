import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import products from "../modules/products";

const persist = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ favorites: state.products.favorites }),
});

const localVue = createLocalVue();

describe("store", () => {
  let store;

  beforeEach(() => {
    localVue.use(Vuex);
    store = new Vuex.Store({
      modules: {
        products,
      },
      plugins: [persist.plugin],
    });
  });

  it("should persist favorites state", () => {
    const KEY = "favorites";
    const dummyValue = { id: 1 };

    store.commit("products/addFavorites", dummyValue);

    const localStorageObject = JSON.parse(localStorage.__STORE__.vuex);

    expect(localStorageObject[KEY]).toStrictEqual([dummyValue]);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "vuex",
      localStorage.__STORE__.vuex
    );
    expect(Object.keys(localStorageObject)).toContain(KEY);
  });
});
