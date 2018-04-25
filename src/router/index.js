import Vue from 'vue'
import Router from 'vue-router'

import movieRoute from './movie'
import homeRoute from './home'
import favoritesRoute from './favorites'

Vue.use(Router)

const router = new Router({
  routes: [homeRoute, movieRoute, favoritesRoute]
})

export default router
