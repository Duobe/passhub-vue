import Vue from 'vue'
import Router from 'vue-router'

import LoginView from './views/LoginView'
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
      component: LoginView
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
