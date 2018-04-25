const Movie = {
  name: 'movie',
  data () {
    return {
      id: 0,
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
    this.id = this.$route.params.id
    this.getDetails()
    this.getTrailers()
    this.getCredits()
  },
  methods: {
    getDetails () {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=${
          this.key
        }&language=ru-RU`
      )
        .then((res) => res.json())
        .then((data) => this.saveDetails(data))
    },

    getCredits () {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${
          this.key
        }&language=ru-RU`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          for (let i = 0; i < 10; i++) {
            this.crew.push(data.crew[i])
            this.cast.push(data.cast[i])
          }
        })
    },

    getTrailers () {
      fetch(`https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=${
        this.key
      }&language=ru-RU`)
        .then((res) => res.json())
        .then((res) => {
          res.results.forEach(element => {
            if (element.type === 'Trailer') {
              this.trailers.push(element)
            }
          })
          console.log(res)
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
