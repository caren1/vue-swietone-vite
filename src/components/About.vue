<template>
  <section class="min-h-screen flex justify-center items-center relative p-6">
    <div class="w-full absolute top-0">
        <img :src="waves" alt="wave-svg">
      </div>
    <div class="about-info">
      <div class="faded-circle"></div>
      <div class="">
        <h1 class="text-white text-center text-2xl font-serif mb-4">Co możemy dla Ciebie zrobić?</h1>
        <ul class="leading-[50px] px-10 py-6 text-white text-lg font-sans font-light">
          <li>stworzyć nowoczesną stronę internetową</li>
          <li>przygotować dla niej unikalny szablon</li>
          <li>zoptymalizować ją pod przeglądarki</li>
          <li>zadbać o odpowiedni User Experience</li>
          <li>zaprojektować branding</li>
          <li>odświeżyć wizerunek twojej działalności</li>
          <li>zmodernizować twoją istniejącą stronę</li>
          <p class="mt-10 text-right text-sm">Chyba, że potrzebujesz czegoś więcej?</p>
        </ul>
      </div>
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
    ul {
        list-style-image: url("../assets/svg/list-style-circle.svg") !important;
    }
</style>