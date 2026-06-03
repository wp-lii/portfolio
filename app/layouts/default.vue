<template>
  <div class="header">
    <layoutsNavBar />
  </div>
  <div class="main">
    <slot name="main" />
  </div>
  <div class="footer">
    <slot name="footer" />
  </div>
</template>
<style scoped lang="scss"></style>
