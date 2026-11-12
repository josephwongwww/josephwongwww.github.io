<template>
  <div>
    <heads :navSel="5" />
    <div class="modBanner">
      <img :src="banner" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="prolineOne">
        <div class="dvText">
          <p>我们的工厂</p>
          <p>我们的东莞厂房面积由4400平方米扩充至6600平方米。除增加现有生产线外，還新增了“高周波电压”、“注模”及“转动式的切割机”的生产线</p>
          <p>永釆生产线主要分为半自动和全自动机器，以应对产品的需要； 和生产条件的需要。 我们的工厂注重环境保护，并严格遵守人权，以加强适当和合法的合规性</p>
        </div>
        <img :src="proline1" class="back widthFix" />
      </div>

      <div class="prolineList">
        <img :src="proline2" class="back widthFix" />

        <div class="listNav">
          <div class="custom-slick-arrow" @click="scrollLeft">
            <LeftCircleIcon />
          </div>
          <div ref="imgListRef" class="imgList">
            <div v-for="(img, idx) in curCategory.imgList" :key="idx" class="img" @click="previewImg = getImageUrl(img)">
              <img :src="getImageUrl(img)" class="aspectFill" style="border-radius: 24px" width="420" height="320" />
            </div>
          </div>
          <div class="custom-slick-arrow" @click="scrollRight">
            <RightCircleIcon />
          </div>
        </div>

        <div class="dvName">{{ curCategory.name }}</div>
        <div class="dvBtns">
          <button class="dvPrev" @click="prevCategory">‹ 上一类</button>
          <button class="dvNext" @click="nextCategory">下一类 ›</button>
        </div>
      </div>
    </div>

    <foots />

    <!-- 简易图片预览 -->
    <div v-if="previewImg" class="wc-preview" @click="previewImg = ''">
      <img :src="previewImg" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getImageUrl } from '../utils/api'
import LeftCircleIcon from '../components/icons/LeftCircleIcon.vue'
import RightCircleIcon from '../components/icons/RightCircleIcon.vue'
import banner from '../assets/proline/banner.png'
import proline1 from '../assets/proline/proline1.png'
import proline2 from '../assets/proline/proline2.png'

const imgListRef = ref(null)
const previewImg = ref('')
const catIdx = ref(0)
const categories = ref([
  {
    name: '全自动丝网印刷',
    imgList: ['proline/banner.png', 'proline/proline1.png', 'proline/banner.png', 'proline/proline1.png']
  },
  {
    name: '镭射雕刻',
    imgList: ['proline/banner.png', 'proline/proline2.png', 'proline/banner.png', 'proline/proline2.png']
  }
])

const curCategory = computed(() => categories.value[catIdx.value])

function scrollLeft() {
  imgListRef.value.scrollLeft -= 430
}
function scrollRight() {
  imgListRef.value.scrollLeft += 430
}
function prevCategory() {
  catIdx.value = catIdx.value == 0 ? categories.value.length - 1 : catIdx.value - 1
}
function nextCategory() {
  catIdx.value = catIdx.value == categories.value.length - 1 ? 0 : catIdx.value + 1
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

.prolineOne { position: relative; padding: 0 120px; height: 800px; display: flex; align-items: center; }
.prolineOne .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
.prolineOne .dvText { position: relative; z-index: 2; max-width: 700px; }
.prolineOne .dvText p { color: #fff; }
.prolineOne .dvText p:nth-child(1) { font-weight: 700; font-size: 60px; line-height: 70px; letter-spacing: 4px; margin-bottom: 40px; }
.prolineOne .dvText p:nth-child(2) { font-size: 20px; line-height: 40px; }
.prolineOne .dvText p:nth-child(3) { font-size: 20px; line-height: 40px; margin-top: 30px; }

/* ============ 生产线滚动区：规整布局（弃用原版负边距 hack） ============ */
.prolineList {
  position: relative;
  padding: 0 120px;
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.prolineList .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }

.listNav { position: relative; z-index: 2; width: 100%; }
.imgList {
  display: flex;
  gap: 40px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 10px 0;
  width: 100%;
}
.imgList::-webkit-scrollbar { width: 0px !important; height: 0px !important; }
.imgList::-webkit-scrollbar-thumb { background-color: transparent !important; }
.imgList::-webkit-scrollbar-track { background-color: transparent !important; }
.imgList .img { flex: 0 0 auto; width: 420px; height: 320px; cursor: zoom-in; border-radius: 24px; box-shadow: 0 4px 9px 4px rgba(0, 0, 0, .25); }
.imgList .img img { width: 420px; height: 320px; border-radius: 24px; }

.custom-slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: .35;
  z-index: 20;
  cursor: pointer;
  transition: all .3s;
}
.custom-slick-arrow:first-child { left: -20px; }
.custom-slick-arrow:last-child { right: -20px; }
.custom-slick-arrow:hover { opacity: 1; }

.dvName { position: relative; z-index: 2; text-align: center; font-weight: 700; font-size: 48px; color: #fff; line-height: 60px; letter-spacing: 4px; margin-top: 40px; }

.dvBtns { position: relative; z-index: 2; display: flex; gap: 24px; margin-top: 28px; }
.dvPrev, .dvNext {
  padding: 10px 40px;
  font-size: 16px;
  color: #fff;
  background: rgba(255, 255, 255, .16);
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 30px;
  cursor: pointer;
}
.dvPrev:hover, .dvNext:hover { background: rgba(255, 255, 255, .3); }

/* 图片预览浮层 */
.wc-preview {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.wc-preview img { max-width: 90vw; max-height: 90vh; border-radius: 12px; }
/* 宽屏：深色区块背景全出血 */
@media (min-width: 1441px) {
  .prolineOne, .prolineList { height: calc(100vw / 1.8); }
  .prolineOne .back, .prolineList .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}

/* 宽屏：深色区块背景全出血 */
@media (min-width: 1441px) {
  .prolineOne, .prolineList { height: calc(100vw / 1.8); }
  .prolineOne .back, .prolineList .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}
</style>
