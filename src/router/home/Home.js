import ShortCard from '../../components/ShortCard/shortCard.vue'
import MovieDB from '../../components/MovieDB/MovieDB.js'

const Home = {
  name: 'Home',

  components: { ShortCard },

  props: ['initSearch'],

  data () {
    return {
      key: this.$root.config.apiKey,
      itemsColection: [],
      search: this.initSearch
    }
  },

  mounted () {
    if (this.search && this.search !== '') {
      this.searchItems()
    } else {
      this.itemsColection = []
      this.getItems()
    }
  },

  watch: {
    '$route.query.search' () {
      this.search = this.initSearch
      if (this.search && this.search !== '') {
        this.searchItems()
      } else {
        this.itemsColection = []
        this.getItems()
      }
    }
  },

  methods: {
    searchItems: function () {
      this.itemsColection = []
      MovieDB.searchMoviesOnQuery(this.search)
        .then((data) => {
          this.addItemsToCollection(data)
        })
    },

    addItemsToCollection: function (data) {
      data.results.forEach((element) => {
        this.itemsColection.push(element)
      })
    },

    getItems: function () {
      MovieDB.getItems()
        .then((data) => {
          this.addItemsToCollection(data)
        })
    }
  }
}

export default Home
