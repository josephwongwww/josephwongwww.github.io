<template>
  <div id="appBox">
    <div id="app" :style="{ zoom: scale }">
      <router-view />
      <div class="PubPageBox">
        <div v-show="showTop" class="Topping flex-center" @click="scrollToTop">
          <img src="./assets/top.png" class="widthFix" />
          <p>{{ t('backTop') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from './i18n'

const { t } = useI18n()

// 缩放机制改良：1440 设计稿；宽屏封顶 1；平板按比例缩小；
// 手机（<768px）关闭缩放，走原生响应式布局（见各组件的 max-width:767px 媒体查询）
const winW = ref(window.innerWidth)
const winH = ref(window.innerHeight)

const scale = computed(() => {
  if (winW.value < 768) return 1
  return Math.min(1, winW.value / 1440)
})

const showTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onScroll = () => {
  showTop.value = window.pageYOffset > window.innerWidth
}

const onResize = () => {
  winW.value = window.innerWidth
  winH.value = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll)
})
</script>
