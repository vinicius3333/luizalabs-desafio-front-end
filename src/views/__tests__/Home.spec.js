import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "../Home";
import ProductCard from "@/components/ProductCard/ProductCard";

const dummyArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Home", () => {
  let wrapper;
  let store;
  let getters;
  let mutations;
  let actions;

  beforeEach(() => {
    getters = {
      getProducts: () => dummyArray,
      getFavorites: () => dummyArray[1],
      getFavoritesIds: () => [dummyArray[1].id],
      getLoading: () => false,
    };
    mutations = {
      setProducts: jest.fn(),
      addFavorites: jest.fn(),
      removeFavorites: jest.fn(),
    };
    actions = {
      fetchProducts: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          getters,
          actions,
          mutations,
        },
      },
    });
    wrapper = shallowMount(Home, { store, localVue });
  });

  it("renders without crash", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders a list of ProductCards", () => {
    expect(wrapper.findAllComponents(ProductCard)).toHaveLength(
      dummyArray.length
    );
  });
});
