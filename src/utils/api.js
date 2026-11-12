// 与原站一致的图片资源映射（import.meta.glob eager 模式）
const modules = import.meta.glob('../assets/**/*.{png,jpg}', { eager: true, import: 'default', query: '?url' })

let _router = null

class Api {
  setRouter(router) {
    _router = router
  }

  jumpUrl(path) {
    if (_router) _router.push('/' + path)
  }

  toFixed2(t) {
    if (!String(t) || String(t) === 'undefined' || String(t) === 'null') return 0
    return Number(t).toFixed(2)
  }

  isEmptyStr(t) {
    t = String(t)
    return !t || t === 'undefined' || t === 'null' ? '' : t
  }

  getImageUrl(t) {
    // t 形如 "zhen1.png" / "product/list1.png"
    return modules['../assets/' + t] || ''
  }
}

export const api = new Api()
export const getImageUrl = (t) => api.getImageUrl(t)
export const jumpUrl = (path) => api.jumpUrl(path)
export default api
