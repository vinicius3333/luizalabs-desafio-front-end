import products from "../products";

jest.mock("axios", () =>
  jest.fn(() => Promise.resolve({ data: { products: [{ id: 1 }] } }))
);

const dummyValue = [{ id: 1 }];
const dummyArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

let stateProducts;
let stateFavorites;
let stateLoading;

beforeEach(() => {
  stateProducts = {
    products: [],
  };

  stateFavorites = {
    favorites: [],
  };

  stateLoading = {
    loading: false,
  };
});

describe("store/products/getters", () => {
  it("should returns products state", () => {
    stateProducts.products = dummyArray;

    expect(products.getters.getProducts(stateProducts)).toBe(dummyArray);
  });

  it("should returns favorites state", () => {
    stateFavorites.favorites = dummyArray;

    expect(products.getters.getFavorites(stateFavorites)).toBe(dummyArray);
  });

  it("should returns the ids of favorites state", () => {
    stateFavorites.favorites = dummyArray;
    expect(products.getters.getFavoritesIds(stateFavorites)).toStrictEqual(
      dummyArray.map(({ id }) => id)
    );
  });

  it("should returns the loading state", () => {
    products.mutations.setLoading(stateLoading, true);

    expect(stateLoading.loading).toBe(true);
  });
});

describe("store/products/mutations", () => {
  it("should change products state", () => {
    products.mutations.setProducts(stateProducts, dummyArray);

    expect(stateProducts.products).toBe(dummyArray);
  });

  it("should add to favorites state", () => {
    products.mutations.addFavorites(stateFavorites, dummyValue);

    expect(stateFavorites.favorites).toContain(dummyValue);
  });

  it("should remove from favorites state", () => {
    products.mutations.addFavorites(stateFavorites, dummyArray);

    products.mutations.removeFavorites(stateFavorites, dummyArray[0].id);

    expect(stateFavorites.favorites).not.toContain(dummyArray[0].id);
  });

  it("should change loading state", () => {
    expect(stateLoading.loading).toBe(false);

    products.mutations.setLoading(stateLoading, true);

    expect(stateLoading.loading).toBe(true);
  });
});

describe("store/products/action", () => {
  it("should commits setProducts mutation", async () => {
    const commit = jest.fn();
    await products.actions.fetchProducts({ commit });
    expect(commit.mock.calls).toEqual([
      ["setLoading", true],
      ["setProducts", [{ id: 1 }]],
      ["setLoading", false],
    ]);
  });
});
