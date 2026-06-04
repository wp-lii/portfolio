# 💼 Lily Portfolio

一個使用 Nuxt 4 和 Vue 3 構建的現代個人作品集網站。

## 🎯 項目介紹

這是一個，個人作品集網站，展示專業技能和項目成果。採用 Nuxt 框架和 Vue 3，提供流暢的用戶體驗和響應式設計。

## 🛠 技術棧

- **框架**: Nuxt 4.4.6
- **前端庫**: Vue 3.5.34
- **路由**: Vue Router 5.0.7
- **語言**: TypeScript 6.0.3
- **樣式**: SCSS with Mixin 預處理
- **開發工具**: ESLint, Prettier
- **Node環境**: Module 類型

## 📁 項目結構

```
frontend/
├── app/
│   ├── app.vue                 # 根組件（應用入口）
│   ├── assets/
│   │   ├── icons/              # 圖標組件庫
│   │   │   ├── githubIcon.vue
│   │   │   ├── instagramIcon.vue
│   │   │   ├── linkedinIcon.vue
│   │   │   ├── menuIcon.vue
│   │   │   ├── gotoIcon.vue
│   │   │   ├── topIcon.vue
│   │   │   └── index.ts
│   │   └── scss/               # 全局樣式
│   │       ├── _color.scss     # 顏色變量
│   │       ├── _font.scss      # 字體設置
│   │       ├── _mixin.scss     # SCSS混合元件
│   │       ├── _preset.scss    # 預設樣式
│   │       ├── _reset.scss     # 重置樣式
│   │       ├── _markdown.scss  # Markdown 樣式
│   │       └── main.scss       # 主樣式入口
│   ├── components/
│   │   ├── button/
│   │   │   └── MoreButton.vue  # 更多按鈕組件
│   │   ├── homePage/
│   │   │   └── HeroSection.vue # 首頁英雄區域
│   │   └── layouts/
│   │       ├── NavBar.vue      # 導航欄
│   │       └── Footer.vue      # 頁腳
│   ├── layouts/
│   │   └── default.vue         # 預設佈局模板
│   ├── pages/
│   │   └── index.vue           # 首頁
│   └── composables/            # 組合式 API 鉤子
├── public/
│   └── robots.txt              # SEO 爬蟲配置
├── nuxt.config.ts             # Nuxt 配置檔案
├── tsconfig.json              # TypeScript 配置
├── package.json               # 項目依賴
└── README.md                  # 項目文檔
```

## 🚀 快速開始

### 環境要求

- Node.js 18.0.0 或更高版本
- npm、pnpm、yarn 或 bun

### 安裝依賴

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install

# 或使用 yarn
yarn install

# 或使用 bun
bun install
```

### 開發伺服器

啟動開發伺服器（預設運行在 `http://localhost:3000`）：

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### 生產構建

為生產環境構建應用：

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### 預覽生產構建

本地預覽生產版本：

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

### 靜態生成

生成靜態站點：

```bash
npm run generate
```

## 📝 核心功能

### 導航欄 (NavBar)

- 頂部導航菜單
- 響應式設計
- 菜單圖標支持

### 首頁Hero區域 (HeroSection)

- 引人入勝的歡迎文案
- 背景設計
- 行動號召按鈕

### 按鈕組件 (MoreButton)

- 可複用的更多操作按鈕
- 一致的設計風格

### 社交媒體鏈接

- GitHub 圖標
- Instagram 圖標
- LinkedIn 圖標
- 回到頂部按鈕

## 🎨 樣式系統

項目採用模組化的 SCSS 架構：

- **\_color.scss**: 定義全局顏色變量
- **\_font.scss**: 字體排版設置
- **\_mixin.scss**: 可複用的 SCSS 混合元件
- **\_preset.scss**: 通用組件預設
- **\_reset.scss**: CSS 重置和規範化
- **\_markdown.scss**: Markdown 內容樣式
- **main.scss**: 導入所有樣式模組

## 🔧 配置說明

### Nuxt 配置 (nuxt.config.ts)

```typescript
- CSS 預處理: SCSS 自動導入 mixin 模組
- 開發工具: 啟用 Nuxt DevTools
- 相容性日期: 2025-07-15
```

## 📦 依賴版本

| 套件名     | 版本    |
| ---------- | ------- |
| nuxt       | ^4.4.6  |
| vue        | ^3.5.34 |
| vue-router | ^5.0.7  |
| typescript | ^6.0.3  |
| eslint     | ^10.4.1 |
| prettier   | ^3.8.3  |

## 📚 文檔資源

- [Nuxt 文檔](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 文檔](https://vuejs.org/)
- [Nuxt 部署指南](https://nuxt.com/docs/getting-started/deployment)

## 📄 許可證

此項目為個人作品集。

---

**開發者**: Lily  
**最後更新**: 2026
