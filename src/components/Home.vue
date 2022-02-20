<template>
  <section class="min-h-screen flex justify-center items-center relative">
      <div class="p-6 text-center">
        <h1 class="text-white text-3xl font-serif">
            Modernizacja strony <br />
            internetowej lub brandingu?
        </h1>
        <h2 class="text-white text-lg font-sans font-light mt-2 mb-6">A może jeszcze nie masz strony?</h2>
        <a class="text-white text-md font-serif p-1" href="#">brzmi nieźle.</a>
      </div>
      <div class="w-full absolute bottom-8">
        <img :src="waves" alt="wave-svg">
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
</style>