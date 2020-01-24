import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: () => import(/* webpackChunkName: "dashboardHome" */ '../components/dashboardHome.vue')
      },
      {
        path: 'about',
        name: 'dashboard-about',
        component: () => import(/* webpackChunkName: "dashboardAbout" */ '../components/dashboardAbout.vue')
      },
      {
        path: 'service',
        name: 'dashboard-service',
        component: () => import(/* webpackChunkName: "dashboardService" */ '../components/dashboardService.vue')
      },
      {
        path: 'portofolio',
        name: 'dashboard-portofolio',
        component: () => import(/* webpackChunkName: "dashboardPortofolio" */ '../components/dashboardPortofolio.vue')
      },
      {
        path: 'event',
        name: 'dashboard-event',
        component: () => import(/* webpackChunkName: "dashboardEvent" */ '../components/dashboardEvent.vue')
      },
      {
        path: 'add-admin',
        name: 'dashboard-add-admin',
        component: () => import(/* webpackChunkName: "dashboardAddAdmin" */ '../components/dashboardAddAdmin.vue')
      }
    ]
  },
  {
    path: '/portofolio',
    name: 'portofolio',
    component: () => import(/* webpackChunkName: "portofolio" */ '../views/Portofolio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
