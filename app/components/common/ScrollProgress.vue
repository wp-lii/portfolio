<template>
  <div ref="progressRef" class="scroll-progress">
    <div ref="iconRef" class="icon-item" @click="goTop">
      <TopIcon class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TopIcon } from "~/assets/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const progressRef = ref<HTMLElement | null>(null);
const iconRef = ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const progress = progressRef.value;
  const icon = iconRef.value;
  if (!progress || !icon) return;

  const maxY = progress.clientHeight - icon.offsetHeight;
  //動畫
  gsap.fromTo(
    icon,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        start: 580,
        end: 2800,
        toggleActions: "play reverse play reverse",
      },
    },
  );

  //顯示長度
  gsap.to(icon, {
    y: maxY,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      scrub: true,
    },
  });
});
function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="scss">
.scroll-progress {
  position: fixed;
  top: 15%;
  left: 5%;
  height: 50vh;
  width: 32px;
  pointer-events: none;
  @include media(768) {
    left: 2%;
  }
}

.icon-item {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: auto;
  cursor: pointer;
  z-index: 10;
}
.icon {
  width: 36px;
  height: 36px;
}
</style>
