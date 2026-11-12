<template>
  <div class="wc-carousel" @mouseenter="pauseAuto" @mouseleave="resumeAuto" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
    <div class="wc-carousel-track" :style="trackStyle">
      <slot />
    </div>
    <!-- 左右箭头 -->
    <div v-if="arrows" class="wc-carousel-arrow wc-carousel-arrow-left" @click="prev">
      <slot name="prevArrow">
        <span class="wc-carousel-arrow-icon">&#10094;</span>
      </slot>
    </div>
    <div v-if="arrows" class="wc-carousel-arrow wc-carousel-arrow-right" @click="next">
      <slot name="nextArrow">
        <span class="wc-carousel-arrow-icon">&#10095;</span>
      </slot>
    </div>
    <!-- 底部圆点 -->
    <ul v-if="dots" class="wc-carousel-dots">
      <li v-for="i in slideCount" :key="i" :class="{ active: current === i - 1 }" @click="goTo(i - 1)">
        <button />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, useSlots } from 'vue'

const props = defineProps({
  autoplay: { type: Boolean, default: false },
  autoplaySpeed: { type: Number, default: 3000 },
  arrows: { type: Boolean, default: false },
  dots: { type: Boolean, default: true },
  speed: { type: Number, default: 500 }
})

const emit = defineEmits(['beforeChange', 'afterChange'])

const slots = useSlots()
const current = ref(0)
let timer = null

const slideCount = computed(() => {
  const def = slots.default ? slots.default() : []
  return def.filter(v => v && (v.type || v.key !== undefined || v.children)).length || def.length
})

const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
  transition: `transform ${props.speed}ms ease`
}))

const goTo = (i) => {
  if (i === current.value) return
  emit('beforeChange', current.value, i)
  current.value = i
  emit('afterChange', i)
}

const prev = () => goTo((current.value - 1 + slideCount.value) % slideCount.value)
const next = () => goTo((current.value + 1) % slideCount.value)

const startAuto = () => {
  if (props.autoplay && slideCount.value > 1) {
    timer = setInterval(next, props.autoplaySpeed)
  }
}
const pauseAuto = () => { if (timer) clearInterval(timer); timer = null }
const resumeAuto = () => pauseAuto() || startAuto()

/* 触摸滑动切换（手机端） */
let touchX = 0
let touchY = 0
const onTouchStart = (e) => {
  touchX = e.touches[0].clientX
  touchY = e.touches[0].clientY
  pauseAuto()
}
const onTouchEnd = (e) => {
  const dx = e.changedTouches[0].clientX - touchX
  const dy = e.changedTouches[0].clientY - touchY
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    dx < 0 ? next() : prev()
  }
  resumeAuto()
}

onMounted(startAuto)
onUnmounted(pauseAuto)
</script>

<style scoped>
.wc-carousel { position: relative; width: 100%; overflow: hidden; }
.wc-carousel-track { display: flex; width: 100%; transition: transform .5s ease; }
.wc-carousel-track > :deep(*) { flex: 0 0 100%; }

.wc-carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .5;
  transition: all .3s;
}
.wc-carousel-arrow:hover { opacity: .95; }
.wc-carousel-arrow-left { left: 10px; }
.wc-carousel-arrow-right { right: 10px; }
.wc-carousel-arrow-icon { color: #fff; font-size: 48px; line-height: 1; filter: drop-shadow(0 2px 6px rgba(0,0,0,.4)); }

.wc-carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  list-style: none;
  z-index: 10;
}
.wc-carousel-dots li { cursor: pointer; }
.wc-carousel-dots li button {
  width: 16px;
  height: 3px;
  border: none;
  padding: 0;
  background: rgba(255, 255, 255, .45);
  border-radius: 2px;
  transition: all .3s;
}
.wc-carousel-dots li.active button { background: #fff; width: 24px; }
</style>
