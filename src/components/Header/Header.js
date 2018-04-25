import Sidebar from '../Sidebar/sidebar.vue'

const Header = {
  name: 'app-header',
  components: {
    sidebar: Sidebar
  },
  data () {
    return {
      toggleActive: false,
      search: ''
    }
  },
  methods: {
    onScroll () {
      console.log(this.$el.offsetHeigh)
    },
    toggleSidebar () {
      this.toggleActive = !this.toggleActive
      this.$emit('toggleSidebar')
    },
    searchMovie () {
      if (this.search.length > 2) {
        this.$router.push({ path: '/', query: { search: this.search } })
      }
    }
  }
}

export default Header
