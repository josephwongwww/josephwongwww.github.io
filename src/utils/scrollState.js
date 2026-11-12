// 共享滚动状态：首页 hero 大 logo 与导航小 logo 联动
import { ref, readonly } from 'vue'

// 模块级单例：所有组件共享同一份滚动状态
const scrolled = ref(false)
// 滚动进度（0~1），用于精细控制缩放动画
const progress = ref(0)

// 触发缩放动画的滚动阈值（px）
const THRESHOLD = 60
// 完成动画的滚动距离（px）
const MAX_SCROLL = 300

let _initialized = false

function update() {
  const y = window.pageYOffset || window.scrollTop || 0
  scrolled.value = y > THRESHOLD
  progress.value = Math.min(1, Math.max(0, (y - THRESHOLD) / (MAX_SCROLL - THRESHOLD)))
}

export function initScrollState() {
  if (_initialized) return
  _initialized = true
  update()
  window.addEventListener('scroll', update, { passive: true })
}

export function useScrollState() {
  initScrollState()
  return { scrolled: readonly(scrolled), progress: readonly(progress) }
}

export default { useScrollState, initScrollState }
