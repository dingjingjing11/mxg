import Vue from "vue"
import Router from "vue-router"
import Login from "../views/login/login.vue"

Vue.use(Router);
const routes =[
   {
      path:"/login",
      name:"login",
      component:Login
   }
]
let router = new Router({
   routes,
    // mode:'hash', //history
   //  routes: [
   //     {
   //        path: '/login', component: () => import('@/views/layout.vue'),
   //        redirect: '/login',
   //        children: [
   //           //后台首页
   //          //  { path: '/index', name: 'index', component: () => import('@/views/index/index.vue'),
   //          //  meta:[{title:'首页',path:'/index'},{title:'后台首页',path:'/index'}]},   
            
 
   //        ]
 
   //     },
 
      
   // ]
 })
 export default router