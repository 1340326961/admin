import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path: '/page2',
      name: 'page2',
      component: () => import('@/views/page2/page2.vue'),
      meta: { 
        keepAlive: true 
      }
    },{
      path: '/page1',
      name: 'page1',
      component: () => import('@/views/page1/page1.vue'),
      meta: { 
        keepAlive: true 
      }
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
// 路由拦截器
router.beforeEach((to, from, next) => {
  // 逻辑操作
  let token = localStorage.getItem(`token`);
  if (!token&&to.fullPath !==`/login`) {
    return router.push({path:`/login`})
  }else {
    next();
  }
})
export default router
