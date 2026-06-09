<template>
  <layoutsNavBar />
  <div class="custom-cursor">
    <TopIcon class="icon" />
  </div>
  <main class="main">
    <slot />
  </main>
  <!--   <layoutsFooter /> -->
</template>

<script setup lang="ts">
import { TopIcon } from "~/assets/icons";
</script>

<style scoped lang="scss">
.custom-cursor {
  position: fixed;
  top: 15%;
  left: 5%;
  pointer-events: none;
  z-index: 9;
}
</style>
