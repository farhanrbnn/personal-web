import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/homePage'
import monitorProject from '@/pages/monitorProject'
import ecommerceProject from '@/pages/ecommerceProject'
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
      path: '/covid19monitor',
      name:'monitorProject',
      component: monitorProject

    },
    {
      path: '/ecommerce',
      name:'ecommerceProject',
      component: ecommerceProject

    },
    {
      path:'*',
      name:'notFound',
      component: notFound 
    }
  ]
})
