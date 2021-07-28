---
theme: default
background: '#FFF'
class: text-center
highlighter: shiki
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
title: Web Vitals
---

# Web Vitals

谷歌的新一代 Web 性能体验和质量指标

<a href="https://github.com/lanxuexing/web-vitails" target="_blank" alt="GitHub"
  class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---

# 什么是Web Vitails

> Web Vitals是Google的一项重大举措，旨在为质量信号提供统一的指导，这对于在Web上提供出色的用户体验来说很重要。
<br/>
> 网站的开发者需要了解自己的网站给用户带来的体验，但不一定要成为性能优化的专家。Web Vitals旨在简化流程，并帮助网站开发者聚焦在核心性能指标上，也称为Core Web Vitals。

<img filter="~ dark:invert" class="pt-10 w-100 m-auto" src="https://lh6.googleusercontent.com/i9iF8GqgQhXkh1MLRlGQjYRxy_WzXNWTOTvBl5b-HCiL8HTgCk-Qh7PINQ1ruv-q5qUiRNhlpzKMybGzO_nYiTVOxIJoFBxBLRMIPCbI4AIcKLmcMhmh08JWQpCtpJq-hltKhiFi" />

---

# 如何准确衡量网站的性能 <Marker class="text-purple-400">思考</Marker>

以用户为中心的性能指标，应该能回答以下四个问题

<br>

- **是否发生？** 导航是否成功启动？服务器是否有响应？
- **是否有用？** 是否已渲染可以与用户互动的足够内容？
- **是否有用？** 用户可以与页面交互，还是页面仍在忙于加载？
- **是否令人愉快？** 交互是否顺畅而自然，没有滞后和卡顿？

<style>
  strong {
    @apply text-green-500
  }
</style>

---

# 性能指标（Performance Metrics）

<div class="grid grid-cols-2 gap-x-4">

- **Load** - 当整个页面加载完成时（包括所有依赖资源，如样式表和图像）触发该事件

```ts
window.addEventListener('load', (event) => {
  console.log('页面已完全加载');
});
```

- **DOMContentLoaded** - HTML加载完成时（无需等待样式、图片和子框架加载完成）触发该事件

```ts
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM 完全加载和解析');
});
```

</div>

<img class="m-auto w-170" filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/42/d7/42c7b4924482fyy59b559054d5837ed7.png"/>

<style>
  strong {
    @apply text-green-500
  }
  img {
    margin-top: -90px;
    clip-path: inset(100px 50px 140px 60px);
  }
</style>

---

# 是否发生？<Marker class="text-rose-400">问题一</Marker>

当用户访问一个网站的时候，关心的第一个问题永远是“是否发生”——浏览器是否成功地把我的请求发送出去，而服务器是否已经知道并开始处理我的请求？

<div class="grid grid-cols-2 gap-x-4">

- **TTFB (Time to First Byte)**
  - `首字节到达的时间点`
- **FP (First Paint)**
  - `首次绘制，标记浏览器渲染任何在视觉上不同于导航前屏幕内容的时间点`
- **FCP (First Contentful Paint)**
  - `首次内容绘制，标记浏览器渲染来自DOM第一位内容的时间点，内容可能是文本、图像等元素`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/bc/0b/bc9cccb614756cd59e24f4baf35f920b.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>

---

# 是否有用？<Marker class="text-rose-400">问题二</Marker>

当用户确定自己的请求发生了后，就会开始关心第二个问题：“是否有用？”

<div class="grid grid-cols-2 gap-x-4">

- **FMP (First Meaningful Paint)**
  - `首次有效绘制，是指首次绘制对用户有用内容的时间点`
- **LCP (Largest Contentful Paint)**
  - `最大内容绘制时间，计算从页面开始加载到用户与页面发生交互（点击，滚动）这段时间内，最大元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变`
- **SI (Speed Index)**
  - `速度指标，填充页面内容的速度，取开始加载到最后完成渲染，每一时刻页面未完成度的积分`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/df/7e/dfdaf0555fd31ae467ddb700e2897f7e.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>

