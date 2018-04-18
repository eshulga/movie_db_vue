import Sidebar from '../Sidebar/sidebar.vue'
import Dialog from '../Dialog/dialog.vue'

const Header = {
  name: 'app-header',
  components: {
    Sidebar,
    Dialog
  },
  data: function() {
    return {
      toggleActive: false,
      search: ''
    }
  },
  methods: {
    onScroll() {
      console.log(this.$el.offsetHeigh)
    },
    toggleSidebar() {
      this.toggleActive = !this.toggleActive
      this.$emit('toggleSidebar')
    },
    searchMovie() {
      this.$router.push({ path: '/', query: { search: this.search } })
    }
  }
}

export default Header
