const MovieDB = {
  API_KEY: 'b4a2ddcffbf736c3e738a03f5fcc609c',

  getItems () {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=ru-RU&page=1`)
      .then((res) => res.json())
  },

  getMovieInfo (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=ru-RU`)
      .then((res) => res.json())
  },

  getMovieCredits (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.API_KEY}&language=ru-RU`)
      .then((res) => res.json())
  },

  getMovieTrailers (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}&language=ru-RU`)
      .then((res) => res.json())
  },

  searchMoviesOnQuery (searchQuery) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${this.API_KEY}&language=ru-RU&page=1&include_adult=false`
    ).then((res) => res.json())
  }
}

export default MovieDB