---

# 是否有用？<Marker class="text-rose-400">问题三</Marker>

在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”

<div class="grid grid-cols-2 gap-x-4">

- **Long Tasks**
  - `耗时任务。浏览器是单线程，所有任务会被添加到主线程的队列中逐个执行。如果有任务耗时过长，主线程就会被阻塞，其他任务就只能等待，包括那些由用户交互产生的任务，从而无法及时响应用户`
- **TTI (Time to Interactive)**
  - `可交互时间，用于标记页面已进行视觉渲染并能可靠响应用户输入的时间点`
- **TBT (Total Blocking Time)**
  - `总共阻塞时间，计算的是从 FCP 到 TTI 之间，主线程阻塞的总时间`
- **FID (First Input Delay)**
  - `首次输入延迟，指用户首次输入到页面响应的时间`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/bb/21/bb5yyd9fab93e2ff660a38685de67621.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>

---

# 是否令人愉快？<Marker class="text-rose-400">问题四</Marker>

在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”

<div class="grid grid-cols-2 gap-x-4">

- **CLS (Cumulative Layout Shift)**
  - `累计布局偏移。测量在页面的整个生命周期中发生的每个意外的样式移动所造成的布局偏移分数的总和`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/c0/1a/c0c492896796599a38731cd0390a3b1a.gif"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>

---
layout: center
class: text-center
---

# Core Web Vitals

核心性能指标

----

# Core Web Vitals

<div class="pt-12 flex justify-center">
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a href="https://web.dev/lcp/" target="_blank" rel="noopener">最大内容绘制</a>
    </p>
  </div>
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a href="https://web.dev/fid/" target="_blank" rel="noopener">首次输入延迟</a>
    </p>
  </div>
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a herf="https://web.dev/cls/" target="_blank" rel="noopener">累积布局偏移</a>
    </p>
  </div>
</div>

---
layout: center
class: text-center
---

# LCP (Largest Contentful Paint)

衡量加载体验 **·** 最大内容绘制

---

# LCP (Largest Contentful Paint) <MarkerCore />

最大内容绘制时间，用来衡量加载体验，Google要求LCP最好在页面首次开始加载后的2.5秒内发生

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **定义**
  - `视口内可见的最大图像或文本块的渲染时间，相对于页面首次开始加载的时间`
- **为什么是LCP？**
  - `Load、DOMContentLoaded 指标不友好，例如Skeleton骨架屏、Loading加载器`
  - `FMP、SI指标复杂，有的时候甚至是错的`
- **怎样才算好？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/elqsdYqQEefWJbUM2qMO.svg"/>

<div>

  - **LCP关注哪些元素？**
    - `<img>元素`
    - `<image>元素内的<svg>元素`
    - `<video>元素（仅仅指poster海报图）`
    - `通过 url() 函数加载背景图片的元素`
    - `包含文本节点或其他内联文本元素子级的块级元素`

  - **就这？**
    - `显然不止于此，这些元素只是目前LCP分数考虑的元素类型，之后随着研究的深入，会陆续进行更新`

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>

---

<div class="grid grid-cols-2 gap-x-4"><div>

# Rules
如何确定元素的大小

<div class="mt-10"></div>

### 图像
- 视口viewport内可见visible元素的大小
  > clip和overflow等将被忽略
- 缩小图像的大小以缩小显示的为准
- 拉伸后的图像以图像的原始尺寸为准


<div class="mt-10"></div>

### 文本

- 仅考虑其文本节点的大小
- 所有元素，均不考虑 **margin/padding/border** 样式


</div><div>

# Outputs
什么时候应该记录

<div class="mt-10"></div>

### API

- 网页分阶段加载，页面最大的元素可能会发生变化
- PerformanceEntry API 调度与记录
  > 浏览器在浏览器绘制第一帧后立即调度PerformanceEntry记录LCP，之后有最大元素出现则更新


<div class="mt-10"></div>

### 边界条件

- 当前是最大内容元素从视口中删除（或从DOM中删除），除非呈现更大的元素，否则原来将被保持
- 一旦用户与页面交互（通过点击、滚动或按键），浏览器将停止记录LCP

