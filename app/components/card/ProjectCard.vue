<template>
  <section>
    <!-- pc版 -->
    <div class="container">
      <div
        v-for="ans in 3"
        :key="ans"
        ref="tiltRef"
        class="tilt-card"
        data-tilt
        data-tilt-reverse="true"
      >
        <div class="title">title</div>
        <div class="desc">desc</div>
      </div>
    </div>

    <!-- 手機版 -->
    <div class="mobile-item">
      <div v-for="ans in 3" :key="ans" class="item-content">
        <div class="title">title</div>
        <div class="desc">desc</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
//型別
type TiltElement = HTMLElement & {
  vanillaTilt?: {
    destroy: () => void;
  };
};
const tiltRef = ref<TiltElement | null>(null);

onMounted(async () => {
  const VanillaTilt = (await import("vanilla-tilt")).default;

  if (!tiltRef.value) return;

  VanillaTilt.init(tiltRef.value, {
    max: 12,
    perspective: 1200,
    scale: 1.02,
    speed: 500,
    transition: true,
    glare: true,
    "max-glare": 0.15,
  });
});

onBeforeUnmount(() => {
  tiltRef.value?.vanillaTilt?.destroy();
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
  @include media(1200) {
    display: none;
  }
}

.tilt-card {
  width: 400px;
  height: 300px;
  border-radius: 24px;
  border: 1px solid rgb(255, 255, 255);
  backdrop-filter: blur(30px);

  transform-style: preserve-3d;
  transform: perspective(1200px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(90deg, #707070, #fff5f9);
}

.title {
  font-size: 48px;
  font-weight: 700;
  transform: translateZ(20px);
}

.desc {
  margin-top: 16px;

  transform: translateZ(80px);
}

//手機
.mobile-item {
  display: none;
  @include media(1200) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5rem 1rem;
    gap: 1rem;
    .item-content {
      @include flex-center(column, 1rem);
      min-height: 400px;
      border: 4px solid var(--background-gary);
      border-radius: 8px;
      border-bottom-right-radius: 50%;
      &:nth-child(2) {
        grid-row: span 2;
        border-top-left-radius: 60%;
      }
      &:nth-child(3) {
        border-top-left-radius: 50%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
  @include media(768) {
    grid-template-columns: 1fr;
    .item-content {
      border: none;
    }
  }
}
</style>
