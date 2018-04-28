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

  mounted () {
    this.$eventBus.$on('toggleSidebar', () => {
      this.active = !this.active
    })
  }
}

export default Sidebar
