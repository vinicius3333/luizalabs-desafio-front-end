import { shallowMount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard/ProductCard";
import { formatCurrency } from "../../src/utils/formatCurrency";

describe("ProductCard", () => {
  it("renders the component without crash", () => {
    const wrapper = shallowMount(ProductCard);
    expect(wrapper).toBeTruthy();
  });

  it("renders the card, his image, title and favorite checkbox", () => {
    const wrapper = shallowMount(ProductCard);

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
    const dummyImageAttributes = {
      src: "dummyimage.com",
      alt: "dummy alt",
      width: "300",
      height: "300",
      loading: "lazy",
    };

    const wrapper = shallowMount(ProductCard, {
      propsData: {
        image: {
          src: dummyImageAttributes.src,
          alt: dummyImageAttributes.alt,
        },
      },
    });

    const image = wrapper.find("img");

    const keyAttributes = Object.keys(dummyImageAttributes);

    keyAttributes.forEach((key) => {
      expect(image.attributes(key)).toBe(dummyImageAttributes[key]);
    });
  });

  it("renders a title", () => {
    const dummyTitle = "dummy title";

    const wrapper = shallowMount(ProductCard, {
      propsData: {
        title: dummyTitle,
      },
    });

    const title = wrapper.find("h2");

    expect(title.text()).toBe(dummyTitle);
  });

  it("renders a price", () => {
    const currencyId = "BRL";
    const dummyPrice = 245.7;

    const wrapper = shallowMount(ProductCard, {
      propsData: {
        price: {
          value: dummyPrice,
          currencyId,
        },
      },
    });

    const price = wrapper.find("p");

    expect(price.text()).toBe(
      formatCurrency({ price: dummyPrice, currencyId })
    );
  });

  it("renders a checkbox checked", () => {
    const wrapper = shallowMount(ProductCard, { propsData: { checked: true } });

    const checkbox = wrapper.find("input[type='checkbox']");

    expect(checkbox.element.checked).toBeTruthy();
  });

  it("should emit a click event when checkbox is clicked", async () => {
    const wrapper = shallowMount(ProductCard);

    const checkbox = wrapper.find("input[type='checkbox']");

    expect(checkbox.element.checked).toBe(false);

    await checkbox.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()["click-checkbox"]).toBeTruthy();
    expect(wrapper.emitted()["click-checkbox"][0]).toStrictEqual([true]);
  });
});
