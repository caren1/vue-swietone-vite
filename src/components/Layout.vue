<template>
  <div class="bg-championGreen relative">
      <slot />
       
      <div class="fixed bottom-6 right-6 max-w-[7%] sm:max-w-[5%] md:max-w-[3%] ttt-container" onscroll="opacityHandler">
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

  .ttt-container {
    animation: pulse 2s infinite;
            transition: all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(1.1);
    }
    0% {
      transform: scale(1);
    }
  }

</style>