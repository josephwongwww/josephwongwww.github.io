import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('../views/index.vue'), meta: { title: '首页' } },
  { path: '/index', name: 'index2', component: () => import('../views/index.vue'), meta: { title: '首页' } },
  { path: '/product', name: 'product', component: () => import('../views/product.vue'), meta: { title: '产品中心' } },
  { path: '/about', name: 'about', component: () => import('../views/about.vue'), meta: { title: '关于我们' } },
  { path: '/contact', name: 'contact', component: () => import('../views/contact.vue'), meta: { title: '联系我们' } },
  { path: '/proline', name: 'proline', component: () => import('../views/proline.vue'), meta: { title: '生产线展示' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
