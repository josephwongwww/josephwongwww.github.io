<template>
  <div>
    <heads :navSel="2" />
    <div class="modBanner">
      <img :src="banner2" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="productOne">
        <p>热转印烫画</p>
        <p>热转印烫画是一种独特的印刷技术，结合了热转印和烫画两种工艺的特点,将图案印刷在特殊的转印载体上，通过高温高压的方式将图案转印到衣物或其他布料上，形成持久且色彩鲜艳的装饰效果。</p>
        <img :src="product1" class="back widthFix" />
      </div>

      <div class="productTwo">
        <div class="dvOne flex-start">
          <div>
            <p>获取专利的</p>
            <p>-魔金-</p>
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
import { getImageUrl } from '../utils/api'
import banner2 from '../assets/product/banner2.png'
import product1 from '../assets/product/product1.png'
import product2 from '../assets/product/product2.png'

const products = [
  { title: '镭射热转印', content: '镭射热转印是一种特殊的热转印烫画工艺，它的表面具有镭射效果。这种镭射效果是通过镭射全息加工而成的炫彩效果，使得烫画图案在视觉上呈现出独特的光泽和色彩变化。其特点在于其图案色彩鲜艳、图像逼真，并且表面涂有一层炫彩效果，增加了图案的吸引力和立体感。', img: 'product/list1.png' },
  { title: '反光热转印', content: '反光热转印是一种特殊的热转印工艺，它结合了反光材料与热熔热粘合技术。反光热转印膜本身并不发光，而是在夜晚被光源照射的情况下，形成反光效果。反光热转印还具有手感柔软、颜色纯正、遮盖力强、加工快捷、环保等特点', img: 'product/list2.png' },
  { title: 'UV光变热转印', content: 'UV光变热转印是一种特殊的热转印工艺，它结合了光变材料和热转印技术。感光变色材料经阳光/紫外线照射后会产生颜色变化，当失去阳光/紫外线后会还原回原本的颜色。采用特殊光变油墨与进口聚氨酯搭配调制而成，在正常光源下只能呈现光变的自身颜色，当遇到紫外线光时，光变将变成无色透明状，呈现出第二层色彩。', img: 'product/list3.png' },
  { title: '电压热转印', content: '这是一种通过电压加热将图案转印到衣物或其他材质上的装饰技术,利用热转印的原理，通过专用的电压烫画机施加一定的电压和温度，使转印纸上的图案通过升华作用转移到承印物上，从而实现图案的永久固定。', img: 'product/list4.png' },
  { title: '普通热转印', content: '普通热转印是一项特殊的印刷工艺，转印膜印刷采用网点印刷的方式，将图案预先印在薄膜表面。转印加工则通过热转印机一次加工（加热加压）将转印膜上精美的图案转印在产品表面，成型后油墨层与产品表面融为一体，逼真漂亮，大大提高了产品的档次。', img: 'product/list5.png' },
  { title: '布底章热转印', content: '这是一种特殊的热转印工艺，它结合了布质底材和热转印技术，创造出独特且富有质感的图案效果。布底章热转印以布料作为底材，通常选择质地柔软、耐用的材料，如棉、麻、涤纶等，以确保热转印后的图案具有稳定的形态和良好的手感。', img: 'product/list6.png' },
  { title: '闪箔热转印', content: '利用独特的材料和技术，在衣物或其他材质上呈现出闪亮如箔的效果。通过在图案表面添加一层薄薄的闪光材料，使得图案在光线的照射下能够发出璀璨夺目的光芒，犹如覆盖了一层闪亮的箔片。', img: 'product/list7.png' },
  { title: '魔金幻彩热转印', content: '结合了魔金与幻彩，带来了令人惊艳的视觉体验。热转印部分通过特殊工艺，使图案呈现出金色或银色的质感，闪烁着金属般的光泽，而幻彩热转印部分则运用反光和彩虹光效果，使得图案在不同光线的照射下能够发出绚丽多彩的光芒。', img: 'product/list8.png' },
  { title: '哑面热转印', content: '哑面热转印特点在于烫画后的表面呈现出柔和且亚光的效果。使用特殊的热转印纸和热转印机，通过高温和压力的作用，将图案或文字转印到衣物或其他材质上,使其具有色彩柔和自然、哑光效果明显的特点，能够为衣物增添一份独特的质感和风格。', img: 'product/list9.png' },
  { title: '牙刷效果硅胶印', content: '牙刷效果硅胶印，是一种新型的印花工艺。这种工艺主要使用照相效果的印花，结合高精度的网版混合印刷技术，生产出的图像精致，手感柔软爽滑，不会刺伤皮肤。在制造过程中，通过立体烫标技术，在手工丝网印中一遍遍加油墨，使得图案呈现出立体的效果。', img: 'product/list10.png' },
  { title: '注模硅胶热转印', content: '利用硅胶材料通过注模的方式制作出具有立体感和柔软触感的图案或文字，然后将其烫印在衣物或其他材质上。这种热转印工艺结合了硅胶的柔韧性和热转印技术的便捷性，使得图案在衣物上呈现出独特的立体效果和质感。', img: 'product/list11.png' },
  { title: '幻彩热转印', content: '幻彩热转印是一种特殊的热转印工艺，它结合了反光效果和彩虹光效果，使图案在灯光或阳光的照射下能够发出璀璨华丽的光芒。', img: 'product/list12.png' },
  { title: '厚板反光热转印', content: '厚板反光热转印是一种特殊的热转印技术，它采用特殊的反光涂料和较厚的材料制作而成。这种热转印的特点包括图案厚实、立体感强、无胶水边、水洗牢度好以及耐日晒。', img: 'product/list13.png' },
  { title: '温变热转印', content: '温变热转印是一种特殊的热转印工艺，其特点在于能够根据温度的变化展现出不同的颜色效果。在低温时，呈现特定的温变颜色，当温度高于一定阈值，温变色即变为透明，展现出第二层色彩。', img: 'product/list14.png' },
  { title: '夜光热转印', content: '夜光热转印是一种采用蓄光型自发光原理的丝网印花技术。它使用夜光粉作为材料，这种材料在吸收光线后，可以在黑暗或光线很弱的环境下发出柔光，但发光时间有一定的限制。夜光热转印可以单独运用，也可以结合其他专色热转印一起表达。', img: 'product/list15.png' },
  { title: '光面热转印', content: '其特点在于热转印后的表面呈现出光滑且富有光泽的效果,使用特殊的热转印纸和热转印机，通过高温和压力的作用，将图案或文字转印到衣物或其他材质上,使其具有色彩鲜艳、图案清晰、光泽度高等特点，能够为衣物增添一份独特的光彩和质感。', img: 'product/list16.png' },
  { title: '普通硅胶热转印', content: '普通硅胶热转印是一种利用热转印技术将图案、文字等印刷到硅胶材料表面的工艺。其原理是通过热压将带有图案的硅胶热转印膜与承印物紧密贴合，在一定温度和压力下，使硅胶层受热熔化，然后借助压力将图案从热转印膜转移到承印物上。', img: 'product/list17.png' },
  { title: '超级幻彩反光热转印', content: '超级幻彩反光热转印是一种特殊的热转印技术，该技术通过特定的热转印设备将图案、文字或其他图像从热转印纸上转移到目标材料上，超级幻彩反光热转印能够在目标材料上形成色彩鲜艳、反光效果显著的图案或图像。', img: 'product/list18.png' }
]
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
