import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Reading from '@/components/Reading'
import Perfil from '@/components/Perfil'
import Create from '@/components/Create'
import Write from '@/components/Write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/reading',
      name: 'Leitura',
      component: Reading
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/create',
      name: 'Perfil',
      component: Create
    },
        {
          path: '/create/write',
          name: 'Write',
          component: Write
        }
  ]
})
