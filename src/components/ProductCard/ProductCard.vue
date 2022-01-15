<template>
  <article class="card">
    <div class="container-checkbox">
      <label for="favorite" class="checkbox-heart">
        <input
          id="favorite"
          name="favorite"
          type="checkbox"
          :checked="checked"
          @click="(e) => $emit('click-checkbox', e.target.checked)"
        />
        <heart-icon size="24" />
      </label>
    </div>
    <img
      :src="image.src"
      :alt="image.alt"
      width="300"
      height="300"
      loading="lazy"
      class="card-img"
    />
    <div class="card-body">
      <h2 class="title">{{ title }}</h2>
      <p class="price">{{ formattedPrice }}</p>
    </div>
  </article>
</template>

<script>
import "./ProductCard.scss";
import { formatCurrency } from "../../utils/formatCurrency";
import { HeartIcon } from "vue-feather-icons";

export default {
  components: {
    HeartIcon,
  },
  props: {
    image: {
      type: Object,
      default: () => ({
        src: "https://via.placeholder.com/300x300",
        alt: "Image",
      }),
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Object,
      default: () => ({
        value: 0,
        currencyId: "BRL",
      }),
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    formattedPrice() {
      return formatCurrency({
        price: this.price.value,
        currencyId: this.price.currencyId,
      });
    },
  },
};
</script>
