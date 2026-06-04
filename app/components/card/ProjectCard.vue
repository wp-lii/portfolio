<template>
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
}

.tilt-card {
  width: 400px;
  height: 300px;
  border-radius: 24px;
  border: 1px solid rgb(255 255 255 / 0.15);
  backdrop-filter: blur(30px);

  transform-style: preserve-3d;
  transform: perspective(1200px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(90deg, #ffce95, #ff7eae);
}

.title {
  font-size: 48px;
  font-weight: 700;
  background-color: antiquewhite;
  transform: translateZ(20px);
}

.desc {
  margin-top: 16px;

  transform: translateZ(80px);
}
</style>
