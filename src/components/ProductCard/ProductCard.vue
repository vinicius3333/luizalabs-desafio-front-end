<template>
  <article class="card">
    <label
      :for="`favorite[${id}]`"
      class="card-container-checkbox"
      v-if="showCheckbox"
      aria-label="Checkbox em formato de coração"
    >
      <input
        :id="`favorite[${id}]`"
        name="favorite"
        type="checkbox"
        :checked="checked"
        @click="(e) => $emit('click-checkbox', e.target.checked)"
      />
      <heart-icon size="24" />
    </label>
    <button
      v-if="showCloseButton"
      class="card-button-close"
      @click="$emit('click-close')"
      aria-label="Botão de fechar"
    >
      <XCircleIcon size="30" />
    </button>
    <img
      :src="image.src"
      :alt="image.alt"
      width="300"
      height="300"
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
import { HeartIcon, XCircleIcon } from "vue-feather-icons";

export default {
  components: {
    HeartIcon,
    XCircleIcon,
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
    showCheckbox: {
      type: Boolean,
      default: true,
    },
    showCloseButton: {
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
