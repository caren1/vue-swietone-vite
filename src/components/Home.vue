<template>
  <section class="min-h-screen flex justify-center items-center relative" id="home">
      <div class="p-6 text-center sm:text-right sm:w-[80%]">
        <h1 class="text-white text-3xl text-center sm:text-4xl sm:text-left font-serif xxs:text-xl md:text-5xl md:leading-[50px]">
            Modernizacja strony <br />
            internetowej lub brandingu?
        </h1>
        <h2 class="text-white text-center sm:text-left text-lg font-sans font-light mt-2 mb-6 md:text-xl">A może jeszcze nie masz strony?</h2>
        <a class="text-white text-md sm:text-right font-serif p-1 cta md:text-lg" href="#about">brzmi nieźle.</a>
      </div>
      <div class="w-screen waves absolute bottom-0 overflow-hidden">
        <img :src="waves" alt="wave-svg" class="overflow-hidden w-full md:h-[10%]">
      </div>
  </section>
</template>


<script>
import waves from "../assets/svg/waves.svg";

export default {
  data() {
    return {
      waves
    }
  },
  mounted() {
    const cta = document.querySelector(".cta");
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
  }
}
</script>

<style scoped>
    a {
        border-bottom: 6px solid transparent;
        border-image: url("../assets/svg/waves.svg") 100 stretch;
    }

    a:hover {
      transform: scale(1.1);
      border-image: url("../assets/svg/waves.svg") 200 stretch;
      transition: all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .waves {
      animation: waving 8s infinite;
    }

    @keyframes waving {
      0% {
        transform: translate(0, 0px)
      }

      25% {
          transform: translate(0, -30px);
      }
      
      100%{
        transform: translate(0, 0px);
      }
    }
</style>