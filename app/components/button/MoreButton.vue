<template>
  <button class="more-button">
    <h4>{{ text }}</h4>
    <GotoIcon class="icon" />
  </button>
</template>

<script setup lang="ts">
import GotoIcon from "~/assets/icons/infoIcon/gotoIcon.vue";

defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped>
.more-button {
  min-width: 15vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: transparent;
  border: 3px solid var(--text-color-2);
  border-radius: 4px;
  gap: 8px;
  cursor: pointer;
}
.icon {
  margin: 0;
}
</style>
