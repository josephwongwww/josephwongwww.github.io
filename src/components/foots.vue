<template>
  <div id="footBox">
    <div class="PubPageBox">
      <div class="footBox flex-between">
        <div class="left">
          <div class="dvOne">
            <p>即刻联系</p>
            <p>定制独一无二的产品</p>
            <p>(86) 180 4694 3817</p>
            <p>julian@win-choice.com</p>
          </div>
          <div class="dvTwo flex-start">
            <h4><img src="../assets/logo2.png" class="footLogo" /></h4>
            <p>东莞市桥头镇桥东路南街66号，二栋厂房，二楼及三楼</p>
          </div>
        </div>
        <div class="right">
          <p @click="jumpUrl('index')">首页</p>
          <p @click="jumpUrl('product')">产品中心</p>
          <p @click="jumpUrl('about')">关于我们</p>
          <p @click="jumpUrl('contact')">联系我们</p>
          <p @click="jumpUrl('proline')">生产线展示</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { jumpUrl } from '../utils/api'
</script>

<style scoped>
/* 页脚整改：原版 60-70px 的联系方式字号过于夸张，收敛为正常层级 */
#footBox { width: 100%; background: linear-gradient(to top, #332a5f, #6a57c5); }
#footBox .PubPageBox { padding: 70px 100px; }
#footBox .footBox { border-bottom: 2px solid #ffffff; align-items: end; }
#footBox .footBox .left .dvOne p { color: #fff; font-weight: 700; }
#footBox .footBox .left .dvOne p:nth-child(1) { font-size: 44px; line-height: 60px; letter-spacing: 1px; }
#footBox .footBox .left .dvOne p:nth-child(2) { font-size: 44px; line-height: 60px; letter-spacing: 1px; }
#footBox .footBox .left .dvOne p:nth-child(3) { font-size: 34px; line-height: 48px; margin-top: 40px; }
#footBox .footBox .left .dvOne p:nth-child(4) { font-size: 34px; line-height: 48px; }
#footBox .footBox .left .dvTwo { margin-top: 46px; }
#footBox .footBox .left .dvTwo h4 { padding: 20px 24px 20px 0; border-right: 2px solid #ffffff; }
#footBox .footBox .left .dvTwo h4 img.footLogo { height: 44px; width: auto; display: block; }
#footBox .footBox .left .dvTwo p {
  margin-left: 24px;
  font-size: 18px;
  color: #fff;
  line-height: 28px;
  letter-spacing: 1px;
  width: 420px;
}
#footBox .footBox .right { border-left: 2px solid #ffffff; padding: 24px 40px; }
#footBox .footBox .right p {
  color: rgba(255, 255, 255, .8);
  font-weight: 700;
  font-size: 22px;
  line-height: 56px;
  letter-spacing: 3px;
  text-align: center;
  cursor: pointer;
}
#footBox .footBox .right p:hover { color: #fff; }
</style>
