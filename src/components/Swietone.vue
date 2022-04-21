<template>
  <section
    id="swietone"
    class="min-h-screen flex justify-center items-center text-center p-6 relative md"
  >
    <div>
      <div
        class="sm:flex sm:justify-center sm:items-center sm:w-full md:justify-evenly"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2
          class="font-serif font-light text-white text-2xl mb-4 sm:w-50% sm:max-w-[450px] sm:text-6xl sm:p-2 sm:mr-8 sm:mb-0 md:text-7xl md:m-0"
        >
          Czym jest <span class="text-croissantYellow">swietone</span>?
        </h2>
        <p
          class="font-sans font-hairline text-white text-sm sm:text-[18px] sm:max-w-[40%] sm:leading-6 sm:text-left md:text-xl md:max-w-[30%] md:font-light"
        >
          Miejscem, w którym wykorzystuje się kreatywność, aby tworzyć i budować
          innowacyjne, minimalistyczne i piękne rzeczy.
        </p>
      </div>
      <div
        class="font-sans my-6 text-white font-light text-sm xxs:text-xs sm:text-md md:my-8 details"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div
          class="max-w-[120px] m-auto flex-col justify-center items-center sm:flex-row sm:flex sm:justify-evenly md:max-w-[1000px]"
        >
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-10 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            />
            <span class="ml-2 sm:m-3">Kontakt</span>
          </div>
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-30 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            />
            <span class="ml-2 sm:m-3">Szczegóły</span>
          </div>
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-50 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            />
            <span class="ml-2 sm:m-3">Formalności</span>
          </div>
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-70 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            />
            <span class="ml-2 sm:m-3">Realizacja</span>
          </div>
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-80 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            />
            <span class="ml-2 sm:m-3">Weryfikacja</span>
          </div>
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-90 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            />
            <span class="ml-2 sm:m-3">Finalizacja</span>
          </div>
          <div
            class="flex items-center cloudy sm:flex-col sm:justify-center sm:items-center"
          >
            <img
              :src="smallCloud"
              alt="small-cloud-svg"
              class="opacity-100 max-w-[40px] sm:max-w-[50px] md:max-w-[90px] cloud-icon"
            /><span class="ml-2 sm:m-3">Moderacja</span>
          </div>
        </div>
      </div>
      <div
        class="font-sans font-hairline text-white text-sm md:text-left sm:text-[14px] sm:w-[90%] sm:max-w-[900px] sm:m-auto sm:leading-6 md:w-[90%] md:text-[15.5px] md:max-w-[70%] md:flex md:items-center md:justify-evenly"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <p class="md:px-4 md:max-w-[50%]">
          To również jednoosobowa działalność gospodarcza mająca na celu
          wdrażanie kompleksowych rozwiązań, które wpływają na ogólną poprawę
          rozpoznawalności oraz odbioru marki, firmy czy produktu. Potrzebujesz
          kilku usług? Nie ma problemu. Napisz do mnie, a na pewno znajdziemy
          rozwiązanie.
        </p>
        <p
          class="my-4 md:my-0 md:ml-6 md:px-4 md:font-extralight md:max-w-[50%]"
        >
          Tym, co cenię sobie najbardziej przy współpracy z klientem, jest
          czysta, jasna i otwarta komunikacja oraz precyzja, terminowość i
          satysfakcja zleceniodawcy. Z tego powodu wszystkie usługi objęte są
          30-dniową gwarancją, która obejmuje dodatkowe modyfikacje i poprawki.
          Co więcej, z mojej strony mogę zagwarantować w pełni indywidualną oraz
          profesjonalną realizację wymagań klienta.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import smallCloud from '../assets/svg/small-cloud.svg'
export default {
  data () {
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
