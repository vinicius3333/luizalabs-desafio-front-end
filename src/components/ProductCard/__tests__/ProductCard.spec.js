import { shallowMount } from "@vue/test-utils";
import ProductCard from "../ProductCard";
import { formatCurrency } from "@/utils/formatCurrency";

const dummyImageAttributes = {
  src: "dummyimage.com",
  alt: "dummy alt",
  width: "300",
  height: "300",
  loading: "lazy",
};
const dummyTitle = "dummy title";
const currencyId = "BRL";
const dummyPrice = 245.7;

describe("ProductCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductCard, {
      propsData: {
        image: {
          src: dummyImageAttributes.src,
          alt: dummyImageAttributes.alt,
        },
        title: dummyTitle,
        price: {
          value: dummyPrice,
          currencyId,
        },
        checked: true,
      },
    });
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crash", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders the card, his image, title and favorite checkbox", () => {
    const card = wrapper.find("article");
    const cardImage = wrapper.find("img");
    const cardTitle = wrapper.find("h2");
    const cardCheckboxFavorite = wrapper.find("input[type='checkbox']");

    expect(card.exists()).toBe(true);
    expect(cardImage.exists()).toBe(true);
    expect(cardTitle.exists()).toBe(true);
    expect(cardCheckboxFavorite.exists()).toBe(true);
  });

  it("renders image with attributes", () => {
    const image = wrapper.find("img");

    const keyAttributes = Object.keys(dummyImageAttributes);

    keyAttributes.forEach((key) => {
      expect(image.attributes(key)).toBe(dummyImageAttributes[key]);
    });
  });

  it("renders a title", () => {
    const title = wrapper.find("h2");

    expect(title.text()).toBe(dummyTitle);
  });

  it("renders a price", () => {
    const price = wrapper.find("p");

    expect(price.text()).toBe(
      formatCurrency({ price: dummyPrice, currencyId })
    );
  });

  it("renders a checkbox checked", () => {
    const checkbox = wrapper.find("input[type='checkbox']");

    expect(checkbox.element.checked).toBeTruthy();
  });

  it("should emit a click event when checkbox is clicked", async () => {
    await wrapper.setProps({ checked: false });

    const checkbox = wrapper.find("input[type='checkbox']");

    expect(checkbox.element.checked).toBe(false);

    await checkbox.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()["click-checkbox"]).toBeTruthy();
    expect(wrapper.emitted()["click-checkbox"][0]).toStrictEqual([true]);
  });

  it("not renders a checkbox when showCheckbox is false", async () => {
    const findCheckbox = (wrapper) => wrapper.find("input[type='checkbox']");

    expect(findCheckbox(wrapper).exists()).toBe(true);

    await wrapper.setProps({ showCheckbox: false });

    expect(findCheckbox(wrapper).exists()).toBe(false);
  });

  it("renders a close button", async () => {
    await wrapper.setProps({ showCloseButton: true });

    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("should emit a click event when the close button is clicked", async () => {
    await wrapper.setProps({ showCloseButton: true, showCheckbox: false });

    const closeButton = wrapper.find("button");

    await closeButton.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()["click-close"]).toBeTruthy();
  });

  it("handles default image prop", () => {
    expect(wrapper.vm.$options.props.image.default.call()).toStrictEqual({
      src: "",
      alt: "",
    });
  });

  it("handles default price prop", () => {
    expect(wrapper.vm.$options.props.price.default.call()).toStrictEqual({
      value: 0,
      currencyId: "BRL",
    });
  });
});
