const Movie = {
  name: 'movie',
  data() {
    return {
      id: 0,
      key: this.$root.config.apiKey,
      movie: {},
      poster: '',
      title: '',
      overview: ''
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getDetails()
  },
  methods: {
    getDetails() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=${
          this.key
        }&language=ru-RU`
      )
        .then((res) => res.json())
        .then((data) => this.saveDetails(data))
    },

    saveDetails(data) {
      this.movie = data
      this.poster = data.poster_path
      this.title = data.title
      this.overview = data.overview
    }
  }
}

export default Movie
