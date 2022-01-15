<template>
  <div class="home">
    <ProductCard title="Título" />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard/ProductCard";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
};
</script>
