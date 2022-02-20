<template>
  <section class="min-h-screen flex justify-center items-center md:hidden">
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