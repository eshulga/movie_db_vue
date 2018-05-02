import 'babel-core/register'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import vuescroll from 'vue-scroll'

import App from './components/App/App.vue'
import router from './router'
import config from './config'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(vuescroll)

Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
  data: {
    config: config
  }
})
