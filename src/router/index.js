import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/components/Dashboard.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/components/Projects.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/components/Team.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
