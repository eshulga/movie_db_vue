<template>
  <div class="main">
      <app-header />
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

import Header from './header.vue'
import ShortCard from './shortCard.vue'

export default {
  name: 'HelloWorld',

  components: {
    AppHeader: Header,
    ShortCard: ShortCard
  },

  data () {
    return {
      key: 'b4a2ddcffbf736c3e738a03f5fcc609c',
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

      console.log(this.itemsColection)
    },

    getItems: function () {
      console.log('ok')
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.key + '&language=en-US&page=1').then(res => res.json()).then(data => { this.addItemsToCollection(data) })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .movies-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 1170px;
    position: relative;
    margin: 0 auto;
  }
</style>
