# 王有发 · UI 重构作品集

UI 重构方向个人作品集网站。视觉与交互沿用同一套设计系统（暗色 / 荧光青 / 1700px 版心），内容侧重点放在界面重做、还原度与引擎落地。

## 技术栈

- **Vite 5 + React 18**
- 纯手写 CSS（`src/styles/global.css` 设计系统 + `responsive.css` 四档断点）
- 字体：Space Grotesk（@fontsource 本地化，无外链）
- 动效：IntersectionObserver 渐入 + CSS 过渡，含 3.5s 兜底强制展开

## 目录结构

```
portfolio-ui/
├─ public/
│  ├─ favicon* / apple-touch-icon.png
│  └─ assets/
│     ├─ hero-reel.mp4          # Hero 背景 + MyDMC 项目视频
│     ├─ eldenring-demo.mp4     # 艾尔登 UI 复刻演示
│     ├─ eldenring-poster.jpg
│     ├─ pubgm/                 # 设置界面实机图 6 张
│     └─ activity/              # 活动界面 4 张
├─ src/
│  ├─ data/content.js           # ★ 全部文案与资源路径
│  ├─ hooks/useReveal.js
│  ├─ styles/{global,responsive}.css
│  └─ components/               # Navbar / Hero / About / Projects / Strengths / Contact
└─ vite.config.js
```

## 本地运行

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npm run preview
```

## 部署

GitHub Pages **项目页**部署在子路径 `/ui-portfolio/` 下，构建时必须带环境变量：

```bash
DEPLOY_TARGET=gh-pages npm run build
```

`vite.config.js` 会据此把 `base` 设为 `/ui-portfolio/`；`content.js` 里的资源路径统一通过 `asset()` 拼接 `import.meta.env.BASE_URL`，因此本地根路径与线上子路径都能正确加载。

`.github/workflows/deploy.yml` 已配好：push 到 `main` 自动构建并发布。

线上地址：`https://hyperion-0.github.io/ui-portfolio/`
