import { shallowMount } from "@vue/test-utils";
import Conner from "../Conner";

describe("Conner", () => {
  it("renders without crash", () => {
    const wrapper = shallowMount(Conner);
    expect(wrapper).toBeTruthy();
  });
});
