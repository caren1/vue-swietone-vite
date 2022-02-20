<template>
  <section>
    <div class="min-h-screen flex justify-center items-center relative p-6">
      <div class="leading-6 relative top-[-55px] ">
        <h3 class="text-white text-3xl font-serif mb-2">Wojciech Czarnocki</h3>
        <p class="text-white text-md font-sans font-light mb-4">
          Obecnie pracuję jako Fullstack Developer w firmie Hapag Lloyd,
          wcześniej przez 2 lata pracowałem jako Junior Java Engineer, natomiast
          interesuję się również web developmentem jak i szeroko pojętym
          projektowaniem intefejsów użytkownika oraz designem.
        </p>
        <p class="text-white text-md font-sans font-light mb-4">
          Moje realizacje wyróżniają się niestandarowym, nowoczesnym i
          minimalistycznym wyglądem, skrojonym pod oczekiwania klienta. Przy
          każdym projekcie dbam o każdy detal, dzięki czemu tworzę szybkie,
          zoptymalizowane i responsywne strony internetowe.
        </p>
        <p class="text-white text-md font-sans font-light">
          Pracując nad każdym projektem, dobieram stosowne technologie, które w
          jak najlepszym stopniu sprostają wymaganiom.
        </p>
        <div class="flex mt-2">
          <img class="max-w-[35px] align-bottom p-2" :src="linkedInIcon" alt="linkedin-icon" />
          <img class="max-w-[35px] align-bottom p-2" :src="gitIcon" alt="github-icon" />
          <img class="max-w-[30px] align-bottom p-1" :src="behanceIcon" alt="behance-icon" />
        </div>
      </div>
      <div class="max-w-[80%] absolute bottom-5 right-0">
        <img :src="selfPortrait" alt="wojciech-czarnocki-portrait" />
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

</style>