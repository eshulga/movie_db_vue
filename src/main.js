import 'babel-core/register'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { MdDrawer, MdToolbar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import App from './components/App/App.vue'
import router from './router'
import config from './config'

Vue.config.productionTip = false

Vue.use(MdDrawer)
Vue.use(MdToolbar)

Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
  data: {
    config: config
  }
  // components: { App },
  // template: '<App/>'
})
