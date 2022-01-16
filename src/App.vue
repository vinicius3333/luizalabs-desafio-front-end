<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 2rem;
  transition: all 200ms;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

body {
  margin: 0;
}
</style>
