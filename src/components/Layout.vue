<template>
  <div class="bg-championGreen relative">
      <slot />
       
      <div class="fixed bottom-6 right-6 max-w-[10%] sm:max-w-[5%] md:max-w-[3%]" onscroll="opacityHandler">
          <a href="#home" id="toTheTop" ><img :src="arrow" alt="back-to-top-arrow-icon" class="w-100"/></a>
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
   methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    
    let cta = document.getElementById("toTheTop");
    cta.addEventListener("click", clickHandler);

    function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
  },
}

</script>

<style>

</style>