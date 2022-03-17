<template>
  <section class="min-h-screen flex justify-center items-center relative" id="about">
    <div class="w-full absolute top-0">
        <!-- <img :src="waves" alt="wave-svg"> -->
      </div>
    <div class="about-info">
      <div class="faded-circle"></div>
      <div class="">
        <h1 class="text-white text-center text-xl font-serif mb-4">Co możemy dla Ciebie zrobić?</h1>
        <ul class="leading-[40px] xxs:leading-[40px] px-6 py-6 text-white text-[15px] font-sans font-light ml-[0.75rem] xxs:text-sm">
          <li>stworzyć nowoczesną stronę internetową</li>
          <li>przygotować dla niej unikalny szablon</li>
          <li>zoptymalizować ją pod przeglądarki</li>
          <li>zadbać o odpowiedni User Experience</li>
          <li>zaprojektować identyfikację firmy</li>
          <li>odświeżyć wizerunek twojej działalności</li>
          <li>zmodernizować twoją istniejącą stronę</li>
          <p class="mt-10 text-right text-sm">No chyba, że potrzebujesz czegoś więcej?</p>
        </ul>
      </div>
    </div>
    <div class="flex absolute -bottom-2 z-1 max-w-[55%] md:max-w-[50%] right-0 fixed overflow-hidden">
      <img :src="bigCloud" alt="bigCloud-svg" class="w-100 overflow-hidden relative -right-8">
    </div>
  </section>
</template>

<script>
import waves from "../assets/svg/waves.svg";
import bigCloud from "../assets/svg/big-cloud.svg";
export default {
    data() {
    return {
      waves,
      bigCloud
    }
  }
}
</script>

<style scoped>
    ul {
        list-style-image: url("../assets/svg/list-style-circle.svg") !important;
    }
</style>