import { shallowMount } from "@vue/test-utils";
import Header from "../Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, { stubs: ["router-link"] });
  });

  it("renders without crash", () => {
    expect(wrapper).toBeTruthy();
  });
});
