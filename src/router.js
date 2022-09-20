import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);
let router = new Router({
    // mode:'hash', //history
    routes: [
       {
          path: '/', component: () => import('@/views/layout.vue'),
          redirect: '/login',
          children: [
             //后台首页
            //  { path: '/index', name: 'index', component: () => import('@/views/index/index.vue'),
            //  meta:[{title:'首页',path:'/index'},{title:'后台首页',path:'/index'}]},   
            
 
          ]
 
       },
 
       { path: '/login', name: 'login', component: () => import('@/views/login/login.vue') }
    ]
 })
 export default router