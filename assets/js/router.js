import Vue from 'vue'
import Router from 'vue-router'
import dashboardRoutes from './modules/dashboard/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...dashboardRoutes,
    { path: '', redirect: '/dashboard' }
  ]
})

export default router
