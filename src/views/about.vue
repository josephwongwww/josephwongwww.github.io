<template>
  <div>
    <heads :navSel="3" />
    <div class="modBanner">
      <img :src="banner" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="aboutOne">
        <p>热转印烫画</p>
        <p>热转印烫画是一种独特的印刷技术，结合了热转印和烫画两种工艺的特点,将图案印刷在特殊的转印载体上，通过高温高压的方式将图案转印到衣物或其他布料上，形成持久且色彩鲜艳的装饰效果。</p>
        <img :src="about1" class="back widthFix" />
      </div>

      <div class="aboutTwo">
        <p>永釆</p>
        <p>是一家绿色环保的制造公司</p>
        <p>作为一家环保型公司，永釆结合了多个方面来减少对环境的影响并最大限度地减少浪费。</p>
        <p>永釆更是蓝标 (Bluesign) 系统合作伙伴。 我们的目标是不断提高我们的环境绩效，并专注于可持续发展的未来。</p>
        <p>此外，我们亦承担社会责任，包括在环境方面。 例如污水处理系统 和 创新产品以解决环境问题。</p>
        <img :src="about2" class="back widthFix" />
      </div>

      <div class="aboutThree">
        <p>环保系统</p>
        <p>永釆建立了我们自己的污水处理系统和污水处理池。 工业废水经过过滤、沉淀，转化为清水循环使用。 减少用水量，减少污染。</p>
        <p>除了污水处理系统，我们还有自己的工业空气净化系统，其工作原理是将室内环境中受污染的空气吸入过滤系统，使空气通过一系列旨在有效去除所有有害颗粒的介质，然后将其释放 。</p>
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
          <p>企业证书</p>
          <p>Enterprise Certificate</p>
          <p>永釆更是Bluesign系统合作伙伴。并专注于可持续发展的未来。</p>
          <p>OEKO-TEX®使得永釆能够通过负责任的决定，保护我们的地球。</p>
          <p>永釆和“永采实业”签订制造协议</p>
        </div>
        <div v-else class="dvText">
          <p>企业证书</p>
          <p>Enterprise Certificate</p>
          <p>永釆和“永采实业”签订制造协议</p>
          <p>服务类商标注册证</p>
          <p>获取专利的魔金</p>
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
import modFoot from '../components/modFoot.vue'
import banner from '../assets/about/banner.png'
import about1 from '../assets/about/about1.png'
import about2 from '../assets/about/about2.png'
import about3 from '../assets/about/about3.png'
import about5 from '../assets/about/about5.png'
import about7 from '../assets/about/about7.png'

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
/* 宽屏：深色区块背景全出血，与 banner 衔接 */
@media (min-width: 1441px) {
  .aboutOne, .aboutTwo, .aboutThree, .aboutSix, .aboutFive { height: calc(100vw / 1.8); }
  .aboutOne .back, .aboutTwo .back, .aboutThree .back,
  .aboutSix .back, .aboutFive .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}

/* 宽屏：深色区块背景全出血，与 banner 衔接 */
@media (min-width: 1441px) {
  .aboutOne, .aboutTwo, .aboutThree, .aboutSix, .aboutFive { height: calc(100vw / 1.8); }
  .aboutOne .back, .aboutTwo .back, .aboutThree .back,
  .aboutSix .back, .aboutFive .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}
</style>
