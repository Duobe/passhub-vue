import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [],
    group: null,
    entries: [],
    entry: null,
    fields: [],
    entryKeyword: '',
    isLogged: false
  },
  actions,
  mutations,
  getters
})
