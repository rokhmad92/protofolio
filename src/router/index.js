import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import skillView from '../views/kemampuanView.vue'
import sosmedView from '../views/sosmedView.vue'
import kontakView from '../views/kontakView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'R.Y | Beranda'
      },
    },
    {
      path: '/kemampuan',
      name: 'skill',
      component: skillView,
      meta: {
        title: 'R.Y | Skill'
      }
    },
    {
      path: '/sosmed',
      name: 'sosmed',
      component: sosmedView,
      meta: {
        title: 'R.Y | Sosmed'
      }
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: kontakView,
      meta: {
        title: 'R.Y | Kontak'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router
