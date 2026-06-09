<template>
  <main class="main">
    <HomePageHeroSection />
    <cardProjectCard />
    <HomePageExperiencePart />
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "My Portfolio",
  ogTitle: "My Portfolio",
  description: "",
  ogDescription: "",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
<style lang="scss" scoped>
.icon {
  display: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
