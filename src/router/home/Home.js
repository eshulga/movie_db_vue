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
      search: this.initSearch,
      curentPage: 1
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
    handleScroll (event) {
      this.search || this.infiniteLoadHome()
    },

    infiniteLoadHome () {
      let appHeight = this.$el.scrollHeight + this.$el.offsetTop
      let windowScroll = window.scrollY + window.innerHeight

      if (appHeight === windowScroll) {
        this.getItems()
      }
    },

    searchItems () {
      this.itemsColection = []
      MovieDB.searchMoviesOnQuery(this.search)
        .then((data) => {
          this.addItemsToCollection(data)
        })
    },

    addItemsToCollection: function (data) {
      console.log(data)
      data.results.forEach((element) => {
        this.itemsColection.push(element)
      })

      this.curentPage = data.page + 1
    },

    getItems: function () {
      MovieDB.getItems(this.curentPage)
        .then((data) => {
          this.addItemsToCollection(data)
        })
    }
  }
}

export default Home
