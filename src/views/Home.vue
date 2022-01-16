<template>
  <div class="home">
    <ProductCard
      v-for="product in getProducts.products"
      :key="product.id"
      :title="product.title"
      :price="{ value: product.price, currencyId: product.currencyId }"
      :image="{ src: product.image, alt: product.title }"
      :id="product.id"
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard/ProductCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
  beforeMount() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters("products", ["getProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  justify-items: center;

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
