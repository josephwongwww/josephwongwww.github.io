// 轻量 i18n：基于 Vue 响应式 + provide/inject，无第三方依赖
import { reactive, readonly, computed } from 'vue'
import zhTW from './zh-TW'
import zhCN from './zh-CN'
import en from './en'

export const messages = { 'zh-TW': zhTW, 'zh-CN': zhCN, en }
export const locales = [
  { code: 'zh-TW', label: '繁' },
  { code: 'zh-CN', label: '简' },
  { code: 'en', label: 'EN' }
]

const STORAGE_KEY = 'winchoice-locale'

function getDefaultLocale() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && messages[saved]) return saved
  }
  return 'zh-TW' // 默认香港繁体
}

// 模块级单例：所有组件共享同一份响应式状态
const state = reactive({
  locale: getDefaultLocale()
})

export const locale = readonly(state)

export function setLocale(code) {
  if (!messages[code]) return
  state.locale = code
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, code)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', code)
  }
}

// 按点号路径取值：t('index.modTwo.c1zh') 或 t('nav.home')
export function translate(path) {
  const keys = String(path).split('.')
  let cur = messages[state.locale]
  for (const k of keys) {
    if (cur == null) return path
    cur = cur[k]
  }
  return cur == null ? path : cur
}

// 组合式入口：组件内 useI18n() 返回响应式 t
export function useI18n() {
  const t = (path) => {
    // 依赖 state.locale，确保切换语言时组件重新渲染
    void state.locale
    return translate(path)
  }
  return { t, locale, setLocale, locales }
}

export default { useI18n, setLocale, locale, locales, messages }
