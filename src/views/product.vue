<template>
  <div>
    <heads :navSel="2" />
    <div class="PubPageBox">
      <section id="catalog" class="productCatalog" aria-labelledby="catalog-title">
        <p class="eyebrow">WIN CHOICE / {{ t('nav.product') }}</p>
        <h1 id="catalog-title">{{ t('conversion.catalog') }}</h1>
        <p class="catalogIntro">{{ t('conversion.catalogDesc') }}</p>
        <div class="categoryFilters" role="group" :aria-label="t('nav.product')">
          <button v-for="category in categories" :key="category.id" :aria-pressed="selected === category.id" @click="selected = category.id">{{ category.label }}</button>
        </div>
        <p class="productCount" aria-live="polite">{{ filteredProducts.length }} {{ t('conversion.count') }}</p>
        <nav class="productDirectory" :aria-label="t('conversion.catalog')">
          <a v-for="item in filteredProducts" :key="item.id" :href="'#product-' + item.id">
            <span class="productNumber">{{ String(item.id + 1).padStart(2, '0') }}</span>
            <span>{{ item.title }}</span><span aria-hidden="true">↗</span>
          </a>
        </nav>
      </section>
      <div class="productListBox">
        <!-- 外层纵向堆叠：原版套用的 dvList flex-end 是横向 flex，会把 18 个全宽区块挤成一行互相覆盖 -->
        <div class="stack">
          <div v-for="item in filteredProducts" :key="item.id" :id="'product-' + item.id" class="productList">
            <div class="dvList flex-end">
              <div>
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <div class="productActions">
                  <router-link class="action primary" :to="{ path: '/contact', query: { product: item.id + 1 }, hash: '#inquiry' }">{{ t('conversion.ask') }}</router-link>
                  <a href="#catalog">{{ t('conversion.back') }}</a>
                </div>
              </div>
            </div>
            <img :src="getImageUrl(item.img)" :alt="item.title" loading="lazy" class="back widthFix" />
          </div>
        </div>
      </div>
    </div>

    <foots />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getImageUrl } from '../utils/api'
import { useI18n } from '../i18n'

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
  return items.map((item, idx) => ({ ...item, id: idx, img: imgMap[idx] }))
})
const selected = ref('all')
const categoryMembers = [[3, 4, 8, 15], [0, 2, 6, 7, 11, 13], [1, 12, 14, 17], [5, 9, 10, 16]]
const categories = computed(() => [{ id: 'all', label: t('conversion.all') }, ...t('conversion.categories').map((label, id) => ({ id, label }))])
const filteredProducts = computed(() => selected.value === 'all' ? products.value : products.value.filter(item => categoryMembers[selected.value].includes(item.id)))
</script>

<style scoped>
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
.productList .dvList h2 { color: #fff; font-weight: 700; font-size: 36px; line-height: 1.25; letter-spacing: 0; text-align: center; }
.productList .dvList > div > p { width: 540px; max-width: 100%; font-size: 20px; line-height: 30px; margin-top: 30px; }
.productList .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
/* 满屏吸附滚动：每个产品区块整屏展示，翻页式浏览 */
.productList {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
#footBox { scroll-snap-align: end; }
@media (min-width: 1441px) {
  .productList { height: 100vh; min-height: 680px; }
  .productList .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
}
@media (max-width: 767px) {
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
  .productList .dvList h2 { font-size: 20px; letter-spacing: 2px; }
  .productList .dvList > div > p { width: auto; font-size: 13px; line-height: 22px; margin-top: 12px; }
  .productList .back { position: static; width: 100%; height: 58vw; object-fit: cover; z-index: 1; }
}
</style>
