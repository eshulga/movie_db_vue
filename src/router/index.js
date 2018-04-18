import Vue from 'vue'
import Router from 'vue-router'

import movieRoute from './movie'
import homeRoute from './home'

Vue.use(Router)

const router = new Router({
  routes: [homeRoute, movieRoute]
})

export default router
