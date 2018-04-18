<template>
  <div class="wrapper">
      <div class="movie-top">
          <div class="movie-poster">
              <img :src="`https://image.tmdb.org/t/p/w300/${this.poster}`" alt="">
          </div>
          <div class="movie-description">
              <h1>{{ this.title }}</h1>
              <h3 v-if="this.overview">Описание</h3>
              <p>{{ this.overview}}</p>
          </div>
      </div>
  </div>
</template>

<script src="./Movie.js">
</script>

<style lang="scss" scoped src="./Movie.scss"></style>
