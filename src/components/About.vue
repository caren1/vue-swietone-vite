<template>
  <section class="min-h-screen flex justify-center items-center relative">
    <!-- <div class="about-waves">
      <img :src="waves" alt="waves-svg" />
    </div> -->
    <div class="about-info">
      <div class="faded-circle"></div>
      <div class="">
        <h1 class="text-white text-center text-xl font-serif">Co możemy dla Ciebie zrobić?</h1>
        <ul class="leading-6 px-10 py-6 text-white text-sm font-sans font-light">
          <li>zaprojektować branding</li>
          <li>odświeżyć wizerunek twojej działalności</li>
          <li>stworzyć nowoczesną stronę internetową</li>
          <li>przygotować dla niej unikalny szablon</li>
          <li>zadbać o odpowiedni UX</li>
          <li>zoptymalizować ją pod przeglądarki</li>
          <li>zmodernizować twoją istniejącą stronę</li>
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