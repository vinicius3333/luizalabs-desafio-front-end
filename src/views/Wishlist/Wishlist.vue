<template>
  <div class="wishlist">
    <div class="wishlist-breadcrumb">
      <h2>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </h2>
      <span class="separator"> > </span>
      <h2>Lista de desejos</h2>
    </div>
  </div>
</template>

<script>
import "./Wishlist.scss";
export default {};
</script>
