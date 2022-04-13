<template>
  <div class="bg-championGreen relative">
      <slot />
       
      <div class="fixed bottom-6 right-6 max-w-[7%] sm:max-w-[5%] md:max-w-[3%]" onscroll="opacityHandler">
          <a href="#home" id="toTheTop" v-if="scrollPosition > 1 && menuState === false" @click="topHandler($event, '#home')">
            <img :src="arrow" alt="back-to-top-arrow-icon" class="w-100"/>
          </a>
      </div>
  </div>
</template>

<script>
import arrow from "../assets/svg/arrow.svg"

export default {
data() {
    return {
      arrow,
      scrollPosition: null,
    };
  },
  props: ['menuState'],
   methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    topHandler(e, hrefe) {
      e.preventDefault();
      const offsetTop = document.querySelector(hrefe).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
}

</script>

<style>

</style>