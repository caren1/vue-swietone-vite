<template>
  <section id="bio" class="min-h-screen flex items-center justify-center sm:relative">
    <div class=" flex-col relative z-5 sm:flex sm:flex-row sm:static">
      <div class="leading-5 relative z-5 px-8 h-full sm:max-w-[65%] sm:mb-16 sm:px-12 md:max-w-[50%] md:mb-0 md:ml-16">
        <h3 class="text-white text-2xl font-serif mb-4 xxs:text-xl sm:text-3xl md:text-4xl">Wojciech Czarnocki</h3>
        <div class="text-sm md:text-[16px]">
          <p class="text-white font-sans font-thin">
          Obecnie pracuję jako Fullstack Developer w firmie Hapag Lloyd,
          wcześniej przez 2 lata pracowałem jako Junior Java Engineer, natomiast
          interesuję się również web developmentem jak i szeroko pojętym
          projektowaniem intefejsów użytkownika oraz designem.
        </p>
        <p class="text-white font-sans font-thin my-6" >
          Moje realizacje wyróżniają się niestandarowym, nowoczesnym i
          minimalistycznym wyglądem, skrojonym pod oczekiwania klienta. Przy
          każdym projekcie dbam o każdy detal, dzięki czemu tworzę szybkie,
          zoptymalizowane i responsywne strony internetowe.
        </p>
        <p class="text-white font-sans font-thin">
          Pracując nad każdym projektem, dobieram stosowne technologie, które w
          jak najlepszym stopniu sprostają wymaganiom.
        </p>
        </div>
        
        <div class="flex my-2">
          <img class="w-6 p-1 social-icon" :src="linkedInIcon" alt="linkedin-icon" />
          <img class="mx-2 p-1 w-6 social-icon" :src="gitIcon" alt="github-icon" />
          <img class="w-7 p-1 social-icon" :src="behanceIcon" alt="behance-icon" />
        </div>
      </div>
      <div class="max-w-[100%] relative bottom-5 right-0 -z-1 sm:absolute sm:bottom-40 sm:max-w-[65%] md:max-w-[60%] md:bottom-16">
        <img :src="selfPortrait" alt="wojciech-czarnocki-portrait -z-1" />
      </div>
    </div>
  </section>
</template>

<script>

import linkedInIcon from "../assets/svg/linkedin-icon.svg";
import gitIcon from "../assets/svg/git-icon.svg";
import behanceIcon from "../assets/svg/behance-icon.svg";
import selfPortrait from "../assets/svg/me.svg";

export default {
  data() {
    return {
      linkedInIcon,
      gitIcon,
      behanceIcon,
      selfPortrait
    };
  },
};
</script>

<style>
  .social-icon:hover {
    transform: scale(1.06);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
</style>