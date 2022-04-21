<template>
  <section
    id="about"
    class="min-h-screen flex justify-center items-center relative"
  >
    <div
      class=""
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1
        class="text-white text-center text-xl font-serif mb-4 sm:text-2xl z-1 md:text-center md:text-4xl whatcanwedo"
      >
        Co mogę dla Ciebie zrobić?
      </h1>
      <ul
        class="leading-[40px] xxs:leading-[40px] px-6 py-6 text-white text-[15px] font-sans font-thin ml-[1rem] xxs:text-sm sm:text-lg sm:leading-[50px] sm:ml-[1.5rem] md:leading-[45px] md:text-[20px] md:ml-20"
      >
        <li v-for="point in points" :key="point">{{ point }}</li>
        <p class="mt-10 text-right text-sm sm:text-lg">
          No chyba, że potrzebujesz czegoś więcej?
        </p>
      </ul>
    </div>
    <div
      class="absolute -bottom-2 max-w-[50%] right-0 overflow-hidden sm:max-w-[35%] md:-left-12 md:max-w-[35%] sm:bottom-0"
    >
      <img
        :src="bigCloud"
        alt="bigCloud-svg"
        class="w-100 overflow-hidden relative -right-8 md:right-0"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-anchor=".whatcanwedo"
      />
    </div>
  </section>
</template>

<script>
import waves from '../assets/svg/waves.svg'
import bigCloud from '../assets/svg/big-cloud.svg'
import halfMoon from '../assets/svg/half-moon.svg'

export default {
  data () {
    return {
      waves,
      bigCloud,
      halfMoon,
      points: [
        'stworzyć nowoczesną stronę internetową',
        'przygotować dla niej unikalny szablon',
        'zoptymalizować ją pod przeglądarki',
        'zadbać o odpowiedni User Experience',
        'zaprojektować identyfikację wizualną',
        'odświeżyć wizerunek twojej działalności',
        'zmodernizować twoją istniejącą stronę'
      ]
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

.waves {
  animation: waving 8s infinite;
}

@keyframes waving {
  0% {
    transform: translate(0, 0px);
  }

  25% {
    transform: translate(0, -35px);
  }

  100% {
    transform: translate(0, 0px);
  }
}
</style>
