<template>
  <div class="headBox">
    <div class="navBoxFirst">
      <div class="navInner">
        <img src="../assets/logo2.png" class="headb" />
        <div class="navList">
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
defineProps(['navSel'])
</script>

<style scoped>
.headBox { width: 100%; position: relative; z-index: 10; }

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
</style>
