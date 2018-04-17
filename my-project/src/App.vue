<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>

import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    AppHeader: Header
  }
}
</script>

<style lang="scss">

@import './scss/variables.scss';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: $color-grey-light;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color-primary;
}
</style>
