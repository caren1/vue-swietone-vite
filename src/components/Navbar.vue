<template>
  <header>
    <nav class="navbar">
      <div class="max-w-xs">
        <img :src="swietoneHorizontalLogo" alt="swietone-main-logo" />
      </div>
      <div class="menu" @click="$emit('toggleMenu', true)">
        <div class="menu-kebab">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

import swietoneLogo from "../assets/svg/swietone-main-logo.svg"
import swietoneHorizontalLogo from "../assets/svg/swietone-horizontal-logo.svg"

export default {
  data() {
    return {
      swietoneLogo,
      swietoneHorizontalLogo
    }
  }
};
</script>

<style scoped>

</style>