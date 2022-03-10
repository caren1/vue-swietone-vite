<template>
  <section class="block md:hidden min-h-screen flex justify-center items-center">
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