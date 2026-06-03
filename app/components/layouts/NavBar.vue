<template>
  <section class="hero">
    <div class="container">
      <div class="content">
        <div class="menu-text">about</div>
        <div class="menu-text">experience</div>
        <div class="menu-text">projects</div>
      </div>
      <div class="content-menu">
        <MenuIcon class="icon" />
      </div>
    </div>

    <div class="info-container">
      <div class="info-top">
        <TopIcon class="icon" />
      </div>
      <div class="info-media">
        <GithubIcon class="icon" />
        <InstagramIcon class="icon" />
        <LinkedinIcon class="icon" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TopIcon,
  MenuIcon,
} from "~/assets/icons";
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
.hero {
  border: 1px solid var(--background-gary);
}
.container {
  @include media(768) {
    padding: 1rem 1rem;
  }
}
.content {
  width: 100%;
  display: flex;
  gap: 40px;
  font-size: var(--h4-font-size);
  @include media(768) {
    display: none;
  }
  .menu-text {
    cursor: pointer;
  }
}

.content-menu {
  display: none;
  @include media(768) {
    display: flex;
    justify-content: flex-end;
  }
}

.info-container {
  position: fixed;
  top: 14%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  @include media(768) {
    top: 7%;
    padding: 0 1rem;
  }

  .info-media {
    display: flex;
    left: 10%;
    gap: 20px;
    @include media(768) {
      width: 100%;
      justify-content: flex-end;
    }
  }

  .info-top {
    height: 30px;
    @include media(768) {
      display: none;
    }
  }
}
</style>
