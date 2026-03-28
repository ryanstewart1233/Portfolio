import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
    },
    {
      path: '/apps/:slug',
      name: 'app-detail',
      component: () => import('@/pages/AppDetailPage.vue'),
      props: true,
    },
    {
      path: '/apps/:slug/privacy',
      name: 'privacy-policy',
      component: () => import('@/pages/PrivacyPolicyPage.vue'),
      props: true,
    },
    {
      path: '/apps/:slug/terms',
      name: 'terms',
      component: () => import('@/pages/TermsPage.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
