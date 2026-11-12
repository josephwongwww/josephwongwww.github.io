<template>
  <div id="appBox">
    <div id="app" :style="{ zoom: scale }">
      <router-view />
      <div class="PubPageBox">
        <div v-show="showTop" class="Topping flex-center" @click="scrollToTop">
          <img src="./assets/top.png" class="widthFix" />
          <p>返回顶部</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 缩放机制改良：1440 设计稿；窄屏按比例缩小适配，宽屏封顶 1 不再放大
// （原站在 1920 屏会把整站放大 1.33 倍，banner 吃满全屏，观感如手机端放大）
const winW = ref(window.innerWidth)
const winH = ref(window.innerHeight)

const scale = computed(() => {
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
