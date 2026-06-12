<template>
  <section class="footer">
    <div ref="datContentRef" class="dat-content">
      <div ref="datRef" class="dat"></div>

      <div class="container">
        <div ref="infoRef" class="info">
          <h1>Lily Lee</h1>
          <h1>Portfolio</h1>
          <h3>@gmail.com</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const datContentRef = ref<HTMLElement | null>(null);
const datRef = ref<HTMLElement | null>(null);
const infoRef = ref<HTMLElement | null>(null);
let hasReturned = false;
//動畫
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  if (!datContentRef.value || !datRef.value || !infoRef.value) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: datContentRef.value,
      start: "top top",
      end: "+=120%",
      scrub: true,
      pin: true,
      markers: true,

      onUpdate: (self) => {
        if (self.progress < 0.1) {
          hasReturned = false;
        }
        if (self.progress >= 0.99 && !hasReturned) {
          hasReturned = true;

          gsap.fromTo(
            infoRef.value,
            {
              filter: "blur(20px)",
            },
            {
              filter: "blur(0px)",
              opacity: 0,
              onComplete: () => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "instant",
                });
              },
            },
          );
        }
      },
    },
  });

  tl.to(datRef.value, {
    clipPath: "circle(150vmax at center)",
  });

  tl.fromTo(infoRef.value, { opacity: 0 }, { opacity: 1 }, 0);
});
</script>
<style lang="scss" scoped>
.dat-content {
  height: 100vh;
  position: relative;
  inset: 0;
  overflow: hidden;
}
.dat {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: var(--text-color-2);
  clip-path: circle(80px at center);
  pointer-events: none;
  @include media(1200) {
    display: none;
  }
}
.container {
  @include flex-center(column, 3rem);
  width: 100%;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  border: none;
}
</style>
