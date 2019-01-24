import Vue from 'vue'
import Router from 'vue-router'

import Entry from '../components/Entry'
import Field from '../components/Field'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: require('../views/Home').default,
        field: require('../components/Field').default,
        entry: require('../components/Entry').default
      },
      children: [
        { path: '/' },
        {
          path: '/group/:groupId/entry/:entryId/field',
          name: 'field',
          component: Field
        },
        {
          path: '/group/:groupId/entry',
          name: 'entry',
          component: Entry
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: require('../views/Login').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
