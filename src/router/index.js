import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/homePage'
// import project from '@/components/project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
