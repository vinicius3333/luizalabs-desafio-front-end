import { shallowMount } from "@vue/test-utils";
import Spinner from "../Spinner";

describe("Spinner", () => {
  it("renders without crashing", () => {
    const wrapper = shallowMount(Spinner);
    expect(wrapper).toBeTruthy();
  });
});
