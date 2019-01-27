import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './modules/Auth'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: true,
    entryKeyword: '',
    isInserted: false,
    groups: [],
    entries: [],
    fields: []
  },
  actions,
  mutations,
  getters,
  modules: {
    auth: Auth
  }
})
