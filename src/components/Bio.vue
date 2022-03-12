<template>
  <section>
    <div class="min-h-screen flex justify-center relative p-6 z-5">
      <div class="leading-5 relative top-[55px] z-5 p-4">
        <h3 class="text-white text-2xl font-serif mb-4 xxs:text-xl">Wojciech Czarnocki</h3>
        <div class="text-sm">
          <p class="text-white font-sans font-thin mb-4">
          Obecnie pracuję jako Fullstack Developer w firmie Hapag Lloyd,
          wcześniej przez 2 lata pracowałem jako Junior Java Engineer, natomiast
          interesuję się również web developmentem jak i szeroko pojętym
          projektowaniem intefejsów użytkownika oraz designem.
        </p>
        <p class="text-white font-sans font-thin mb-4">
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
          <img class="max-w-[35px] align-bottom p-2 social-icon" :src="linkedInIcon" alt="linkedin-icon" />
          <img class="max-w-[35px] align-bottom p-2 social-icon" :src="gitIcon" alt="github-icon" />
          <img class="max-w-[30px] align-bottom p-1 social-icon" :src="behanceIcon" alt="behance-icon" />
        </div>
      </div>
      <div class="max-w-[100%] absolute bottom-5 right-0 -z-1">
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