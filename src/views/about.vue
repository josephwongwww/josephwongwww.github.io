<template>
  <div>
    <heads :navSel="3" />
    <div class="modBanner">
      <img :src="banner" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="aboutOne">
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

      <div class="aboutProduction">
        <div class="prodHead">
          <p>{{ t('about.prodTitle') }}</p>
          <p>{{ t('about.prodSub') }}</p>
        </div>
        <div class="prodGrid">
          <div v-for="(item, idx) in productionList" :key="idx" class="prodItem">
            <img :src="item.img" class="prodImg" />
            <p class="prodLabel">{{ t('about.' + item.label) }}</p>
          </div>
        </div>
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
          <p v-for="(item, idx) in certList" :key="idx" :class="sel == idx ? 'on' : ''" @click="select(idx)">
            <img :src="item.img" class="aspectFill" />
          </p>
        </div>
        <div class="dvText">
          <p>{{ t('about.certTitle') }}</p>
          <p>{{ t('about.certSub') }}</p>
          <p>{{ t(certList[sel].nameKey) }}</p>
          <p>{{ t(certList[sel].descKey) }}</p>
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
import { useI18n } from '../i18n'
import modFoot from '../components/modFoot.vue'
import banner from '../assets/about/banner.png'
import about1 from '../assets/about/about1.png'
import about2 from '../assets/about/about2.png'
import about3 from '../assets/about/about3.png'
import about5 from '../assets/about/about5.png'
import about7 from '../assets/about/about7.png'
import productionLine from '../assets/production/production-line.svg'
import labelProcessing from '../assets/production/label-processing.svg'
import qualityWork from '../assets/production/quality-work.svg'
import equipment from '../assets/production/equipment.svg'
import certBluesign from '../assets/cert/bluesign.jpg'
import certOekoTex from '../assets/cert/oeko-tex.jpg'

const { t } = useI18n()

// 生产实景：4 张车间/机器照片（2×2 网格）
const productionList = [
  { img: productionLine, label: 'productionLine' },
  { img: labelProcessing, label: 'labelProcessing' },
  { img: qualityWork, label: 'qualityWork' },
  { img: equipment, label: 'equipment' }
]

const dvImgRef = ref(null)
const sel = ref(0)
// 企业证书：Bluesign 与 OEKO-TEX，各自对应专属介绍
const certList = ref([
  { img: certBluesign, nameKey: 'about.certBluesignName', descKey: 'about.certBluesignDesc' },
  { img: certOekoTex, nameKey: 'about.certOekoTexName', descKey: 'about.certOekoTexDesc' }
])

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

/* ============ 生产实景：2×2 网格展示车间/机器照片 ============ */
.aboutProduction { padding: 90px 120px 100px; }
.aboutProduction .prodHead { text-align: center; margin-bottom: 56px; }
.aboutProduction .prodHead p:nth-child(1) { font-size: 52px; font-weight: 700; color: #272727; letter-spacing: 2px; }
.aboutProduction .prodHead p:nth-child(2) { font-size: 20px; color: #8b8b8b; letter-spacing: 4px; margin-top: 14px; }
.aboutProduction .prodGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.aboutProduction .prodItem { text-align: center; }
.aboutProduction .prodImg {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .08);
}
.aboutProduction .prodLabel {
  margin-top: 18px;
  font-size: 22px;
  font-weight: 600;
  color: #272727;
  letter-spacing: 1px;
}

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
.aboutSix .dvText p:nth-child(3) { font-weight: 700; font-size: 40px; color: #fff; margin-top: 80px; }
.aboutSix .dvText p:nth-child(4) { font-size: 20px; color: rgba(255, 255, 255, .75); line-height: 30px; margin-top: 24px; }

.aboutFive { position: relative; padding: 0 120px; height: 800px; }
.aboutFive .back { width: 100%; height: auto; position: absolute; top: 0; left: 0; z-index: 1; }

/* aboutOne：about1.png 本身已含「关于永采」完整品牌介绍，直接全幅展示，不叠加文字 */
.aboutOne .back { width: 100%; height: 100%; object-fit: cover; object-position: center; }

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
  .aboutTwo p:nth-child(1) { font-size: 30px; line-height: 42px; padding-top: 0; }
  .aboutTwo p:nth-child(2) { font-size: 20px; line-height: 30px; padding-top: 10px; }
  .aboutTwo p:nth-child(3), .aboutTwo p:nth-child(4), .aboutTwo p:nth-child(5) { font-size: 13px; line-height: 22px; width: auto; padding-top: 14px; }
  .aboutThree p:nth-child(1) { font-size: 30px; line-height: 42px; padding-top: 0; }
  .aboutThree p:nth-child(2), .aboutThree p:nth-child(3) { font-size: 13px; line-height: 22px; width: auto; padding-top: 14px; }

  /* 生产实景：单列堆叠 */
  .aboutProduction { padding: 44px 20px 52px; }
  .aboutProduction .prodHead { margin-bottom: 28px; }
  .aboutProduction .prodHead p:nth-child(1) { font-size: 26px; }
  .aboutProduction .prodHead p:nth-child(2) { font-size: 14px; letter-spacing: 2px; margin-top: 8px; }
  .aboutProduction .prodGrid { grid-template-columns: 1fr; gap: 24px; }
  .aboutProduction .prodLabel { font-size: 16px; margin-top: 12px; }

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
  .aboutSix .dvText p:nth-child(3) { font-size: 18px; line-height: 26px; margin-top: 18px; }
  .aboutSix .dvText p:nth-child(4) { font-size: 13px; line-height: 22px; margin-top: 12px; }

  .aboutFive { height: auto; padding: 0; }
  .aboutFive .back { position: static; width: 100%; height: auto; }
}
</style>
