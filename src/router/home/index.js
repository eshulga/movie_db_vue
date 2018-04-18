import Home from './home.vue'

const homeRoute = {
  path: '/',
  name: 'home',
  component: Home,
  props: (route) => ({ initSearch: route.query.search })
}

export default homeRoute
