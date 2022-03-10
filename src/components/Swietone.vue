<template>
  <section class="min-h-screen flex justify-center items-center text-center p-8">
     <div class="">
        <div>
          <h2 class="font-serif font-light text-white text-2xl mb-4">Czym jest <span class="text-croissantYellow">swietone</span>?</h2>
          <p class="font-sans font-light text-white text-[12px]">Miejscem, w którym wykorzystuje się kreatywność, aby tworzyć i budować innowacyjne, minimalistyczne i piękne rzeczy.</p>
      </div>
      <div class="font-sans my-8 text-white font-light text-xs xxs:text-xs">
          <div class="w-[60%] ml-[25%]">
              <div class="flex items-center  cloudy "><img :src="smallCloud" alt="small-cloud-svg" class="opacity-10 max-w-[40px]"><span class="ml-2">Kontakt</span></div>
              <div class="flex items-center  cloudy"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-30 max-w-[40px]"><span class="ml-2">Szczegóły i oczekiwania</span></div>
              <div class="flex items-center  cloudy"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-50 max-w-[40px]"><span class="ml-2">Formalności</span></div>
              <div class="flex items-center  cloudy"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-70 max-w-[40px]"><span class="ml-2">Realizacja</span></div>
              <div class="flex items-center  cloudy"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-80 max-w-[40px]"><span class="ml-2">Weryfikacja</span></div>
              <div class="flex items-center  cloudy"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-90 max-w-[40px]"><span class="ml-2">Finalizacja</span></div>
              <div class="flex items-center  cloudy"><img :src="smallCloud" alt="small-cloud-svg" class="opacity-100 max-w-[40px]"><span class="ml-2">Dodatkowe poprawki</span></div>  
          </div>
      </div>
      <div class="font-sans font-hairline text-white text-xs">
          <p class="mb-4">Tym co cenimy sobie najbardziej przy współpracy z klientem jest czysta, jasna i otwarta komunikacja oraz precyzja, terminowość i satysfakcja zleceniodawcy.</p>
          <p>Z tego powodu wszystkie usługi objęte są 30 dniową gwarancją, która obejmuje dodatkowe modyfikacje i poprawki. Dodatkowo, z naszej strony możemy zagwarantować w pełni indywidualną oraz profesjonalną realizację wymagań klienta.</p>
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

<style>
.cloudy {
    text-align: center;
    margin: 20px 0;
   
}

</style>