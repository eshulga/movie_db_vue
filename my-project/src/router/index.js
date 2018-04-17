import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Movie from '@/components/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie
    }
  ]
})
