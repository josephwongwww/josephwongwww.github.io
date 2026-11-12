<template>
  <div>
    <heads :navSel="1" />
    <div class="modBanner">
      <wcCarousel :autoplay="true" :arrows="true" :autoplaySpeed="6000" @beforeChange="beforeChange">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 40px; z-index: 1">
            <LeftCircleIcon />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 40px">
            <RightCircleIcon />
          </div>
        </template>
        <div class="bannerTextBox">
          <div v-if="showText" class="dvTe">
            <p>提升品牌格调</p>
            <p>我们的产品专家在整个开发过程中会建议、改进及跟踪直至开发成功，为了寻求效率和潜在的成本节约，永釆的团队与客户紧密合作，以提供卓越的产品。</p>
          </div>
          <img :src="banner1" class="widthFix" />
        </div>
        <div class="bannerTextBox">
          <div v-if="showText" class="dvTe">
            <p>提升品牌格调</p>
            <p>我们的产品专家在整个开发过程中会建议、改进及跟踪直至开发成功，为了寻求效率和潜在的成本节约，永釆的团队与客户紧密合作，以提供卓越的产品。</p>
          </div>
          <img :src="banner2" class="widthFix" />
        </div>
      </wcCarousel>
    </div>

    <div class="PubPageBox">
      <div class="snapGroup">
        <div class="modOne">
          <p>服装辅料制造商，<br />用心定制 为您点亮品牌指引之路。</p>
          <p class="scrollHint">向下滑动查看我们最近的工作。</p>
          <svg class="chevron" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

      <div class="modTwo">
        <div class="title">
          <p>打造硬核竞争力</p>
          <p>树立行业新标杆</p>
        </div>
        <div class="grid">
          <div class="list">
            <img :src="img2" class="widthFix" />
            <p>镜面膜镭射</p>
            <p>Mirror facial mask</p>
          </div>
          <div class="list">
            <img :src="img3" class="widthFix" />
            <p>反光热转印</p>
            <p>Reflective heat transfer</p>
          </div>
          <div class="list">
            <img :src="img1" class="widthFix" />
            <p>幻彩热转印</p>
            <p>Illusionary color heat transfer</p>
          </div>
        </div>
      </div>
      </div>

      <div class="modThree">
        <img :src="img4" class="back widthFix" />
      </div>

      <div class="modFour">
        <div class="dvOneBox">
          <div class="dvOne">
            <p>倾心服务客户</p>
            <p>19</p>
            <p>年技术沉淀</p>
          </div>
          <div class="dvOne">
            <p>匠心塑造典范</p>
            <p>500+</p>
            <p>服务客户</p>
          </div>
        </div>
        <img :src="img5" class="back widthFix" />
      </div>

      <div class="modFive">
        <p>资质认证　全球权威认证</p>
        <p>我们已经成功完成了行业中一些最受认可的认证，以确保产品安全、环境友好以及员工健康安全，并符合各种标准。我们持有以下证书和奖项。</p>
        <img :src="img8" class="back widthFix" />
      </div>

      <div class="modSix">
        <p>永釆品质</p>
        <p>值得信赖</p>
        <p>无可挑剔的产品质量，百分百的客户满意度</p>
        <p>是永釆对品质的要求！</p>
        <img :src="img6" class="back widthFix" />
      </div>

      <div class="modEight">
        <p>Win Choice</p>
        <p>Industries ltd</p>
        <p>我们是一家服装辅料制造商，成立于 2005 年，工厂位于中国南方。 我们以生产高质量的热转印、印刷织标和织贴、升华印刷、激光切割标签而闻名。</p>
        <p>永采實業有限公司</p>
        <img :src="img9" class="back widthFix" />
      </div>

      <div class="modSeven">
        <div class="sevenHead">
          <p>联系我们</p>
          <p>Contact Us</p>
        </div>
        <div class="listBox">
          <div class="list">
            <h4>东莞办事处</h4>
            <p>Tel： (86) 180 4694 3817</p>
            <p>Mail： julian@win-choice.com</p>
            <p>Add.：东莞市桥头镇桥东路南街66号, 二栋厂房，二楼及三楼 </p>
          </div>
          <div class="list">
            <h4>香港办事处</h4>
            <p>Tel： (852) 3521 0169</p>
            <p>Mail： julian@win-choice.com</p>
            <p>Add.：香港新蒲岗大有街34号新科技广场20楼2009室</p>
          </div>
          <div class="list">
            <h4>越南办事处</h4>
            <p>Tel： (86) 5883 0806</p>
            <p>Mail： julian@win-choice.com</p>
            <p>Add.：SUNRISE CITY NORTH 越南第7区丹洪市阮友街27号</p>
          </div>
        </div>
        <div class="back"></div>
      </div>
    </div>

    <foots />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import wcCarousel from '../components/wcCarousel.vue'
