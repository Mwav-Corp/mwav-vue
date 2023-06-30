import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import AboutView from '@/views/AboutView.vue';
import TeamView from '@/views/TeamView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
});

export default router;