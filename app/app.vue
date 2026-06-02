<template>
  <NuxtLayout>
    <NuxtPage />
    <!--  <ConfirmDialog group="headless" />
    <Toast /> -->
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | LilyPortfolio` : "LilyPortfolio",
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
