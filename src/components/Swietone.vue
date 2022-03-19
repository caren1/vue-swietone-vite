<template>
  <section class="min-h-screen flex justify-center items-center text-center p-8 relative " id="swietone">
     <div class="hidden sm:block w-full absolute -top-4 h-28 pattern"></div>
     <div class="sm:max-w-[90%]">
        <div class="sm:flex justify-evenly items-center ">
          <h2 class="font-serif font-light text-white text-2xl mb-4  w-full sm:w-50% sm:text-6xl sm:p-2 sm:mr-8 sm:mb-0">Czym jest <span class="text-croissantYellow">swietone</span>?</h2>
          <p class="font-sans font-light text-white text-sm sm:text-[18px] sm:max-w-[40%] sm:leading-7 sm:text-left">Miejscem, w którym wykorzystuje się kreatywność, aby tworzyć i budować innowacyjne, minimalistyczne i piękne rzeczy.</p>
      </div>
      <div class="font-sans my-8 text-white font-light text-sm xxs:text-xs sm:p-6">
          <div class="sm:max-w-[650px] m-auto flex-col justify-center items-center sm:flex-row sm:flex sm:justify-between">
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center">
                  <img :src="smallCloud" alt="small-cloud-svg" class="opacity-10 max-w-[40px] sm:max-w-[120px]">
                  <span class="ml-2 sm:m-3">Kontakt</span>
                </div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-30 max-w-[40px] sm:max-w-[120px]"><span class="ml-2 sm:m-3">Szczegóły</span></div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-50 max-w-[40px] sm:max-w-[120px]"><span class="ml-2 sm:m-3">Formalności</span></div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-70 max-w-[40px] sm:max-w-[120px]"><span class="ml-2 sm:m-3">Realizacja</span></div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-80 max-w-[40px] sm:max-w-[120px] "><span class="ml-2 sm:m-3">Weryfikacja</span></div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-90 max-w-[40px] sm:max-w-[120px]"><span class="ml-2 sm:m-3">Finalizacja</span></div>
              <div class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-100 max-w-[40px] sm:max-w-[120px]"><span class="ml-2 sm:m-3">Moderacja</span></div>  
          </div>
      </div>
      <div class="font-sans font-hairline text-white text-sm sm:text-left sm:text-[18px] sm:max-w-[90%] sm:m-auto sm:leading-5">
          <p class="mb-4">Tym co cenię sobie najbardziej przy współpracy z klientem jest czysta, jasna i otwarta komunikacja oraz precyzja, terminowość i satysfakcja zleceniodawcy.</p>
          <p class="">Z tego powodu wszystkie usługi objęte są 30 dniową gwarancją, która obejmuje dodatkowe modyfikacje i poprawki. Dodatkowo, z mojej strony mogę zagwarantować w pełni indywidualną oraz profesjonalną realizację wymagań klienta.</p>
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
      background-repeat: repeat;
      background-position: right;
      background-attachment: fixed;
    }

</style>