<template>
  <article class="card">
    <label :for="`favorite[${id}]`" class="container-checkbox">
      <input
        :id="`favorite[${id}]`"
        name="favorite"
        type="checkbox"
        :checked="checked"
        @click="(e) => $emit('click-checkbox', e.target.checked)"
      />
      <heart-icon size="24" />
    </label>
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
        src: "",
        alt: "",
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
    id: {
      type: Number,
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
