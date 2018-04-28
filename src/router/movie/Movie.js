import MovieDB from '../../components/MovieDB/MovieDB.js'

const Movie = {
  name: 'movie',

  data () {
    return {
      id: parseInt(this.$route.params.id),
      isFavorite: this.checkFavorites(),
      key: this.$root.config.apiKey,
      movie: {},
      poster: '',
      title: '',
      overview: '',
      trailers: [],
      genres: [],
      cast: [],
      crew: []
    }
  },

  created () {
    this.getDetails()
    this.getTrailers()
    this.getCredits()
  },

  watch: {
    isFavorite: function (val, oldVal) {
      var favorites = localStorage.getItem('favorites')

      if (favorites === null) {
        favorites = []
      } else {
        favorites = JSON.parse(favorites)
      }

      if (val) {
        favorites.push(this.id)
      } else {
        if (favorites.includes(this.id)) {
          favorites.splice(favorites.indexOf(this.id), 1)
        }
      }

      favorites = JSON.stringify(favorites)
      localStorage.setItem('favorites', favorites)
    }
  },

  methods: {
    clickFavorites () {
      this.isFavorite = !this.isFavorite
    },

    checkFavorites () {
      var favorites = localStorage.getItem('favorites')

      if (favorites !== null) {
        favorites = JSON.parse(favorites)
        if (favorites.includes(parseInt(this.$route.params.id))) {
          return true
        }
        return false
      }
      return false
    },

    getDetails () {
      MovieDB.getMovieInfo(this.id)
        .then((data) => this.saveDetails(data))
    },

    getCredits () {
      MovieDB.getMovieCredits(this.id)
        .then((data) => {
          for (let i = 0; i < 10; i++) {
            this.crew.push(data.crew[i])
            this.cast.push(data.cast[i])
          }
        })
    },

    getTrailers () {
      MovieDB.getMovieTrailers(this.id)
        .then((res) => {
          res.results.forEach(element => {
            if (element.type === 'Trailer') {
              this.trailers.push(element)
            }
          })
        })
    },

    saveDetails (data) {
      // console.log(data)
      this.movie = data
      this.poster = data.poster_path
      this.title = data.title
      this.overview = data.overview
      this.genres = data.genres
    }
  }
}

export default Movie
