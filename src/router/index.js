import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/ZhanShi/Index.vue'),
    redirect:'/phome',
    children:[
      {
        path: '/phome',
        name: 'phome',
        component: () => import(/* webpackChunkName: "phome" */ '../views/ZhanShi/pages/Home.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/ZhanShi/pages/Cart.vue'),
      },{
        path: '/fenlei',
        name: 'fenlei',
        component: () => import(/* webpackChunkName: "fenlei" */ '../views/ZhanShi/pages/Fenlei.vue'),
      },{
        path: '/vip',
        name: 'vip',
        component: () => import(/* webpackChunkName: "vip" */ '../views/ZhanShi/pages/Vip.vue'),
      },{
        path: '/mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "mine" */ '../views/ZhanShi/pages/Mine.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
