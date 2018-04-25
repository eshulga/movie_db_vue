<template>
  <div class="short-card-wrapper">
      <div class="short-card__img">
          <img :src="`https://image.tmdb.org/t/p/w185/${poster}`" alt="">
      </div>
      <div class="short-card__description">
        <h2>{{title}}</h2>
        <p>{{overview}}</p>
        <router-link :to="{ 'name': 'movie', 'params': { 'id': id } }">Подробнее</router-link>
      </div>
  </div>
</template>

<script src="./ShortCard.js"></script>

<style lang="scss" scoped src="./ShortCard.scss"></style>
