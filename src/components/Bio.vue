<template>
  <section
    id="bio"
    class="min-h-screen flex items-center justify-center sm:relative"
  >
    <div class="flex-col relative z-5 sm:flex sm:flex-row sm:static">
      <div
        class="leading-5 relative z-5 px-8 h-full sm:max-w-[65%] sm:mb-16 sm:px-12 md:max-w-[50%] md:mb-0 md:ml-20"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3
          class="text-white text-2xl font-serif mb-4 xxs:text-xl sm:text-3xl md:text-5xl text-croissantYellow"
        >
          Wojciech Czarnocki
        </h3>
        <div class="text-[13px] md:text-[16px]">
          <p class="text-white font-sans font-extralight">
            Obecnie pracuję na stanowisku Fullstack Developer w firmie
            Hapag-Lloyd, gdzie rozwijam platformę integrującą różnego rodzaju
            API. Wcześniej, przez 3 lata pracowałem jako Junior Java Engineer
            oraz Data Analyst, natomiast interesuję się również web
            development'em, jak i szeroko pojętym projektowaniem interfejsów
            użytkownika oraz designem.
          </p>
          <p class="text-white font-sans font-extralight my-6">
            Moje realizacje wyróżniają się niestandardowym, nowoczesnym i
            minimalistycznym wyglądem, skrojonym pod oczekiwania klienta. Przy
            każdym projekcie dbam o każdy detal, dzięki czemu tworzę szybkie,
            zoptymalizowane i responsywne strony internetowe.
          </p>
          <p class="text-white font-sans font-extralight md:mb-4">
            Pracując nad każdym projektem, dobieram stosowne technologie, które
            w jak najlepszym stopniu sprostają wymaganiom.
          </p>
        </div>

        <div class="flex items-center">
          <a
            href="https://www.linkedin.com/in/wojciechczarnocki/"
            target="_blank"
            ><img class="w-6 p-1" :src="linkedInIcon" alt="linkedin-icon"
          /></a>
          <a href="https://github.com/caren1" target="_blank"
            ><img class="p-1 w-6 mx-2" :src="gitIcon" alt="github-icon"
          /></a>
          <a href="https://www.behance.net/wojtczarny" target="_blank"
            ><img class="p-1 w-7" :src="behanceIcon" alt="behance-icon"
          /></a>
        </div>
      </div>
      <div
        class="max-w-[100%] relative bottom-5 right-0 -z-1 sm:absolute sm:bottom-40 sm:max-w-[65%] md:max-w-[60%] md:bottom-16"
      >
        <img
          :src="selfPortrait"
          alt="wojciech-czarnocki-portrait "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-anchor="#bio"
        />
      </div>
    </div>
  </section>
</template>

<script>
import linkedInIcon from '../assets/svg/linkedin-icon.svg'
import gitIcon from '../assets/svg/git-icon.svg'
import behanceIcon from '../assets/svg/behance-icon.svg'
import selfPortrait from '../assets/svg/me.svg'

export default {
  data () {
    return {
      linkedInIcon,
      gitIcon,
      behanceIcon,
      selfPortrait
    }
  }
}
</script>

<style>
.social-icon:hover {
  transform: scale(1.06);
  transition: all 0.2s ease-in;
  cursor: pointer;
}
</style>
