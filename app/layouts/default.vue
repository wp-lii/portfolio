<template>
  <div class="container">
    <div class="header">
      <slot />
    </div>
    <div class="main">
      <slot name="main" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
