<template>
  <section class="min-h-screen flex justify-center items-center relative" id="about">
    
    <div class="">
        <h1 class="text-white text-center text-xl font-serif mb-4 sm:text-2xl z-1">Co możemy dla Ciebie zrobić?</h1>
        <ul class="leading-[40px] xxs:leading-[40px] px-6 py-6 text-white text-[15px] font-sans font-thin ml-[1rem] xxs:text-sm sm:text-lg sm:leading-[50px] sm:ml-[1.5rem]">
          <li>stworzyć nowoczesną stronę internetową</li>
          <li>przygotować dla niej unikalny szablon</li>
          <li>zoptymalizować ją pod przeglądarki</li>
          <li>zadbać o odpowiedni User Experience</li>
          <li>zaprojektować identyfikację wizualną</li>
          <li>odświeżyć wizerunek twojej działalności</li>
          <li>zmodernizować twoją istniejącą stronę</li>
          <p class="mt-10 text-right text-sm sm:text-lg">No chyba, że potrzebujesz czegoś więcej?</p>
        </ul>    
    </div>
    <div class="hidden left-0 max-w-[40%]">
      <img :src="halfMoon" alt="half-moon-svg" class="w-full">
    </div>
    <div class="flex absolute -bottom-2 max-w-[50%] right-0 overflow-hidden sm:max-w-[35%] md:hidden">
      <img :src="bigCloud" alt="bigCloud-svg" class="w-100 overflow-hidden relative -right-8">
    </div>
    <div class="hidden sm:hidden w-full absolute -bottom-6 pattern min-h-[100px]"></div>
  </section>
</template>

<script>
import waves from "../assets/svg/waves.svg";
import bigCloud from "../assets/svg/big-cloud.svg";
import halfMoon from "../assets/svg/half-moon.svg";

export default {
    data() {
    return {
      waves,
      bigCloud,
      halfMoon
    }
  }
}
</script>

<style scoped>
    ul {
        list-style-image: url("../assets/svg/list-style-circle.svg") !important;
    }

    .pattern {
      background-image: url("../assets/svg/multiple-clouds.svg");
      background-repeat: repeat;
      background-position: left top;
      
    }
</style>