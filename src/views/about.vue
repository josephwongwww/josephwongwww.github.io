<template>
  <div>
    <heads :navSel="3" />
    <div class="modBanner">
      <img :src="banner" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="aboutOne">
        <p>{{ t('about.oneTitle') }}</p>
        <p>{{ t('about.oneDesc') }}</p>
        <img :src="about1" class="back widthFix" />
      </div>

      <div class="aboutTwo">
        <p>{{ t('about.twoTitle1') }}</p>
        <p>{{ t('about.twoTitle2') }}</p>
        <p>{{ t('about.twoDesc1') }}</p>
        <p>{{ t('about.twoDesc2') }}</p>
        <p>{{ t('about.twoDesc3') }}</p>
        <img :src="about2" class="back widthFix" />
      </div>

      <div class="aboutThree">
        <p>{{ t('about.threeTitle') }}</p>
        <p>{{ t('about.threeDesc1') }}</p>
        <p>{{ t('about.threeDesc2') }}</p>
        <img :src="about3" class="back widthFix" />
      </div>

      <div class="aboutSix flex-between">
        <div class="ImgCount">
          <p>0{{ sel + 1 }}</p>
          <p>/{{ certList.length }}</p>
        </div>
        <div class="ImgOperate">
          <p @click="prev"></p>
          <p @click="next"></p>
        </div>
        <div ref="dvImgRef" class="dvImg">
          <p v-for="(img, idx) in certList" :key="idx" :class="sel == idx ? 'on' : ''" @click="select(idx)">
            <img :src="getImageUrl(img)" class="aspectFill" />
          </p>
        </div>
        <div v-if="sel == 1" class="dvText">
          <p>{{ t('about.certTitle') }}</p>
          <p>{{ t('about.certSub') }}</p>
          <p>{{ t('about.certText1_1') }}</p>
          <p>{{ t('about.certText1_2') }}</p>
          <p>{{ t('about.certText1_3') }}</p>
        </div>
        <div v-else class="dvText">
          <p>{{ t('about.certTitle') }}</p>
          <p>{{ t('about.certSub') }}</p>
          <p>{{ t('about.certText2_1') }}</p>
          <p>{{ t('about.certText2_2') }}</p>
          <p>{{ t('about.certText2_3') }}</p>
        </div>
        <img :src="about7" class="back widthFix" />
      </div>

      <div class="aboutFive">
        <img :src="about5" class="back widthFix" />
      </div>

      <modFoot />
    </div>

    <foots />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getImageUrl } from '../utils/api'
import { useI18n } from '../i18n'
import modFoot from '../components/modFoot.vue'
import banner from '../assets/about/banner.png'
import about1 from '../assets/about/about1.png'
import about2 from '../assets/about/about2.png'
import about3 from '../assets/about/about3.png'
import about5 from '../assets/about/about5.png'
import about7 from '../assets/about/about7.png'

const { t } = useI18n()

const dvImgRef = ref(null)
const sel = ref(1)
const certList = ref(['zhen1.png', 'pro.jpg', 'zhen1.png', 'zhen1.png', 'pro.jpg', 'zhen1.png'])

onMounted(() => {
  dvImgRef.value.scrollTop = 100
})

function select(idx) {
  sel.value = idx
  if (idx == 0) {
    dvImgRef.value.scrollTop = 0
  } else {
    dvImgRef.value.scrollTop = dvImgRef.value.children[idx - 1].offsetTop + 100
  }
}

function prev() {
  sel.value == 0 ? select(0) : select(sel.value - 1)
}

function next() {
  sel.value == certList.value.length - 1 ? select(certList.value.length - 1) : select(sel.value + 1)
}
</script>

<style scoped>
.modBanner { width: 100%; position: relative; }
.modBanner img {
  width: 100%;
  height: clamp(420px, 68vh, 760px);
  object-fit: cover;
  object-position: bottom;
}

.aboutOne { position: relative; padding: 0 120px; height: 800px; }
.aboutOne .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }

