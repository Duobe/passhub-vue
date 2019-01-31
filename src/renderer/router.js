import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login'
import GroupView from './views/GroupView'
import FieldView from './views/FieldView'
import MainView from './views/MainView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'groups/:groupId',
          name: 'entry',
          component: GroupView,
          children: [
            {
              path: 'entries/:entryId',
              name: 'field',
              component: FieldView
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
