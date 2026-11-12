<template>
  <div class="modFoot">
    <p><span>Win Choice</span><span>Industries ltd</span></p>
    <p><span>(86) 180 4694 3817</span><span>julian@win-choice.com</span></p>
    <p>永采實業有限公司</p>
    <img src="../assets/index/img9.png" class="back" />
  </div>
</template>

<style scoped>
.modFoot { position: relative; height: clamp(360px, 46vh, 560px); overflow: hidden; }
.modFoot .back { width: 100%; height: 100%; object-fit: cover; }
.modFoot p { position: absolute; z-index: 1; color: #fff; }
.modFoot p:nth-child(1) { top: 8%; left: 8%; }
.modFoot p:nth-child(1) span { font-size: 56px; font-weight: 700; line-height: 72px; display: block; }
.modFoot p:nth-child(2) { bottom: 10%; left: 8%; }
.modFoot p:nth-child(2) span { font-weight: 700; font-size: 30px; line-height: 56px; display: block; }
.modFoot p:nth-child(3) { font-weight: 700; font-size: 26px; line-height: 40px; writing-mode: vertical-rl; bottom: 6%; left: 52.2%; }

/* ===== 手机端 ===== */
@media (max-width: 767px) {
  .modFoot { height: 280px; }
  .modFoot p:nth-child(1) { top: 12%; left: 20px; }
  .modFoot p:nth-child(1) span { font-size: 26px; line-height: 34px; }
  .modFoot p:nth-child(2) { bottom: 14%; left: 20px; }
  .modFoot p:nth-child(2) span { font-size: 15px; line-height: 26px; }
  .modFoot p:nth-child(3) { writing-mode: horizontal-tb; font-size: 15px; line-height: 24px; bottom: 14%; left: auto; right: 20px; }
}
</style>
