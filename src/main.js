// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App/App.vue'
import router from './router'
import config from './config'

Vue.config.productionTip = false

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
