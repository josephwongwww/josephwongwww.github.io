<template>
  <div>
    <heads :navSel="4" />
    <div class="modBanner">
      <img :src="banner" class="widthFix" />
    </div>

    <div class="PubPageBox">
      <div class="contactOne flex-start">
        <div>
          <p>Hi 很高兴见到你!</p>
          <p>我们的产品遍及世界各地，我们的客户就是我们的合作伙伴，合作者和朋友。</p>
          <p>想看更多的案例，了解我们的产品吗？请拨打我们的电话，或联系邮箱。</p>
          <p>我们期待你们的到来，让我们可以证明，在质量、服务和准时方面的奉献精神！</p>
        </div>
        <img :src="contact1" class="back widthFix" />
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

      <modFoot />
    </div>

    <foots />
  </div>
</template>

<script setup>
import modFoot from '../components/modFoot.vue'
import banner from '../assets/contact/banner.png'
import contact1 from '../assets/contact/contact1.png'
</script>

<style scoped>
.modBanner { width: 100%; position: relative; }
.modBanner img {
  width: 100%;
  height: clamp(420px, 68vh, 760px);
  object-fit: cover;
  object-position: bottom;
}

.contactOne { position: relative; padding: 0 120px; height: 800px; }
.contactOne .back { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; }
.contactOne p { position: relative; z-index: 2; color: #fff; font-weight: 700; font-size: 20px; line-height: 50px; }
.contactOne p:nth-child(1) { font-weight: 700; font-size: 60px; line-height: 60px; }
.contactOne p:nth-child(2) { padding-top: 80px; }
.contactOne p:nth-child(4) { padding-top: 50px; }

/* 联系我们：弃用烙印水印图（原图 CONTACT WIN CHOICE 水印本身裁断不可读），
   改用取色自原图的 CSS 渐变背景 + DOM 标题（与首页一致） */
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
/* 宽屏：深色区块背景全出血 */
@media (min-width: 1441px) {
  .contactOne { height: calc(100vw / 1.8); }
  .contactOne .back { left: calc(50% - 50vw); width: 100vw; height: 100%; }
  .modSeven .back { left: calc(50% - 50vw); right: calc(50% - 50vw); }
}

/* ===== 手机端（<768px，原生响应式，无 zoom）===== */
@media (max-width: 767px) {
  .modBanner img { height: 52vh; object-position: 10% bottom; }
  .contactOne { height: auto; min-height: 460px; padding: 48px 20px; }
  .contactOne::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(20, 16, 46, .62), rgba(20, 16, 46, .3));
    z-index: 2;
  }
  .contactOne p { font-size: 13px; line-height: 26px; font-weight: 400; }
  .contactOne p:nth-child(1) { font-size: 28px; line-height: 40px; }
  .contactOne p:nth-child(2) { padding-top: 24px; }
  .contactOne p:nth-child(4) { padding-top: 18px; }

  .modSeven { padding: 48px 20px; }
  .modSeven .sevenHead p:nth-child(1) { font-size: 30px; }
  .modSeven .sevenHead p:nth-child(2) { font-size: 13px; margin-top: 8px; }
  .modSeven .listBox { flex-direction: column; margin-top: 36px; }
  .modSeven .listBox .list { padding: 22px 0; border-right: none; border-bottom: 1px solid rgba(255, 255, 255, .25); }
  .modSeven .listBox .list:last-child { border-bottom: none; }
  .modSeven .listBox .list h4 { font-size: 20px; line-height: 26px; }
  .modSeven .listBox .list p { font-size: 13px; line-height: 20px; margin-top: 12px; }
}
</style>
