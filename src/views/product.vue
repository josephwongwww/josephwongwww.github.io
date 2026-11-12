<template>
  <div>
    <heads :navSel="2" />
    <div class="modBanner">
      <img :src="banner2" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="productOne">
        <p>{{ t('product.oneTitle') }}</p>
        <p>{{ t('product.oneDesc') }}</p>
        <img :src="product1" class="back widthFix" />
      </div>

      <div class="productTwo">
        <div class="dvOne flex-start">
          <div>
            <p>{{ t('product.twoTitle1') }}</p>
            <p>{{ t('product.twoTitle2') }}</p>
          </div>
        </div>
        <img :src="product2" class="back widthFix" />
      </div>

      <div class="productListBox">
        <!-- 外层纵向堆叠：原版套用的 dvList flex-end 是横向 flex，会把 18 个全宽区块挤成一行互相覆盖 -->
        <div class="stack">
          <div v-for="(item, idx) in products" :key="idx" class="productList">
            <div class="dvList flex-end">
              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
              </div>
            </div>
            <img :src="getImageUrl(item.img)" class="back widthFix" />
          </div>
        </div>
      </div>
    </div>

    <foots />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getImageUrl } from '../utils/api'
import { useI18n } from '../i18n'
import banner2 from '../assets/product/banner2.png'
import product1 from '../assets/product/product1.png'
import product2 from '../assets/product/product2.png'

const { t } = useI18n()

// 产品图片映射（图片路径不变，仅标题/文案随语言切换）
const imgMap = [
  'product/list1.png', 'product/list2.png', 'product/list3.png', 'product/list4.png',
  'product/list5.png', 'product/list6.png', 'product/list7.png', 'product/list8.png',
  'product/list9.png', 'product/list10.png', 'product/list11.png', 'product/list12.png',
  'product/list13.png', 'product/list14.png', 'product/list15.png', 'product/list16.png',
  'product/list17.png', 'product/list18.png'
]

const products = computed(() => {
  const items = t('product.items')
  return items.map((item, idx) => ({ ...item, img: imgMap[idx] }))
})
</script>

<style scoped>
.modBanner { width: 100%; position: relative; }
.modBanner img {
  width: 100%;
  height: clamp(420px, 68vh, 760px);
  object-fit: cover;
  object-position: bottom;
}

.productOne { position: relative; padding: 0 120px; height: 800px; }
.productOne p { position: absolute; z-index: 2; text-align: justify; color: #fff; }
.productOne p:nth-child(1) { width: 60px; font-size: 48px; line-height: 60px; font-weight: 700; top: 20%; left: 12%; }
.productOne p:nth-child(2) { width: 480px; font-size: 20px; line-height: 40px; bottom: 22%; left: 52%; }
.productOne .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }

.productTwo { position: relative; padding: 0 120px; height: 800px; }
.productTwo .dvOne { width: 100%; height: 100%; position: relative; z-index: 2; }
.productTwo .dvOne p { font-weight: 700; font-size: 60px; color: #fff; line-height: 60px; letter-spacing: 2px; text-align: center; }
.productTwo .dvOne p:nth-child(2) { margin-top: 15px; }
.productTwo .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }

.productListBox { position: relative; }
.productListBox .stack { display: flex; flex-direction: column; }
.productList { position: relative; padding: 0 120px; height: 740px; }
.productList .dvList { width: 100%; height: 100%; position: relative; z-index: 2; }
/* 文字衬底：半透明深色玻璃卡片，白字不再直接压在亮图上 */
.productList .dvList > div {
  background: rgba(20, 16, 46, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 44px 48px;
  border-radius: 16px;
  max-width: 660px;
}
.productList .dvList p { text-align: justify; color: #fff; }
.productList .dvList p:nth-child(1) { font-weight: 700; font-size: 50px; letter-spacing: 18px; text-align: center; }
.productList .dvList p:nth-child(2) { width: 540px; max-width: 100%; font-size: 20px; line-height: 30px; margin-top: 30px; }
.productList .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
/* 满屏吸附滚动：每个产品区块整屏展示，翻页式浏览 */
.modBanner, .productOne, .productTwo, .productList {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
#footBox { scroll-snap-align: end; }
@media (min-width: 1441px) {
  .modBanner img { height: 100vh; }
  .productOne, .productTwo, .productList { height: 100vh; min-height: 680px; }
  .productOne .back, .productTwo .back, .productList .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}

/* ===== 手机端（<768px，原生响应式，无 zoom）===== */
@media (max-width: 767px) {
  .modBanner img { height: 52vh; object-position: 10% bottom; }

  /* 首屏两块：文字改为常规流式，加暗色衬底保证白字可读 */
  .productOne, .productTwo { height: auto; min-height: 480px; padding: 48px 20px; }
  .productOne::before, .productTwo::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(20, 16, 46, .62), rgba(20, 16, 46, .3));
    z-index: 2;
  }
  .productOne p { position: relative; z-index: 2; }
  .productOne p:nth-child(1) { position: relative; z-index: 2; width: auto; font-size: 28px; line-height: 42px; top: auto; left: auto; }
  .productOne p:nth-child(2) { position: relative; z-index: 2; width: auto; font-size: 13px; line-height: 22px; bottom: auto; left: auto; margin-top: 20px; }
  .productTwo .dvOne { width: auto; }
  .productTwo .dvOne p { font-size: 28px; line-height: 40px; position: relative; z-index: 2; }
  .productTwo .dvOne p:nth-child(2) { margin-top: 10px; }

  /* 产品列表：图上文下的卡片流 */
  .productListBox .stack { display: block; }
  .productList { height: auto; padding: 28px 16px 40px; display: flex; flex-direction: column-reverse; }
  .productList .dvList { width: 100%; height: auto; position: static; }
  .productList .dvList > div {
    background: rgba(20, 16, 46, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 20px 22px;
    border-radius: 14px;
    max-width: none;
    margin: -34px 16px 0;
    position: relative;
    z-index: 2;
  }
  .productList .dvList p:nth-child(1) { font-size: 20px; letter-spacing: 2px; }
  .productList .dvList p:nth-child(2) { width: auto; font-size: 13px; line-height: 22px; margin-top: 12px; }
  .productList .back { position: static; width: 100%; height: 58vw; object-fit: cover; z-index: 1; }
}
</style>
