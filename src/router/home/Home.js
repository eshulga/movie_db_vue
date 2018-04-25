import ShortCard from '../../components/ShortCard/shortCard.vue'

const Home = {
  name: 'Home',

  components: {
    ShortCard: ShortCard
  },

  props: ['initSearch'],

  data () {
    return {
      key: this.$root.config.apiKey,
      itemsColection: [],
      search: this.initSearch,
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted () {
    console.log('mounted', this)
    if (this.search && this.search !== '') {
      this.searchItems()
    } else {
      this.clearItemsCollection()
      this.getItems()
    }
  },

  watch: {
    '$route.query.search' () {
      this.search = this.initSearch
      if (this.search && this.search !== '') {
        this.searchItems()
      } else {
        this.clearItemsCollection()
        this.getItems()
      }
    }
  },

  methods: {
    searchItems: function () {
      this.clearItemsCollection()
      fetch(
        'https://api.themoviedb.org/3/search/movie?query=' +
          this.search +
          '&api_key=' +
          this.key +
          '&language=ru-RU&page=1&include_adult=false'
      )
        .then((res) => res.json())
        .then((data) => {
          this.addItemsToCollection(data)
        })
    },

    clearItemsCollection: function () {
      this.itemsColection = []
    },

    addItemsToCollection: function (data) {
      data.results.forEach((element) => {
        this.itemsColection.push(element)
      })
    },

    getItems: function () {
      fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
          this.key +
          '&language=ru-RU&page=1'
      )
        .then((res) => res.json())
        .then((data) => {
          this.addItemsToCollection(data)
        })
    }
  }
}

export default Home
