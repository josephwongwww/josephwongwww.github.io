import { createRouter, createWebHistory } from 'vue-router'
import { updateDocumentMetadata } from '../utils/seo'

const routes = [
  { path: '/', name: 'index', component: () => import('../views/index.vue'), meta: { titleKey: 'nav.home' } },
  { path: '/index', name: 'index2', component: () => import('../views/index.vue'), meta: { titleKey: 'nav.home' } },
  { path: '/product', name: 'product', component: () => import('../views/product.vue'), meta: { titleKey: 'nav.product' } },
  { path: '/about', name: 'about', component: () => import('../views/about.vue'), meta: { titleKey: 'nav.about' } },
  { path: '/contact', name: 'contact', component: () => import('../views/contact.vue'), meta: { titleKey: 'nav.contact' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 120 }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  updateDocumentMetadata(to.meta.titleKey)
})

export default router
