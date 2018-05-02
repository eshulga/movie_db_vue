<template>
  <div class="main">
      <div class="movies-wrapper">
        <short-card
            v-for="item in itemsColection"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :overview="item.overview"
            :poster="item.poster_path"
        >
        </short-card>
      </div>
      <div class="page-loader">
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>
      </div>
  </div>
</template>

<script src="./Home.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Home.scss"></style>
