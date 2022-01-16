import { shallowMount } from "@vue/test-utils";
import Header from "../Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
});
