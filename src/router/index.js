import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: function (to, from, next) {
      const authorized = Vue.prototype.$db.authorized()
      if (authorized) {
        if (from) {
          next(from)
        } else {
          next('/')
        }
      } else {
        next(true)
      }
    }
  },
  {
    path: '/',
    component: Home,
    beforeEnter: function (to, from, next) {
      const authorized = Vue.prototype.$db.authorized()
      if (authorized) {
        next(true)
      } else {
        next('/login')
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
