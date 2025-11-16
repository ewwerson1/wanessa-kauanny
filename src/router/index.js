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
      path: '/login',
      name: 'login',
      component: ()=>import('../views/LoginUser.vue'),
      meta: { hideFooter: true }
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: ()=>import('../views/SignUp.vue')
    },
    {
      path: '/marcar-consulta',
      name: 'marcar-consulta',
      component: ()=>import('../views/CheckUp.vue')
    }
  ],
})

export default router
