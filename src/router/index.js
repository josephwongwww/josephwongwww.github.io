import { createRouter, createWebHistory } from 'vue-router'
import { translate } from '../i18n'

const routes = [
  { path: '/', name: 'index', component: () => import('../views/index.vue'), meta: { titleKey: 'nav.home' } },
  { path: '/index', name: 'index2', component: () => import('../views/index.vue'), meta: { titleKey: 'nav.home' } },
  { path: '/product', name: 'product', component: () => import('../views/product.vue'), meta: { titleKey: 'nav.product' } },
  { path: '/about', name: 'about', component: () => import('../views/about.vue'), meta: { titleKey: 'nav.about' } },
  { path: '/contact', name: 'contact', component: () => import('../views/contact.vue'), meta: { titleKey: 'nav.contact' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta.titleKey) document.title = translate(to.meta.titleKey)
})

export default router
