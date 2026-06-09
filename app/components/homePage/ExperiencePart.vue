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
  <div class="dat"></div>
</template>
<script setup lang="ts">
import type { ExperienceItem } from "~/types";
const item = ref<ExperienceItem[]>([
  {
    id: "1",
    year: "2025",
    month: "Apr",
    company: "Figma UIUX與前端培訓班",
    title: "學員",
    content: [
      " 工具與技能：Figma、HTML5、CSS3、Bootstrap、Javascript(ES6+)、RWD、網頁設計。",
      " 專題製作：以使用者研究為基礎，完成完整的UI設計與前端開發專案。",
    ],
  },
  {
    id: "2",
    year: "2024",
    month: "Oct",
    company: "醫鼎科技股份有限公司",
    title: "專案執行",
    content: [
      " 工具與技能：Figma、HTML5、CSS3、Bootstrap、Javascript(ES6+)、RWD、網頁設計。",
      " 專題製作：以使用者研究為基礎，完成完整的UI設計與前端開發專案。",
    ],
  },
  {
    id: "3",
    year: "2024",
    month: "Oct",
    company: "醫鼎科技股份有限公司",
    title: "專案執行",
    content: [
      " 工具與技能：Figma、HTML5、CSS3、Bootstrap、Javascript(ES6+)、RWD、網頁設計。",
      " 專題製作：以使用者研究為基礎，完成完整的UI設計與前端開發專案。",
    ],
  },
  {
    id: "4",
    year: "2024",
    month: "Oct",
    company: "醫鼎科技股份有限公司",
    title: "專案執行",
    content: [
      " 工具與技能：Figma、HTML5、CSS3、Bootstrap、Javascript(ES6+)、RWD、網頁設計。",
      " 專題製作：以使用者研究為基礎，完成完整的UI設計與前端開發專案。",
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
    height: 120%;
    background-color: var(--divider-color);
  }
}
.item:last-child::after {
  height: 120%;
}
.job {
  display: flex;
}
.dat {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: var(--text-color-2);
  z-index: 4;
  @include media(1200) {
    display: none;
  }
}
</style>
