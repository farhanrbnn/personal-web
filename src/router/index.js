import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/homePage'
import notFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path:'*',
      name:'notFound',
      component: notFound 
    }
  ]
})
