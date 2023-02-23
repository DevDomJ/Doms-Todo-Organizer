import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Examples/HomeView.vue'
import TodoOrganizerView from '../views/TodoOrganizerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoOrganizerView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Examples/AboutView.vue')
    }
  ]
})

export default router
