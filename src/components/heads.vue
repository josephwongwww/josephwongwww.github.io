<template>
  <div class="headBox">
    <div class="navBoxFirst" :class="{ visible: showNav }">
      <div class="navInner">
        <img src="../assets/winchoice-logo.png" class="headb" />
        <button class="menuBtn" :class="{ open: menuOpen }" aria-label="菜单" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
        <div class="navList" :class="{ open: menuOpen }" @click.capture="menuOpen = false">
          <router-link to="/"><p :class="navSel == 1 ? 'on' : ''">{{ t('nav.home') }}</p></router-link>
          <router-link to="/product"><p :class="navSel == 2 ? 'on' : ''">{{ t('nav.product') }}</p></router-link>
          <router-link to="/about"><p :class="navSel == 3 ? 'on' : ''">{{ t('nav.about') }}</p></router-link>
          <router-link to="/contact"><p :class="navSel == 4 ? 'on' : ''">{{ t('nav.contact') }}</p></router-link>
        </div>
        <div class="langSwitch" @click.stop>
          <button
            v-for="l in locales"
            :key="l.code"
            class="langBtn"
            :class="{ on: locale === l.code }"
            @click="switchLocale(l.code)"
          >{{ l.label }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n, translate } from '../i18n'
import { useScrollState } from '../utils/scrollState'
defineProps(['navSel'])
const menuOpen = ref(false)
const { t, locale, setLocale, locales } = useI18n()
const router = useRouter()
const route = useRoute()
const { scrolled } = useScrollState()

// 导航显隐：非首页始终显示；首页未滚动时隐藏，滚动后弹出
const isHome = computed(() => route.name === 'index' || route.name === 'index2' || route.path === '/')
const showNav = computed(() => !isHome.value || scrolled.value)

// 切换语言后同步更新文档标题
function switchLocale(code) {
  setLocale(code)
  const route = router.currentRoute.value
  if (route.meta.titleKey) document.title = translate(route.meta.titleKey)
}
</script>

<style scoped>
.headBox { width: 100%; position: relative; z-index: 100; }

/* 毛玻璃悬浮导航：内层与 1440 内容容器对齐，宽屏不再拉满全屏 */
.navBoxFirst {
  width: 100%;
  padding: 30px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(40px);
  background: rgba(20, 16, 46, 0.18);
  /* 首屏（首页未滚动）隐藏，滚动后弹出 */
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
  transition: opacity .4s ease, transform .4s ease;
}
.navBoxFirst.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.navInner {
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.headb { width: auto; height: 55px; }

.navList { display: flex; align-items: center; justify-content: flex-end; }
.navList + .langSwitch { margin-left: 40px; }

/* 语言切换器 */
.langSwitch { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
.langBtn {
  min-width: 34px;
  padding: 4px 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .35);
  border-radius: 6px;
  color: rgba(255, 255, 255, .85);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  transition: all .2s;
}
.langBtn:hover { border-color: #fff; color: #fff; }
.langBtn.on { background: #fff; color: #332a5f; border-color: #fff; }
.navList p {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  margin-left: 70px;
  padding: 0 6px 6px;
  white-space: nowrap;
}
.navList p:hover { color: #fff; font-weight: 700; }
.navList .on { color: #fff; font-size: 19px; font-weight: 700; }

/* 汉堡按钮：仅手机端显示 */
.menuBtn { display: none; }

/* ===== 手机端：固定顶栏 + 汉堡下拉菜单 ===== */
@media (max-width: 767px) {
  .navBoxFirst {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 0;
    background: rgba(20, 16, 46, 0.78);
  }
  .navInner { padding: 0 16px; }
  .headb { height: 34px; }
  .menuBtn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    padding: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .menuBtn span {
    display: block;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    transition: transform .25s, opacity .25s;
  }
  .menuBtn.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .menuBtn.open span:nth-child(2) { opacity: 0; }
  .menuBtn.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .navList {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    display: none;
    background: #14102e;
    padding: 6px 16px 14px;
  }
  .navList.open { display: flex; }
  .navList p {
    margin-left: 0;
    padding: 13px 8px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .navList p:last-child { border-bottom: none; }
  .navList .on { font-size: 16px; }

  /* 移动端语言切换器：置于导航栏右侧（汉堡按钮旁） */
  .navList + .langSwitch { margin-left: auto; margin-right: 8px; }
  .langBtn { min-width: 30px; padding: 3px 7px; font-size: 13px; }
}
</style>
