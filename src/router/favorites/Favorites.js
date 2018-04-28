import ShortCard from '../../components/ShortCard/shortCard.vue'
import MovieDB from '../../components/MovieDB/MovieDB.js'

const Favorites = {
  name: 'Favorites',

  components: { ShortCard },

  data () {
    return {
      key: this.$root.config.apiKey,
      itemsColection: [],
      storedIds: []
    }
  },

  created () {
    this.getMoviesIdFromStorage()
    console.log('mounted', this)
  },

  watch: {
    storedIds: function () {
      this.storedIds.forEach(id => {
        MovieDB.getMovieInfo(id)
          .then((data) => this.saveItems(data))
      })
    }
  },

  methods: {
    saveItems (data) {
      this.itemsColection.push(data)
    },
    getMoviesIdFromStorage () {
      var ids = localStorage.getItem('favorites')
      if (ids) {
        ids = JSON.parse(ids)
      }
      if (ids !== null && ids.length > 0) {
        this.storedIds = ids
      }
    }
  }
}

export default Favorites