import LeftCircleIcon from '../components/icons/LeftCircleIcon.vue'
import RightCircleIcon from '../components/icons/RightCircleIcon.vue'

import banner1 from '../assets/index/banner1.png'
import banner2 from '../assets/index/banner2.png'
import img1 from '../assets/index/img1.png'
import img2 from '../assets/index/img2.png'
import img3 from '../assets/index/img3.png'
import img4 from '../assets/index/img4.png'
import img5 from '../assets/index/img5.png'
import img6 from '../assets/index/img6.png'
import img8 from '../assets/index/img8.png'
import img9 from '../assets/index/img9.png'

// 原站机制：切换 slide 时重置文字触发入场动画
const showText = ref(true)
const beforeChange = () => {
  showText.value = false
  setTimeout(() => { showText.value = true }, 0)
}
</script>

<style scoped>
/* ============ Banner：限高裁切，不再吃满全屏 ============ */
.modBanner { width: 100%; position: relative; }
.modBanner :deep(.wc-carousel-track) { }
.modBanner .bannerTextBox {
  position: relative;
  height: clamp(420px, 68vh, 760px);
  overflow: hidden;
}
.modBanner .bannerTextBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 62%;
}
.modBanner .bannerTextBox .dvTe {
  position: absolute;
  /* 与正文内容栅格对齐：容器边距 + 120px 内边距（窄屏回落 120px） */
  left: max(120px, calc((100% - 1440px) / 2 + 120px));
  top: 40%;
  z-index: 100;
  max-width: 1180px;
}
.modBanner .bannerTextBox .dvTe p:nth-child(1) {
  font-weight: 700;
  font-size: clamp(40px, 6vw, 72px);
  color: #fff;
  letter-spacing: 3px;
  text-align: left;
  animation: sport 1s;
}
@keyframes sport { 0% { transform: translateY(60px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.modBanner .bannerTextBox .dvTe p:nth-child(2) {
  font-size: clamp(16px, 2vw, 24px);
  color: #fff;
  width: 960px;
  max-width: calc(100% - 40px);
  letter-spacing: 2px;
  text-align: left;
  line-height: 1.7;
  margin-top: 24px;
  animation: sport2 1.5s;
  font-weight: 300;
}
@keyframes sport2 { 0% { transform: translateY(60px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.modBanner :deep(.custom-slick-arrow) { color: #fff; }

.modOne { padding: 120px 120px 90px; }
.modOne p { font-weight: 300; font-size: 48px; color: #000; }
.modOne .scrollHint { margin-top: 40px; font-size: 30px; color: #332a5f; }
.modOne .chevron { display: block; color: #332a5f; margin-top: 18px; animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(8px); } }

/* ============ modTwo：规整三列网格（原版高低错落拼贴 + 悬浮大箭头，已弃用） ============ */
.modTwo { padding: 60px 120px 100px; }
.modTwo .title p { font-size: 48px; color: #272727; line-height: 1.25; }
.modTwo .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-top: 56px;
}
.modTwo .list img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
}
.modTwo .list p { text-align: center; }
.modTwo .list p:nth-child(2) { margin-top: 20px; font-size: 26px; color: #272727; font-weight: 600; }
.modTwo .list p:nth-child(3) { font-size: 16px; color: #8b8b8b; margin-top: 6px; }

.modThree { line-height: 0; }
.modThree .back { width: 100%; height: auto; }

.modFour { padding: 100px 120px; }
.modFour .dvOneBox { display: flex; justify-content: space-around; align-items: center; }
.modFour .dvOneBox .dvOne { text-align: center; flex: 1; }
.modFour .dvOneBox .dvOne p:nth-child(1) { font-size: 52px; font-weight: 700; color: #272727; }
.modFour .dvOneBox .dvOne p:nth-child(2) { font-size: 104px; font-weight: 700; color: #332a5f; }
.modFour .dvOneBox .dvOne p:nth-child(3) { font-size: 20px; color: #000; margin-top: 10px; }
.modFour .back { margin-top: 50px; }

.modFive { position: relative; height: 800px; padding: 0 120px; }
.modFive p { position: relative; z-index: 2; color: #fff; }
.modFive p:nth-child(1) { font-size: 60px; font-weight: 700; padding-top: 140px; }
.modFive p:nth-child(2) { width: 638px; font-size: 24px; padding-top: 40px; letter-spacing: 3px; line-height: 39px; }
.modFive .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }

.modSix { position: relative; height: 800px; padding: 0 120px; }
.modSix p { position: relative; z-index: 2; color: #fff; }
.modSix p:nth-child(1) { font-size: 64px; font-weight: 700; padding-top: 80px; line-height: 80px; }
.modSix p:nth-child(2) { font-size: 64px; font-weight: 700; padding-top: 30px; text-indent: 2em; line-height: 80px; }
.modSix p:nth-child(3) { font-size: 34px; font-weight: 700; padding-top: 140px; width: 515px; }
.modSix p:nth-child(4) { font-size: 44px; font-weight: 700; padding-top: 10px; }
.modSix .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }

/* modSeven：弃用烙印水印图（原图里 CONTACT WIN CHOICE 水印本身就裁断不可读），
   改用取色自原图的 CSS 渐变背景 + DOM 标题，高度随内容自然收拢，不再拉到 1000px+ */
.modSeven { position: relative; padding: 90px 120px 100px; }
.modSeven .back {
  position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 0;
  background:
    radial-gradient(ellipse 900px 480px at 84% 26%, rgba(255, 255, 255, 0.10), transparent 70%),
    linear-gradient(115deg, #332a5f 0%, #4e4092 48%, #6755c1 100%);
}
.modSeven .sevenHead { position: relative; z-index: 2; }
.modSeven .sevenHead p { color: #fff; }
.modSeven .sevenHead p:nth-child(1) { font-size: 60px; font-weight: 700; letter-spacing: 3px; }
.modSeven .sevenHead p:nth-child(2) { font-size: 20px; font-weight: 300; letter-spacing: 6px; margin-top: 14px; opacity: .75; }
.modSeven .listBox { position: relative; z-index: 2; display: flex; margin-top: 70px; }
.modSeven .listBox .list { flex: 1; padding: 50px; border-right: 2px solid #ffffff; }
.modSeven .listBox .list:last-child { border-right: none; }
.modSeven .listBox .list h4 { font-weight: 700; font-size: 36px; color: #fff; line-height: 39px; }
.modSeven .listBox .list p { font-weight: 400; font-size: 16px; color: #fff; line-height: 20px; margin-top: 25px; }

.modEight { position: relative; height: 800px; padding: 0 120px; }
.modEight p { position: relative; z-index: 2; color: #fff; }
.modEight p:nth-child(1) { font-size: 64px; font-weight: 700; padding-top: 50px; line-height: 80px; }
.modEight p:nth-child(2) { font-size: 64px; font-weight: 700; line-height: 80px; padding-top: 20px; }
.modEight p:nth-child(3) { font-size: 22px; font-weight: 400; padding-top: 100px; width: 620px; line-height: 1.8; }
.modEight p:nth-child(4) { font-size: 56px; font-weight: 700; padding-top: 100px; }
.modEight .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
/* 宽屏：深色区块背景全出血，与 banner 衔接；每个大区块整屏高，配合 scroll-snap 满屏翻页 */
.modBanner, .snapGroup, .modThree, .modFour, .modFive, .modSix, .modSeven, .modEight {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
#footBox { scroll-snap-align: end; }
@media (min-width: 1441px) {
  .modBanner .bannerTextBox { height: 100vh; }
  .snapGroup { min-height: 100vh; }
  .modThree { height: 100vh; }
  .modFour { min-height: 100vh; }
  .modFive, .modSix, .modEight { height: 100vh; min-height: 680px; }
  .modSeven { min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: 100px 120px 80px; }
  .modFive .back, .modSix .back, .modEight .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
  .modSeven .back { left: calc(50% - 50vw); right: calc(50% - 50vw); }
  .modThree .back { margin-left: calc((100% - 100vw) / 2); width: 100vw; height: 100%; object-fit: cover; }
}

/* ===== 手机端（<768px，原生响应式，无 zoom）===== */
@media (max-width: 767px) {
  .modBanner .bannerTextBox { height: 62vh; }
  .modBanner .bannerTextBox .dvTe { left: 20px; top: 32%; max-width: calc(100% - 40px); }
  .modBanner .bannerTextBox .dvTe p:nth-child(1) { font-size: 32px; letter-spacing: 1px; }
  .modBanner .bannerTextBox .dvTe p:nth-child(2) { font-size: 14px; width: auto; line-height: 1.7; margin-top: 14px; letter-spacing: 1px; }

  .modOne { padding: 44px 20px 40px; }
  .modOne p:nth-child(1) { font-size: 24px; line-height: 1.45; }
  .modOne .scrollHint { font-size: 16px; margin-top: 22px; }
  .modOne .chevron { margin-top: 12px; }

  .modTwo { padding: 28px 20px 52px; }
  .modTwo .title p { font-size: 24px; }
  .modTwo .grid { grid-template-columns: 1fr; gap: 30px; margin-top: 32px; }
  .modTwo .list p:nth-child(2) { font-size: 19px; margin-top: 12px; }
  .modTwo .list p:nth-child(3) { font-size: 12px; margin-top: 4px; }

  .modThree { line-height: 0; }
  .modThree .back { margin-left: 0; width: 100%; height: auto; }

  .modFour { padding: 44px 20px; }
  .modFour .dvOneBox { flex-direction: column; gap: 30px; }
  .modFour .dvOneBox .dvOne p:nth-child(1) { font-size: 24px; }
  .modFour .dvOneBox .dvOne p:nth-child(2) { font-size: 52px; }
  .modFour .dvOneBox .dvOne p:nth-child(3) { font-size: 15px; margin-top: 4px; }
  .modFour .back { margin-top: 30px; }

  /* 深色满屏区块：高度随内容自适应，背景 cover */
  .modFive, .modSix, .modSeven, .modEight { height: auto; min-height: 420px; padding: 48px 20px; }
  .modFive p:nth-child(1) { font-size: 28px; padding-top: 0; }
  .modFive p:nth-child(2) { font-size: 14px; width: auto; line-height: 24px; padding-top: 20px; letter-spacing: 1px; }
  .modSix p:nth-child(1), .modSix p:nth-child(2) { font-size: 30px; line-height: 44px; padding-top: 0; }
  .modSix p:nth-child(2) { padding-top: 12px; text-indent: 1em; }
  .modSix p:nth-child(3) { font-size: 16px; line-height: 30px; padding-top: 40px; width: auto; }
  .modSix p:nth-child(4) { font-size: 20px; padding-top: 6px; }

  .modSeven .sevenHead p:nth-child(1) { font-size: 30px; }
  .modSeven .sevenHead p:nth-child(2) { font-size: 13px; margin-top: 8px; }
  .modSeven .listBox { flex-direction: column; margin-top: 36px; }
  .modSeven .listBox .list { padding: 22px 0; border-right: none; border-bottom: 1px solid rgba(255, 255, 255, .25); }
  .modSeven .listBox .list:last-child { border-bottom: none; }
  .modSeven .listBox .list h4 { font-size: 20px; line-height: 26px; }
  .modSeven .listBox .list p { font-size: 13px; line-height: 20px; margin-top: 12px; }

  .modEight p:nth-child(1), .modEight p:nth-child(2) { font-size: 30px; line-height: 42px; }
  .modEight p:nth-child(1) { padding-top: 0; }
  .modEight p:nth-child(2) { padding-top: 8px; }
  .modEight p:nth-child(3) { font-size: 13px; width: auto; line-height: 22px; padding-top: 32px; }
  .modEight p:nth-child(4) { font-size: 22px; padding-top: 36px; }
}
</style>
