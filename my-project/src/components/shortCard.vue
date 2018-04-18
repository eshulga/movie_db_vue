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

<script>
export default {
  name: 'shortCard',
  props: ['id', 'title', 'overview', 'poster']
}
</script>

<style lang="scss" scoped>

    @import '../scss/variables.scss';

    .short-card {

        &-wrapper {
            margin-bottom: 25px;
            width: 47%;
            max-height: 278px;
            display: flex;
            text-align: left;
            background: #fff;
            -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
            -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
            box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
        }

        &__description {

            padding: 5px 20px;
            position: relative;

            h2 {
                padding-bottom: 20px;
            }

            p {
                text-align: justify;
                font-size: 14px;
                display: block;
                max-height: 135px;
                overflow: hidden;
            }

            a {
                padding: 5px;
                position: absolute;
                bottom: 20px;
                right: 20px;
                border: 1px solid $color-grey-light;
                background-color: $color-primary-light;
                cursor: pointer;
                text-decoration: none;
                color: $text-color-primary;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 700;
            }
        }
    }
</style>