</div></div>

<style>
  h3 {
    @apply text-green-500 !opacity-100
  }
</style>

---

<div class="grid grid-cols-2 gap-x-4"><div>

# 案例一

### 新内容被添加到 DOM 中并且改变了最大的元素

<img class="w-100 mb-4 mt-4" src="https://web-dev.imgix.net/image/admin/bsBm8poY1uQbq7mNvVJm.png"/>

### 布局更改并且以前最大的内容从视口中删除

<img class="w-100 mt-4" src="https://web-dev.imgix.net/image/admin/xAvLL1u2KFRaqoZZiI71.png"/>

</div><div>

# 案例二

### IG 徽标加载早，即使其他内容逐渐显示，它仍然是最大的元素

<img class="w-100 mb-4 mt-4" src="https://web-dev.imgix.net/image/admin/uJAGswhXK3bE6Vs4I5bP.png"/>

### 最大的元素是一段文本从一开始就出现且贯穿始终

<img class="w-100 mt-4" src="https://web-dev.imgix.net/image/admin/e0O2woQjZJ92aYlPOJzT.png"/>

</div></div>

<style>
  h3 {
    @apply text-amber-500 !opacity-100
  }
</style>

---

# 在 JavaScript 中如何测量 LCP ?

Largest Contentful Paint API

<div class="grid grid-cols-2 gap-x-4">

```html
<!-- 
  API与指标之间的差异：
    1. Tab选项卡
    2. 浏览器的前进和后退
    3. iframe
    4. ...
 -->
<img src="large_image.jpg">
<p id='large-paragraph'>This is large body of text.</p>
...
<script>
// 创建性能观察器
const observer = new PerformanceObserver((entryList) => {
  let perfEntries = entryList.getEntries();
  let lastEntry = perfEntries[perfEntries.length - 1];
  // 处理相关指标信息
});
observer.observe({entryTypes: ['largest-contentful-paint']});
</script>
```

```html
<!-- 最大元素与最重要有差异？自定义指标 -->
<img elementtiming="hero-image" />
<p elementtiming="important-paragraph">This is text I care about.</p>
...
<script>
// 捕获错误，因为某些浏览器在使用新的 `type` 选项时会抛出错误
try {
  // 创建性能观察器
  const po = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // 打印记录条目和所有相关的详细信息
      console.log(entry.toJSON());
    }
  });
  // 开始监听要调度的 `element` 条目
  po.observe({type: 'element', buffered: true});
} catch (e) {
  // 如果浏览器不支持此 API，则什么也不做
}
</script>
```

</div>

---
layout: center
class: text-center
---

# Optimize LCP（Largest Contentful Paint）
优化最大的内容绘制

---

# 如何优化 LCP ？

<div class="grid grid-cols-2 gap-x-4 gap-y-4">

### 影响 LCP 的因素

### 优化 LCP 的建议

<v-clicks at="1">

- 服务器响应速度慢
- JavaScript 和 CSS 阻塞渲染
- 资源加载时间
- 客户端渲染

</v-clicks>

<v-clicks at="5">

- 应用 PRPL 即时加载
- 优化关键渲染路径
- 优化 CSS
- 优化 Image
- 优化 Web Font
- 优化 JavaScript
- 使用 Gzip 和 Brotli 压缩页面资源，降低传输时间
- 使用 service worker 缓存资源

</v-clicks>

</div>

<style>
  h3 {
    @apply text-green-500 !opacity-100
  }
</style>

---
clicks: 2
---

# Optimize CSS <Marker class="text-orange-400">技巧一</Marker>

```ts
// Minify CSS Plugin
npm install --save-dev optimize-css-assets-webpack-plugin
```

