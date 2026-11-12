<template>
  <div class="headBox">
    <div class="navBoxFirst">
      <div class="navInner">
        <img src="../assets/logo2.png" class="headb" />
        <button class="menuBtn" :class="{ open: menuOpen }" aria-label="菜单" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
        <div class="navList" :class="{ open: menuOpen }" @click.capture="menuOpen = false">
          <router-link to="/"><p :class="navSel == 1 ? 'on' : ''">首页</p></router-link>
          <router-link to="/product"><p :class="navSel == 2 ? 'on' : ''">产品中心</p></router-link>
          <router-link to="/about"><p :class="navSel == 3 ? 'on' : ''">关于我们</p></router-link>
          <router-link to="/contact"><p :class="navSel == 4 ? 'on' : ''">联系我们</p></router-link>
          <router-link to="/proline"><p :class="navSel == 5 ? 'on' : ''">生产线展示</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['navSel'])
const menuOpen = ref(false)
</script>

<style scoped>
.headBox { width: 100%; position: relative; z-index: 100; }

/* 毛玻璃悬浮导航：内层与 1440 内容容器对齐，宽屏不再拉满全屏 */
.navBoxFirst {
  width: 100%;
  padding: 30px 0;
  position: absolute;
  left: 0;
  top: 0;
  backdrop-filter: blur(40px);
  background: rgba(20, 16, 46, 0.18);
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
}
</style>
