const Header = {
  name: 'app-header',
  data () {
    return {
      toggleActive: false,
      search: '',
      small: '',
      scroll: ''
    }
  },

  watch: {
    search: function () {
      this.searchMovie()
    }
  },

  methods: {
    handleScroll (event) {
      this.small = window.scrollY > this.scroll
      this.scroll = window.scrollY
    },

    toggleSidebar () {
      this.toggleActive = !this.toggleActive
      this.$eventBus.$emit('toggleSidebar')
    },

    searchMovie () {
      if (this.search.length > 2) {
        this.$router.push({ path: '/', query: { search: this.search } })
      }
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

export default Header
