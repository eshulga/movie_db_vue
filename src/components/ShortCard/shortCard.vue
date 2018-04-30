<template>
  <div class="short-card-wrapper">
      <div class="short-card__img">
          <!-- <img :src="`https://image.tmdb.org/t/p/w185/${poster}`" alt=""> -->
          <picture>
            <source :srcset="`https://image.tmdb.org/t/p/w700_and_h392_bestv2/${poster}`" media="(max-width: 480px)">
            <img :src="`https://image.tmdb.org/t/p/w185/${poster}`">
          </picture>
      </div>
      <div class="short-card__info">
        <h2 class="short-card__title">{{title}}</h2>
        <p class="short-card__description">{{overview}}</p>
        <div class="short-card__controls">
          <router-link class="short-card__link" :to="{ 'name': 'movie', 'params': { 'id': id } }">Подробнее</router-link>
        </div>
      </div>
  </div>
</template>

<script src="./ShortCard.js"></script>

<style lang="scss" scoped src="./ShortCard.scss"></style>
