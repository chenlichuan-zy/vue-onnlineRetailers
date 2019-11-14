import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/dashboard'
},
// dashboard是项目UI的主入口，其下有5个单页应用入口
{
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../views/dashboard/DashBoard.vue'),
  children: [
    {
      path: '/dashboard',
      redirect: '/dashboard/home'
    },
    {
      path: 'home',
      component: () => import('./../views/home/Home.vue')
    },
    {
      path: 'category',
      component: () => import('./../views/category/Category.vue')
    },
    {
      path: 'cart',
      component: () => import('./../views/cart/Cart.vue')
    },
    {
      path: 'quality',
      component: () => import('./../views/quality/Quality.vue')
    },
    {
      path: 'mine',
      component: () => import('./../views/mine/Mine.vue')
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