```html {all|7|all}
<!-- 使用媒体查询优化 CSS 背景图像 -->
<style>
  body {
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat; background-size: cover;
    background-image: url(images/background-desktop.jpg); // 这一行可以使用 `@media` 来适配不同屏幕
  }
  // 手机
  @media (max-width: 480px) {
    body { background-image: url(images/background-mobile.jpg); }
  }
  // 平板
  @media (min-width: 481px) and (max-width: 1024px) {
    body { background-image: url(images/background-tablet.jpg); }
  }
  // PC
  @media (min-width: 1025px) {
    body { background-image: url(images/background-desktop.jpg); }
  }
</style>
```

<arrow v-click="1" v-show="2" x1="400" y1="420" x2="230" y2="300" color="#564" width="3" arrowSize="1" />

---

# Optimize CSS <Marker class="text-orange-400">技巧二</Marker>

```html
<!-- 关键渲染路径：找出渲染首屏的最小 CSS 集合（Critical CSS），并把它们写到 <head> 部分，从而让浏览器接收到 HTML 文件后就尽快渲染出页面 -->
<head>
  <meta charset="UTF-8">
  <!-- 提取（Extract）关键CSS，内联 -->
  <style type="text/css">
    .accordion-btn {background-color: #ADD8E6;color: #444;cursor: pointer;padding: 18px;width: 100%;border: none;text-align: left;outline: none;font-size: 15px;transition: 0.4s;}.container {padding: 0 18px;display: none;background-color: white;overflow: hidden;}h1 {word-spacing: 5px;color: blue;font-weight: bold;text-align: center;}
  </style>

  <!-- 非关键CSS异步外链（增加 rel="preload" 属性预加载） -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

<v-click>

<div class="mt-4"></div>

- 提取、压缩、内联首屏CSS

```ts
npm i -D critical // 自动检测，可配置，从html中提取critical css，并将critical-path内联到html中
npm i --save-dev html-critical-webpack-plugin  // webpack plugin
npm install criticalcss // 支持 `cli`，对 `@font-face` 支持更友好和精确
```

</v-click>

<v-click>

- 站点或应用程序具有大量动态注入 DOM 的样式（**内部使用puppeteer**）

```ts
npm i -D penthouse // 关键路径css生成器，`Angular Build Prod` 选项默认是 `extractCss` 为 true (提取到独立的文件中，方便缓存)
```

</v-click>

<style>
  strong {
    @apply text-green-500;
  }
</style>

---

# Optimize Images <Marker class="text-orange-400">技巧一</Marker>

- 图片压缩

```sh
// 使用Imagemin压缩图片，支持 `cli` 和 `npm`
$ imagemin images/* --out-dir=images // 要压缩 `images/` 目录中的图像并将它们保存到同一目录（覆盖原图）

$ npm i imagemin-webpack-plugin -D // webpack plugin
```

<div class="mt-4"></div>

- 选择合适的图片格式

 图片格式 | 透明度 | 动画 | 浏览器支持
 ---|---|---|---
 PNG  | Yes | No  | All
 JPEG | No  | No  | All
 WebP | Yes | Yes | 现代浏览器

<div class="mt-4"></div>

> WebP格式的图像比J PEG 和 PNG 图像小 25 ~ 35%，可以显著提升页面加载性能

<div class="mt-4"></div>

- 使用CDN

<style>
  ul li {
    @apply text-green-500;
  }
</style>


---

# Optimize Images <Marker class="text-orange-400">技巧二</Marker>

- 用视频替换 GIF 动画以加快页面加载速度

```ts
// 使用 FFmpeg 将 GIF 转换为 MP4 视频
ffmpeg -i my-animation.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p my-animation.mp4

// 使用 FFmpeg 将 GIF 转换为 WebM 视频
ffmpeg -i my-animation.gif -c vp9 -b:v 0 -crf 41 my-animation.webm

// GIF动画三大特征：1.自动播放  2. 连续循环 3. 静音
<video autoplay loop muted playsinline>
  <source src="my-animation.webm" type="video/webm">
  <source src="my-animation.mp4" type="video/mp4">
</video>
```

<div class="mt-4"></div>

- 选择合适的图像尺寸

```ts
// 使用 ImageMagick 调整图像大小（具有创建、编辑、合成和转换功能，支持200+图像格式）
convert flower.jpg -resize 25% flower_small.jpg // 将图像大小调整为原始大小的 25%

# macOS/Linux
convert flower.jpg -resize 200x100 flower_small.jpg // 缩放图像以适应 “200px 宽 x 100px 高”
```

<style>
  ul li {
    @apply text-green-500;
  }
</style>

---
layout: center
---

# 以上优化，没有听懂？还有没其他优化点？

---
layout: center
class: text-center
---

# Optimize Largest Contentful Paint（LCP）

<Youtube id="AQqFZ5t8uNc?start=1073" width="800" height="450"/>

---
layout: center
class: text-center
---

# FID (First Input Delay)

衡量页面交互性 **·** 首次输入延迟

---

# FID (First Input Delay) <MarkerCore />

首次输入延迟，首次输入延迟，用于记录用户首次与页面交互时响应的延迟，Google要求FID最好在100ms以内

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **定义**
  - `从用户首次与页面进行交互（单击链接、按钮、输入框等）到浏览器实际上能够响应该交互之间的时间`
- **为什么是FID？**
  - `使用者的第一次互动体验印象相当重要`
  - `网页最大的互动性问题通常发生在一开始载入时`
  - `页面载入后的二次延迟有其他专门的改善解决建议`
- **怎样才算好？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eXyvkqRHQZ5iG38Axh1Z.svg"/>

<div>

  - **什么才是 first input ？**
    - `只关注单次离散事件，如：clicks, taps, 和 key presses`
    - `不关注连续事件，如：scrolling 和 zooming`

  - **RAIL性能模型**
    - <img filter="~ dark:invert" class="w-200" src="https://web-dev.imgix.net/image/admin/uc1IWVOW2wEhIY6z4KjJ.png">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>

---
layout: center
class: text-center
---

# CLS (Cumulative Layout Shift)

衡量视觉稳定性 **·** 累积布局偏移

---
name: Web-Vitails
layout: center
---

<div class="grid grid-cols-[3fr,2fr] gap-4">
  <div class="text-center pb-4">
    <div class="my-auto">
      <img class="h-20 inline-block rounded-xl" src="https://lh3.googleusercontent.com/9K-n57PrCZrkKjvP1B68H8qnGTfU6Y_XQq71uTGqVDgkiHdxeYYgioFkNv8sERCh6V-03Su3-asYsopDUiLyFIIG=w128-h128-e365-rj-sc0x00ffffff">
      <p>Web-Vitals</p>
      <div class="opacity-50 mb-2 text-sm">
        Essential metrics for a healthy site
      </div>
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/web-vitals" target="__blank">
        <img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/web-vitals?color=a1b858&label=" alt="NPM version">
      </a>
      <a class="!border-none" href="https://www.npmjs.com/package/web-vitals" target="__blank">
        <img class="h-4 inline mx-0.5" alt="NPM Downloads" src="https://img.shields.io/npm/dm/web-vitals?color=50a36f&label=">
      </a>
      <a class="!border-none" href="https://web.dev/vitals" target="__blank">
        <img class="h-4 inline mx-0.5" src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=1e8a7a" alt="Docs & Demos">
      </a>
      <img class="h-4 inline mx-0.5" alt="Function Count" src="https://img.shields.io/badge/-~1k%20tiny-13708a">
      <br>
      <a class="!border-none" href="https://github.com/GoogleChrome/web-vitals" target="__blank">
        <img class="mt-2 h-4 inline mx-0.5" alt="GitHub stars" src="https://img.shields.io/github/stars/GoogleChrome/web-vitals?style=social">
      </a>
    </div>
  </div>
  <div class="border-l border-gray-400 border-opacity-25 !all:leading-12 !all:list-none my-auto">

  - 轻量 体积～1k
  - Tree-shakeable ESM
  - Supports any JavaScript project
  - CDN 兼容

  </div>
</div>


---

<Tweet id="1406831784701136902" scale="0.65" />

---
layout: center
class: text-center
---

# 需要PPT原稿？

[GitHub Repo](https://github.com/lanxuexing/web-vitails)
