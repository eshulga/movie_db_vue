<template>
  <div class="main">
      <div class="movies-wrapper">
        <short-card v-for="item in itemsColection"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :overview="item.overview"
                    :poster="item.poster_path">
        </short-card>
      </div>
  </div>
</template>

<script>

import ShortCard from './shortCard.vue'

export default {
  name: 'Home',

  components: {
    ShortCard: ShortCard
  },

  data () {
    return {
      key: this.$root.config.apiKey,
      itemsColection: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted: function () {
    this.getItems()
  },

  methods: {

    addItemsToCollection: function (data) {
      data.results.forEach(element => {
        this.itemsColection.push(element)
      })
    },

    getItems: function () {
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.key + '&language=ru-RU&page=1').then(res => res.json()).then(data => { this.addItemsToCollection(data) })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .movies-wrapper {
    position: relative;
    margin: 0 auto;
    padding: 25px 0;
    max-width: 1170px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
