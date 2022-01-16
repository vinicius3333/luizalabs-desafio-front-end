import { shallowMount } from "@vue/test-utils";
import Wishlist from "../Wishlist";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Wishlist);
  });

  it("renders without crash", () => {
    expect(wrapper).toBeTruthy();
  });
});