.aboutTwo { position: relative; padding: 0 120px; height: 800px; }
.aboutTwo .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
.aboutTwo p { position: relative; z-index: 2; color: #fff; }
.aboutTwo p:nth-child(1) { font-weight: 700; font-size: 80px; line-height: 80px; padding-top: 100px; }
.aboutTwo p:nth-child(2) { font-weight: 700; font-size: 50px; line-height: 50px; padding-top: 20px; }
.aboutTwo p:nth-child(3), .aboutTwo p:nth-child(4), .aboutTwo p:nth-child(5) { font-size: 20px; width: 540px; line-height: 30px; padding-top: 80px; }

.aboutThree { position: relative; padding: 0 120px; height: 800px; }
.aboutThree .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
.aboutThree p { position: relative; z-index: 2; color: #fff; }
.aboutThree p:nth-child(1) { font-weight: 700; font-size: 80px; line-height: 80px; padding-top: 100px; }
.aboutThree p:nth-child(2), .aboutThree p:nth-child(3) { font-size: 20px; width: 560px; line-height: 30px; padding-top: 80px; }

.aboutSix { position: relative; padding: 0 120px; height: 800px; }
.aboutSix .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
.aboutSix .ImgOperate { position: absolute; z-index: 2; right: 3%; bottom: 6%; display: flex; gap: 40px; }
.aboutSix .ImgOperate p { width: 60px; height: 35px; cursor: pointer; }
.aboutSix .ImgCount { position: absolute; z-index: 2; left: 7%; }
.aboutSix .ImgCount p { color: #fff; }
.aboutSix .ImgCount p:nth-child(1) { font-size: 70px; line-height: 70px; }
.aboutSix .ImgCount p:nth-child(2) { font-size: 40px; line-height: 40px; color: rgba(255, 255, 255, .5); margin-top: 7px; }
.aboutSix .dvImg {
  margin-left: 160px;
  position: relative;
  z-index: 2;
  height: 100%;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 80px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
.aboutSix .dvImg::-webkit-scrollbar { width: 0px !important; height: 0px !important; }
.aboutSix .dvImg::-webkit-scrollbar-thumb { background-color: transparent !important; }
.aboutSix .dvImg::-webkit-scrollbar-track { background-color: transparent !important; }
.aboutSix .dvImg p { width: 135px; height: 200px; cursor: pointer; border-radius: 24px; box-shadow: 0 4px 9px 4px rgba(0, 0, 0, .25); }
.aboutSix .dvImg p img { width: 133px; height: 200px; }
.aboutSix .dvImg .on { width: 320px; height: 450px; margin-left: 20px; }
.aboutSix .dvImg .on img { width: 320px; height: 450px; }
.aboutSix .dvText { position: relative; z-index: 2; width: 600px; margin-right: -60px; }
.aboutSix .dvText p { color: #fff; }
.aboutSix .dvText p:nth-child(1) { font-weight: 700; font-size: 80px; line-height: 80px; }
.aboutSix .dvText p:nth-child(2) { font-size: 30px; line-height: 30px; margin-top: 10px; }
.aboutSix .dvText p:nth-child(3) { font-size: 20px; color: rgba(255, 255, 255, .5); margin-top: 50px; }
.aboutSix .dvText p:nth-child(4) { font-weight: 700; font-size: 40px; color: #fff; width: 600px; margin-top: 120px; }
.aboutSix .dvText p:nth-child(5) { font-size: 20px; color: rgba(255, 255, 255, .5); margin-top: 120px; }

.aboutFive { position: relative; padding: 0 120px; height: 800px; }
.aboutFive .back { width: 100%; height: auto; position: absolute; top: 0; left: 0; z-index: 1; }

/* 修复原站遗留：aboutOne 文字原本无样式被背景图盖住（不可见） */
.aboutOne p { position: relative; z-index: 3; color: #fff; }
.aboutOne p:nth-child(1) { font-weight: 700; font-size: 48px; line-height: 60px; padding-top: 120px; }
.aboutOne p:nth-child(2) { font-size: 20px; width: 560px; line-height: 30px; padding-top: 40px; }
.aboutOne::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(20, 16, 46, .55), rgba(20, 16, 46, .25));
  z-index: 2;
}

/* 宽屏：深色区块背景全出血，与 banner 衔接 */
@media (min-width: 1441px) {
  .aboutOne, .aboutTwo, .aboutThree, .aboutSix, .aboutFive { height: calc(100vw / 1.8); }
  .aboutOne .back, .aboutTwo .back, .aboutThree .back,
  .aboutSix .back, .aboutFive .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}

/* ===== 手机端（<768px，原生响应式，无 zoom）===== */
@media (max-width: 767px) {
  .modBanner img { height: 52vh; object-position: 10% bottom; }
  .aboutOne, .aboutTwo, .aboutThree { height: auto; min-height: 460px; padding: 44px 20px; }
  .aboutOne p:nth-child(1) { font-size: 26px; line-height: 38px; padding-top: 0; }
  .aboutOne p:nth-child(2) { font-size: 13px; line-height: 22px; width: auto; padding-top: 18px; }
  .aboutTwo p:nth-child(1) { font-size: 30px; line-height: 42px; padding-top: 0; }
  .aboutTwo p:nth-child(2) { font-size: 20px; line-height: 30px; padding-top: 10px; }
  .aboutTwo p:nth-child(3), .aboutTwo p:nth-child(4), .aboutTwo p:nth-child(5) { font-size: 13px; line-height: 22px; width: auto; padding-top: 14px; }
  .aboutThree p:nth-child(1) { font-size: 30px; line-height: 42px; padding-top: 0; }
  .aboutThree p:nth-child(2), .aboutThree p:nth-child(3) { font-size: 13px; line-height: 22px; width: auto; padding-top: 14px; }

  /* 证书区：纵向堆叠，触摸滚动 */
  .aboutSix { height: auto; min-height: 0; padding: 44px 20px; flex-direction: column; align-items: stretch; }
  .aboutSix .ImgCount { position: static; display: flex; align-items: baseline; }
  .aboutSix .ImgCount p:nth-child(1) { font-size: 34px; line-height: 40px; }
  .aboutSix .ImgCount p:nth-child(2) { font-size: 20px; line-height: 24px; margin-top: 0; margin-left: 6px; }
  .aboutSix .ImgOperate { display: none; }
  .aboutSix .dvImg { margin-left: 0; height: 460px; grid-gap: 40px; }
  .aboutSix .dvImg p { width: 96px; height: 140px; border-radius: 14px; }
  .aboutSix .dvImg p img { width: 96px; height: 140px; }
  .aboutSix .dvImg .on { width: 260px; height: 380px; margin-left: 0; }
  .aboutSix .dvImg .on img { width: 260px; height: 380px; }
  .aboutSix .dvText { width: auto; margin: 32px 0 0; }
  .aboutSix .dvText p:nth-child(1) { font-size: 26px; line-height: 34px; }
  .aboutSix .dvText p:nth-child(2) { font-size: 15px; line-height: 20px; margin-top: 6px; }
  .aboutSix .dvText p:nth-child(3) { font-size: 13px; margin-top: 18px; line-height: 22px; }
  .aboutSix .dvText p:nth-child(4) { font-size: 18px; width: auto; margin-top: 20px; }
  .aboutSix .dvText p:nth-child(5) { font-size: 13px; margin-top: 20px; line-height: 22px; }

  .aboutFive { height: auto; padding: 0; }
  .aboutFive .back { position: static; width: 100%; height: auto; }
}
</style>
