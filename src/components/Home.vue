<template>
  <section class="min-h-screen flex justify-center items-center relative" id="home">
      <div class="p-6 text-center">
        <h1 class="text-white text-3xl font-serif xxs:text-xl">
            Modernizacja strony <br />
            internetowej lub brandingu?
        </h1>
        <h2 class="text-white text-lg font-sans font-light mt-2 mb-6">A może jeszcze nie masz strony?</h2>
        <a class="text-white text-md font-serif p-1 cta" href="#about">brzmi nieźle.</a>
      </div>
      <div class="w-full waves absolute bottom-16 overflow-hidden">
        <img :src="waves" alt="wave-svg" class="overflow-hidden ">
      </div>
      <div class="w-full waves absolute bottom-2 overflow-hidden">
        <img :src="waves" alt="wave-svg" class="overflow-hidden ">
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
        transform: translate(0, 0px) scale(1);
      }

      25% {
          transform: translate(0, -35px) scale(1) rotate(0deg);
      }

      50%{
        transform:  scale(1) rotate(0deg);
      }
      
      100%{
        transform: translate(0, 0px) scale(1);
      }
    }
</style>