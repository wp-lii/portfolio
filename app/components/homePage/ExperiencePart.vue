<template>
  <div class="container">
    <div class="item" v-for="experience in item" :key="experience.id">
      <div class="time">{{ experience.year }} - {{ experience.month }}</div>
      <div class="job">
        <div class="company">{{ experience.company }} |</div>
        <div class="title">{{ experience.title }}</div>
      </div>
      <ul class="content" v-for="content in experience.content">
        <li>{{ content }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ExperienceItem } from "~/types";

const item = ref<ExperienceItem[]>([
  {
    id: "5",
    year: "2025",
    month: "Oct",
    company: "脈動心聯股份有限公司",
    title: "前端工程師",
    content: [
      "使用 Vue 3 + TypeScript + Vite 建置 SPA 系統。",
      "導入Pinia管理全域狀態。與後端協作串接 RESTful API。",
      "建立可重複使用的元件架構，提高維護效率。",
      "規劃表單驗證與資料處理邏輯。",
      "優化手機版介面與 RWD 體驗。",
      "維護 Git Flow 與版本管理流程。",
      "協助釐清需求並提出前端技術解決方案。",
    ],
  },
  {
    id: "4",
    year: "2025",
    month: "Apr",
    company: "Figma UIUX與前端培訓班",
    title: "學員",
    content: [
      "工具與技能：Vue、HTML5、CSS3、Bootstrap、Javascript(ES6+)、RWD、Figma、網頁設計。",
      "專題製作：以使用者研究為基礎，完成完整的UI設計與前端開發專案。",
    ],
  },
  {
    id: "3",
    year: "2024",
    month: "Oct",
    company: "醫鼎科技股份有限公司",
    title: "專案執行",
    content: [
      "需求洞察與產品策略規劃：深了解健康產業客戶需求,量打造整合銷案,提升客戶滿意度與合作黏著度。",
      "追蹤專案並執,深了解品牌標與痛點,提供建議並促成合作。",
      "分析市場趨勢與競業操作,制定有效的銷售策略,並找尋潛在客戶。",
    ],
  },
  {
    id: "2",
    year: "2023",
    month: "Dec",
    company: "奧丁丁集團英屬開曼群島商台灣子公司",
    title: "B2B sales assistant ",
    content: [
      "跨部溝通與進度協調、數位平台營運與數據對帳：處理NFT、錢包後台之分潤對帳。",
    ],
  },
  {
    id: "1",
    year: "2022",
    month: "Aug",
    company: "亞洲學附屬醫院",
    title: "行銷業務",
    content: [
      "客戶關係管理及維繫：同時管理約20-30家廠商/客戶,創造每破百萬業 績,並處理客訴及藥物衛教,且後續追蹤。",
      "為客戶以需求導向介紹並規劃體檢類型,解決客戶痛點,同時也熟悉各項醫 療設備以滿不同類型客戶的需求。",
      "型活動策劃與專案管理：向公司號/政府招標案洽談後規劃報價單,曾舉辦過百外巡體檢活動及到院檢查。",
      "數位內容規劃與案銷：為特定節規劃不同健檢案並汰舊過時專案,同時發想廣告案。",
    ],
  },
]);
</script>
<style lang="scss" scoped>
.container {
  @include flex-center(column, 2rem);
  padding-bottom: 0;
}
.content {
  list-style: disc;
  padding-left: 1.25rem;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--h4-font-size);
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.3rem;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--text-color-2);
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    left: 8px;
    width: 3px;
    height: 100%;
    background-color: var(--divider-color);
  }
}
.item:last-child::after {
  height: 120%;
}
.job {
  display: flex;
}
</style>
