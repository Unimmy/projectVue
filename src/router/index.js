import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/index'},
    {path: '/index',component:Index},

  ]
})
