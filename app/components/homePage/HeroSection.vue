<template>
  <section class="hero">
    <span class="title" ref="heroTitle">Portf lio</span>
    <div class="banner-wrap">
      <img src="/image/banner.png" class="banner-img main" />
      <img src="/image/banner-1.png" class="banner-img frame" />
      <img src="/image/banner-2.png" class="banner-img decorate" />
      <img src="/image/banner-3.png" class="banner-img dot" />
    </div>

    <div class="container">
      <h3 class="introduce">
        （Skills） Vue 3 Nuxt 3 TypeScript JavaScript (ES6+) HTML5 SCSS / CSS3
        Responsive Web Design (RWD)
      </h3>
      <buttonMoreButton text="text me" class="more-button" />
    </div>
  </section>
</template>
<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const heroTitle = ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (!heroTitle.value) return;

  gsap.to(heroTitle.value, {
    y: -400,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
}

.title {
  position: relative;
  min-height: 400px;
  font-size: clamp(48px, 20vw, 350px);
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 1rem;
  letter-spacing: 0.09em;

  &::after {
    content: "24°C";
    position: absolute;
    top: 100%;
    left: 1rem;
    width: 100%;
    height: 1px;
    font-size: var(--h4-font-size);
    background-color: var(--background-gary);
    @include media(1500) {
      display: none;
    }
  }
}

.introduce {
  width: 50%;
  font-weight: 500;
}
.more-button {
  width: fit-content;
}
.banner-wrap {
  position: absolute;
  top: 14%;
  right: 9%;

  width: clamp(300px, 38vw, 600px);
  aspect-ratio: 1 / 1;

  transform: translateY(-20%);
  pointer-events: none;
}

.banner-img {
  position: absolute;
  height: auto;
  object-fit: contain;
  will-change: transform;
}

.main {
  position: sticky;
  width: 27%;
  top: 500px;
  z-index: 3;
}

.frame {
  width: 100%;
  top: 0;
  right: 0;
  z-index: 2;
}

.decorate {
  width: 20%;
  top: 30%;
  right: 100%;
  z-index: 4;
}

.dot {
  width: 34%;
  top: 50%;
  left: -90%;
  z-index: -1;
}
</style>
