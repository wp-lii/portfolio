<template>
  <section class="hero">
    <h1 class="title">Portfolio</h1>
    <div class="container">
      <h3 class="introduce">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        blanditiis. Mollitia quia placeat sit eaque blanditiis dolorem
        repellendus nam, architecto ipsum praesentium, accusantium incidunt
        autem accusamus magni, sunt cumque corporis!
      </h3>
      <buttonMoreButton text="text me" class="more-button" />
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
}
.title {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  padding: 1rem;
  &::after {
    content: "24°C";
    position: absolute;
    top: 100%;
    left: 1rem;
    width: 100%;
    height: 1px;
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
</style>
