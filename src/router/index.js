import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import project from '@/components/project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
   {
      path: '/projects',
      name: 'projects',
      component: project
    }
  ]
})
