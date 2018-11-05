import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/index'
import Cases from "../components/pages/Cases"
import Detail from '../components/pages/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/index'},
    {path: '/index',component:Index},
    {path:'/cases',component:Cases},
    {path:'/detail/:did',name:'detail',component:Detail},
    {path:'**',component:Index}
  ]
})
