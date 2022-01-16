<template>
  <div class="wishlist">
    <div class="wishlist-breadcrumb">
      <h2>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </h2>
      <span class="separator"> > </span>
      <h2>Lista de desejos</h2>
    </div>
    <transition name="fade" mode="out-in">
      <transition-group
        name="wishlist"
        tag="div"
        class="wishlist-grid"
        v-if="getFavorites.length !== 0"
        @before-leave="beforeLeave"
      >
        <ProductCard
          v-for="product in getFavorites"
          :key="product.id"
          :title="product.title"
          :price="{ value: product.price, currencyId: product.currencyId }"
          :image="{ src: product.image, alt: product.title }"
          :id="product.id"
          :showCheckbox="false"
          showCloseButton
          @click-close="removeFavorites(product.id)"
        />
      </transition-group>
      <div class="wishlist-empty" v-else>
        <h3>Você ainda não adicionou nenhum produto à lista de desejos.</h3>
      </div>
    </transition>
  </div>
</template>

<script>
import "./Wishlist.scss";
import { mapGetters, mapMutations } from "vuex";
import ProductCard from "@/components/ProductCard/ProductCard";

export default {
  components: {
    ProductCard,
  },
  methods: {
    ...mapMutations("products", ["removeFavorites"]),
    //fixes transition list absolute bug
    /* istanbul ignore next */
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } =
        window.getComputedStyle(el);
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    },
  },
  computed: {
    ...mapGetters("products", ["getFavorites"]),
  },
};
</script>
