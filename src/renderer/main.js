import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')