/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import components from './components'
import { VueFeatherIconsSsr as FeatherIcon } from 'vue-feather-icons-ssr'

import './styles'

Vue.config.productionTip = false
Vue.component('feather-icon', FeatherIcon)
Vue.use(components)

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isLogged) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
