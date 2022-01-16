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
  let spyOnClickCheckbox;

  beforeEach(() => {
    getters = {
      getProducts: () => dummyArray,
      getFavorites: () => dummyArray[1],
      getFavoritesIds: () => [dummyArray[1].id],
      getLoading: () => false,
    };
    spyOnClickCheckbox = jest.spyOn(Home.methods, "onClickCheckbox");
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
    wrapper = shallowMount(Home, {
      store,
      localVue,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crash", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders a list of ProductCards", () => {
    expect(wrapper.findAllComponents(ProductCard)).toHaveLength(
      dummyArray.length
    );
  });

  it("calls addFavorites mutation", async () => {
    wrapper.findComponent(ProductCard).vm.$emit("click-checkbox", true);

    await wrapper.vm.$nextTick();

    expect(spyOnClickCheckbox).toHaveBeenCalledWith({
      checked: true,
      product: { id: 1 },
    });
    expect(mutations.addFavorites).toHaveBeenCalledWith({}, { id: 1 });
  });

  it("calls removeFavorites mutation", async () => {
    wrapper.findComponent(ProductCard).vm.$emit("click-checkbox", false);

    await wrapper.vm.$nextTick();

    expect(spyOnClickCheckbox).toHaveBeenCalledWith({
      checked: false,
      product: { id: 1 },
    });
    expect(mutations.removeFavorites).toHaveBeenCalledWith({}, 1);
  });
});
