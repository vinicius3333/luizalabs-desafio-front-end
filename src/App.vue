<template>
  <div id="app">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;

  .wrapper {
    padding: 2rem;
    transition: all 200ms;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
}
</style>
