<template>
  <section class="footer">
    <div class="container">
      <h1>Lily Lee</h1>
      <h1>Portfolio</h1>
      <h3>@gmail.com</h3>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.footer {
  background-color: var(--text-color-2);
}
.container {
  @include flex-center(column, 3rem);
  min-height: 500px;
  color: azure;
  border: none;
}
</style>
