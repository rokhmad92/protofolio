import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import skillView from '../views/kemampuanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'R.Y | Tentang Saya'
      },
    },
    {
      path: '/kemampuan',
      name: 'skill',
      component: skillView,
      meta: {
        title: 'R.Y | Kemampuan'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router
