<template>
  <section class="min-h-screen flex justify-center items-center text-center p-8 relative" id="swietone">
     <div class="hidden w-full md:absolute top-0 pattern min-h-[100px]"></div>
     <div>
        <div class="sm:flex sm:justify-between sm:items-center">
          <h2 class="font-serif font-light text-white text-2xl mb-4 sm:w-50% sm:max-w-[450px] sm:text-6xl sm:p-2 sm:mr-8 sm:mb-0">Czym jest <span class="text-croissantYellow">swietone</span>?</h2>
          <p class="font-sans font-light text-white text-sm sm:text-[18px] sm:max-w-[40%] sm:leading-6 sm:text-left sm:font-hairline">Miejscem, w którym wykorzystuje się kreatywność, aby tworzyć i budować innowacyjne, minimalistyczne i piękne rzeczy.</p>
      </div>
      <div class="font-sans my-8 text-white font-light text-sm xxs:text-xs sm:px-6 sm:my-6">
          <div class="max-w-[120px] sm:max-w-[800px] m-auto flex-col justify-center items-center sm:flex-row sm:flex sm:justify-between">
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-10 max-w-[40px] sm:max-w-[120px]  cloud-icon">
                  <span class="ml-2 sm:m-3">Kontakt</span>
                </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-30 max-w-[40px] sm:max-w-[120px] cloud-icon">
                  <span class="ml-2 sm:m-3">Szczegóły</span>
            </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-50 max-w-[40px] sm:max-w-[120px] cloud-icon">
                  <span class="ml-2 sm:m-3">Formalności</span>
                  </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-70 max-w-[40px] sm:max-w-[120px] cloud-icon">
                  <span class="ml-2 sm:m-3">Realizacja</span>
                  </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-80 max-w-[40px] sm:max-w-[120px]  cloud-icon">
                  <span class="ml-2 sm:m-3">Weryfikacja</span>
                  </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-90 max-w-[40px] sm:max-w-[120px] cloud-icon">
                  <span class="ml-2 sm:m-3">Finalizacja</span>
                  </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-100 max-w-[40px] sm:max-w-[120px] cloud-icon"
                  ><span class="ml-2 sm:m-3">Moderacja</span>
                  </div>  
          </div>
      </div>
      <div class="font-sans font-hairline text-white text-sm sm:text-left sm:text-md sm:max-w-[650px] sm:m-auto sm:leading-5">
          <p class="">Tym co cenię sobie najbardziej przy współpracy z klientem jest czysta, jasna i otwarta komunikacja oraz precyzja, terminowość i satysfakcja zleceniodawcy.</p>
          <p class="my-4">Z tego powodu wszystkie usługi objęte są 30 dniową gwarancją, która obejmuje dodatkowe modyfikacje i poprawki. Dodatkowo, z mojej strony mogę zagwarantować w pełni indywidualną oraz profesjonalną realizację wymagań klienta.</p>
          <p>Moje realizacje wyróżniają się niestandarowym, nowoczesnym i minimalistycznym wyglądem, skrojonym pod oczekiwania klienta. Przy każdym projekcie dbam o każdy detal, dzięki czemu tworzę szybkie, zoptymalizowane i responsywne strony internetowe.</p>
      </div>
     </div>
  </section>
</template>

<script>
import smallCloud from "../assets/svg/small-cloud.svg"
export default {
    data() {
        return {
            smallCloud
        }
    }
}
</script>

<style scoped>
.cloudy {
    text-align: center;
    margin: 20px 0; 
}

.pattern {
      background-image: url("../assets/svg/multiple-clouds.svg");
      background-repeat: no-repeat;
      background-position: center;
     
    }

</style>