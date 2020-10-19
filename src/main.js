import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootsrapVue from 'bootstrap-vue'
import BootstrapVueIcons from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootsrapVue)
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
