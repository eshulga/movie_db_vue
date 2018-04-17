<template>
  <div class="short-card-wrapper">
      <div class="short-card__img">
          <img src="https://image.tmdb.org/t/p/w185/" alt="">
      </div>
      <div class="short-card__description">
        {{id}} {{title}} {{overview}}
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
    .short-card-wrapper {
        width: 33%;
        text-align: left;
    }
</style>
