import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/HomePage'
import Contact from '@/components/Contact'
import Team from '@/components/Team'
import LoginPage from '@/components/LoginPage'

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
      path: '/contact',
      component: Contact
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})
