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
          route: 'favorite'
        }
      ]
    }
  },

  mounted () {
    this.$parent.$on('toggleSidebar', () => {
      this.active = !this.active
    })
  }
}

export default Sidebar