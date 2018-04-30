const Sidebar = {
  name: 'sidebar',

  data () {
    return {
      active: false,
      items: [
        {
          title: 'Главная',
          route: 'home'
        },
        {
          title: 'Избранное',
          route: 'favorites'
        }
      ]
    }
  },

  methods: {
    toggleSidebar () {
      setTimeout(() => {
        this.active = !this.active
      }, 500)
    }
  },

  mounted () {
    this.$eventBus.$on('toggleSidebar', () => {
      this.active = !this.active
    })
  }
}

export default Sidebar
