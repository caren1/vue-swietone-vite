<template>
  <section class="md:hidden min-h-screen flex justify-center items-center" id="intro">
      <img :src="swietoneMainLogo" alt="swietone-main-logo">
  </section>
</template>

<script>
import swietoneMainLogo from "../assets/svg/swietone-main-logo.svg";

export default {
    data() {
    return {
      swietoneMainLogo
    }
  }
}
</script>

<style>

</style>