# winchoice 复刻项目（Vue3 + Vite）

基于 http://winchoice.cc/ 的复刻，并做了设计整改（v2）。

## 运行

```bash
npm install
npm run dev     # 开发：http://localhost:5173
npm run build    # 构建：产出 dist/
```

## 技术要点

- **Vue 3 + Vue Router 4（history 模式）**，5 个路由：`/`（首页）、`/product`、`/about`、`/contact`、`/proline`
- **缩放适配（v2 改良）**：1440px 设计稿；窄屏按 `zoom: innerWidth/1440` 缩小适配，**宽屏封顶 1 倍不再放大**（原站在 1920 屏会放大 1.33 倍导致 banner 吃满全屏）
- **宽屏（≥1441px）背景全出血**：深色区块高度 `calc(100vw/1.8)` 等比扩展，背景图完整铺满无裁切，文字仍居中 1440 容器
- **所有 banner 限高** `clamp(420px, 68vh, 760px)` + `object-fit: cover`，页面标题烙印用 `object-position: bottom` 保住
- 自研轻量轮播（替代原站 ant-design-vue Carousel）、图片点击预览（替代 a-image preview）
- 原站的 ant-design-vue / Element Plus 依赖已剔除，仅保留 Vue 全家桶

## v2 设计整改清单（抛弃原站不合理设计）

1. zoom 封顶 1：宽屏不再"手机端放大"感
2. banner 全部限高 68vh + cover 裁切
3. 首页轮播第二张换用 banner2（原站两张是同一张图）
4. banner1 图内烙印的假 UI 元素（01/03、Scroll Down、NEXT、白线）已通过裁切原图清除
5. modOne 箭头收回区块内（原版挂在区块外 -100px）
6. modTwo 改规整三列网格（原版高低错落拼贴 + 悬浮大箭头）
7. modFour 去掉 -200px margin hack
8. 页脚 70px 邮箱/电话 → 34px 正常字号
9. proline 滚动区去掉 -200/-220px 负边距 hack，改结构化布局；分类按钮并排
10. 导航内容对齐 1440 内容容器（宽屏不再拉满全屏）
11. 返回顶部按钮改视口右下角固定（避免与页脚菜单重叠）
12. 解锁 html/body 的 100vh 高度限制

## 目录结构

```
src/
├── main.js            # 入口 + 全局组件注册（heads/foots/mytag）
├── App.vue            # zoom 缩放 + 返回顶部按钮
├── router/index.js    # 路由（含 /index 别名，与原站一致）
├── utils/api.js       # getImageUrl（import.meta.glob 映射，与原站机制一致）
├── style/global.css   # 全局样式（原站 index-CTb_w66K.css 还原）
├── components/
│   ├── heads.vue      # 顶部导航（logo2 + 5 项菜单）
│   ├── foots.vue      # 紫色渐变页脚
│   ├── modFoot.vue    # 页面底部 banner（Win Choice Industries）
│   ├── mytag.vue      # 高度占位组件
│   ├── wcCarousel.vue # 轻量轮播
│   └── icons/         # 圆形箭头图标（模拟 antd 图标）
├── views/
│   ├── index.vue      # 首页：轮播 + modOne~modEight
│   ├── product.vue    # 产品中心：18 个热转印产品
│   ├── about.vue      # 关于我们：环保介绍 + 证书滚动展示
│   ├── contact.vue    # 联系我们：三地办事处
│   └── proline.vue    # 生产线展示：工厂 + 横向滚动设备图
└── assets/            # 54 张图片（按原站源码路径组织）
```

## 复刻对照说明

| 原站资源 | 本项目 |
|---------|--------|
| `index-BEw_i8De.js` | `src/main.js` + `App.vue` + 全局组件 |
| `index-BaspL7pk.js` | `src/views/index.vue` |
| `product-ChRiDXBC.js` | `src/views/product.vue` |
| `about-BNVKVKat.js` | `src/views/about.vue` |
| `contact-O7MGoHbC.js` | `src/views/contact.vue` |
| `proline-BxiT-Fpf.js` | `src/views/proline.vue` |
| `index-CTb_w66K.css` | `src/style/global.css` |
| 各页面 CSS 分块 | 各 view 内 scoped style（1:1 还原，去掉 data-v） |
| `assets/` hash 命名图片 | `src/assets/` 按源码路径命名 |

原始抓取文件保留在根目录 `assets/`（带 hash 命名）及 `资源清单.md` 供对照。

## 已知差异（待确认）

1. 首页轮播两页 slide 原站用的是同一张 banner1（原代码如此，已照搬）
2. 首页轮播的切换动画为横向滑动；原站 antd Carousel 默认同款效果
3. 原站导航有隐藏的中英文切换（v-show:false），已按原样省略
4. aboutOne 区块文字在原站被背景图覆盖（无样式规则），已 1:1 保留该行为
