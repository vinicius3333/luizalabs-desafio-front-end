import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ProductCard from "@/components/ProductCard/ProductCard";
import Wishlist from "../Wishlist";

const dummyArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Home", () => {
  let wrapper;
  let store;
  let getters;
  let mutations;

  beforeEach(() => {
    getters = {
      getFavorites: () => dummyArray,
    };
    mutations = {
      removeFavorites: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          getters,
          mutations,
        },
      },
    });
    wrapper = shallowMount(Wishlist, {
      store,
      localVue,
      stubs: ["router-link"],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crash", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders a list of favorite products", () => {
    expect(wrapper.findAllComponents(ProductCard)).toHaveLength(
      dummyArray.length
    );
  });
});
