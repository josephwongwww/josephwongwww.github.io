import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import api from './utils/api'
import './style/global.css'

const app = createApp(App)

app.use(router)
app.provide('$api', api)
api.setRouter(router)

// 全局组件注册（与原站一致）
app.component('heads', defineAsyncComponent(() => import('./components/heads.vue')))
app.component('foots', defineAsyncComponent(() => import('./components/foots.vue')))
app.component('mytag', defineAsyncComponent(() => import('./components/mytag.vue')))

app.mount('#appBox')
