import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agendar-consulta',
      name: 'agendar-consulta',
      component: ()=>import('../views/CheckUp.vue')
    }
  ],
})

export default router
