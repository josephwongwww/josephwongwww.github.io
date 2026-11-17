<template>
  <div>
    <heads :navSel="1" />
    <section class="businessHero" aria-labelledby="hero-title">
      <div class="heroCopy">
        <p class="eyebrow">{{ t('conversion.eyebrow') }}</p>
        <h1 id="hero-title">{{ t('conversion.title') }}</h1>
        <p class="heroDescription">{{ t('conversion.desc') }}</p>
        <div class="actionRow">
          <router-link class="action primary" to="/product">{{ t('conversion.browse') }}</router-link>
          <router-link class="action secondary" to="/contact#inquiry">{{ t('conversion.inquire') }}</router-link>
        </div>
        <p class="heroContact"><a href="mailto:julian@win-choice.com">julian@win-choice.com</a></p>
      </div>
      <div class="heroVisual">
        <img :src="img3" :alt="t('product.items')[1].title" fetchpriority="high" />
        <span>{{ t('conversion.caption') }}</span>
      </div>
    </section>
    <div class="PubPageBox">
      <div class="snapGroup">
        <div class="modOne">
          <p>{{ t('index.modOneTitle') }}</p>
          <p class="scrollHint">{{ t('index.modOneHint') }}</p>
          <svg class="chevron" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

      <div class="modTwo">
        <div class="title">
          <p>{{ t('index.modTwoTitle1') }}</p>
          <p>{{ t('index.modTwoTitle2') }}</p>
        </div>
        <div class="grid">
          <div class="list">
            <img :src="img2" class="widthFix" />
            <p>{{ t('index.modTwo.c1zh') }}</p>
            <p>{{ t('index.modTwo.c1en') }}</p>
          </div>
          <div class="list">
            <img :src="img3" class="widthFix" />
            <p>{{ t('index.modTwo.c2zh') }}</p>
            <p>{{ t('index.modTwo.c2en') }}</p>
          </div>
          <div class="list">
            <img :src="img1" class="widthFix" />
            <p>{{ t('index.modTwo.c3zh') }}</p>
            <p>{{ t('index.modTwo.c3en') }}</p>
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
            <p>{{ t('index.modFour.a1') }}</p>
            <p>2005</p>
            <p>{{ t('conversion.founded') }}</p>
          </div>
          <div class="dvOne">
            <p>{{ t('index.modFour.b1') }}</p>
            <p>500+</p>
            <p>{{ t('index.modFour.b2') }}</p>
          </div>
        </div>
        <img :src="img5" class="back widthFix" />
      </div>

      <div class="modFive">
        <p>{{ t('index.modFiveTitle') }}</p>
        <p>{{ t('index.modFiveDesc') }}</p>
        <img :src="img8" class="back widthFix" />
      </div>

      <div class="modSix">
        <p>{{ t('index.modSix.t1') }}</p>
        <p>{{ t('index.modSix.t2') }}</p>
        <p>{{ t('index.modSix.d1') }}</p>
        <p>{{ t('index.modSix.d2') }}</p>
        <img :src="img6" class="back widthFix" />
      </div>

      <div class="modEight">
        <p>{{ t('index.modEight.t1') }}</p>
        <p>{{ t('index.modEight.t2') }}</p>
        <p>{{ t('index.modEight.desc') }}</p>
        <p>{{ t('index.modEight.company') }}</p>
        <img :src="img9" class="back widthFix" />
      </div>

      <div class="modSeven">
        <div class="sevenHead">
          <p>{{ t('index.modSevenTitle') }}</p>
          <p>{{ t('index.modSevenSub') }}</p>
        </div>
        <div class="listBox">
          <div class="list">
            <h4>{{ t('offices.dongguan') }}</h4>
            <p>Tel： <a class="contactLink" href="tel:+85268249042">+852 68249042</a></p>
            <p>Mail： <a class="contactLink" href="mailto:julian@win-choice.com">julian@win-choice.com</a></p>
            <p>Add.：{{ t('offices.dongguanAddr') }}</p>
          </div>
          <div class="list">
            <h4>{{ t('offices.hongkong') }}</h4>
            <p>Tel： <a class="contactLink" href="tel:+85235210169">(852) 3521 0169</a></p>
            <p>Mail： <a class="contactLink" href="mailto:julian@win-choice.com">julian@win-choice.com</a></p>
            <p>Add.：{{ t('offices.hongkongAddr') }}</p>
          </div>
          <div class="list">
            <h4>{{ t('offices.vietnam') }}</h4>
            <p>Tel： (86) 5883 0806</p>
            <p>Mail： <a class="contactLink" href="mailto:julian@win-choice.com">julian@win-choice.com</a></p>
            <p>Add.：{{ t('offices.vietnamAddr') }}</p>
          </div>
        </div>
        <div class="back"></div>
      </div>
    </div>

    <foots />
  </div>
</template>

<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()

import img1 from '../assets/index/img1.png'
import img2 from '../assets/index/img2.png'
import img3 from '../assets/index/img3.png'
import img4 from '../assets/index/img4.png'
import img5 from '../assets/index/img5.png'
import img6 from '../assets/index/img6.png'
import img8 from '../assets/index/img8.png'
import img9 from '../assets/index/img9.png'

</script>

<style scoped>
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
.businessHero, .snapGroup, .modThree, .modFour, .modFive, .modSix, .modSeven, .modEight {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
#footBox { scroll-snap-align: end; }
@media (min-width: 1441px) {
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
