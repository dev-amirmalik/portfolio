import { createRouter, createWebHistory } from 'vue-router'

const homeViewPage = () => import("../views/HomeView.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeViewPage
    },
  ]
})

export default router
