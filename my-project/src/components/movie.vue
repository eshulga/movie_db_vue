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

<script>
export default {
  name: 'movie',
  data: function () {
    return {
      id: 0,
      key: this.$root.config.apiKey,
      movie: {},
      poster: '',
      title: '',
      overview: ''
    }
  },
  created: function () {
    this.id = this.$route.params.id
    this.getDetails()
  },
  methods: {
    getDetails: function () {
      fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.key}&language=ru-RU`).then(res => res.json()).then(data => this.saveDetails(data))
    },

    saveDetails: function (data) {
      this.movie = data
      this.poster = data.poster_path
      this.title = data.title
      this.overview = data.overview
    }
  }
}
</script>

<style lang="scss" scoped>

    @import '../scss/variables.scss';

    .wrapper {
        padding-top: 25px;
        position: relative;
        margin: 0 auto;
        max-width: $container-max-width;
    }

    .movie-top {
        display: flex;
        flex-wrap: nowrap;

        h1 {
            margin-bottom: 25px;
        }

        h3 {
            margin-bottom: 15px
        }

        .movie-description {
            padding: 5px 20px;
            text-align: left;
        }
    }

</style>
