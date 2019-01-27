import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Entry from '../views/Entry'
import Field from '../views/Field'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/groups/:groupId',
          name: 'entry',
          component: Entry,
          children: [
            {
              path: '/entries/:entryId',
              name: 'field',
              component: Field
            }
          ]
        }
      ]
      // components: {
      //   default: require('../views/Home').default,
      //   field: require('../components/Field').default,
      //   entry: require('../components/Entry').default
      // },
      // children: [
      //   { path: '/' },
      //   {
      //     path: '/group/:groupId',
      //     name: 'entry',
      //     component: Entry,
      //     children: [
      //       {
      //         path: '/group/:groupId/entry/:entryId',
      //         name: 'field',
      //         component: Field
      //       }
      //     ]
      //   }
      // ],
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
