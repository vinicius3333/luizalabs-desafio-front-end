<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-display: swap;

  .wrapper {
    max-width: calc(1440px - 4rem);
    margin: 0 auto;
    padding: 2rem;
    transition: all 200ms;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
}
</style>
