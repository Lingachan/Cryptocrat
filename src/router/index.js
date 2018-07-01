import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/HomePage'
import Team from '@/components/Team'
import LoginPage from '@/components/LoginPage'
import Markets from '@/components/Markets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/markets',
      component: Markets
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})
