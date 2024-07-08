import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(`../pages/Home.vue`),
      meta: {
        title: 'Главная'
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(`../pages/Contacts.vue`),
      meta: {
        title: 'Контакты'
      }
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import(`../pages/ProjectPage.vue`),
      meta: {
        title: 'Проект'
      }
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import(`../pages/Skills.vue`),
      meta: {
        title: 'Навыки'
      }
    },
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Глобальный навигационный хук для установки заголовка страницы
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfolio | MmGrand';
  next();
});

export default router
