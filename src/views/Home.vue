<template>
  <div class="home">
    <h2 class="home-title">Home</h2>
    <div class="home-loading" v-if="getLoading">
      <Spinner />
    </div>
    <div class="home-grid" v-else>
      <ProductCard
        v-for="product in getProducts"
        :key="product.id"
        :title="product.title"
        :price="{ value: product.price, currencyId: product.currencyId }"
        :image="{ src: product.image, alt: product.title }"
        :id="product.id"
        @click-checkbox="(checked) => onClickCheckbox({ checked, product })"
        :checked="getFavoritesIds.includes(product.id)"
      />
    </div>
  </div>
</template>

<script>
import "./Home.scss";
import { mapActions, mapGetters, mapMutations } from "vuex";
import ProductCard from "../components/ProductCard/ProductCard";
import Spinner from "../components/Spinner/Spinner";

export default {
  name: "Home",
  components: {
    ProductCard,
    Spinner,
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
    ...mapMutations("products", ["addFavorites", "removeFavorites"]),
    onClickCheckbox({ checked, product }) {
      if (checked) {
        return this.addFavorites(product);
      }
      this.removeFavorites(product.id);
    },
  },
  beforeMount() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters("products", [
      "getProducts",
      "getFavorites",
      "getFavoritesIds",
      "getLoading",
    ]),
  },
};
</script>
