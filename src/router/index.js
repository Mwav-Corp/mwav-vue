import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignUpView from '@/views/SignUpView.vue';

import SementicLayout from '@/layouts/SementicLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: SementicLayout },
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      meta: { layout: SementicLayout },
      component: () => import('@/views/PortfolioView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: SementicLayout },
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/team',
      name: 'team',
      meta: { layout: SementicLayout },
      component: () => import('@/views/TeamView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { layout: SementicLayout },
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/sign-up',
      name: 'signUp',
      meta: { layout: SementicLayout },
      component: SignUpView
    }
  ]
});

export default router;
