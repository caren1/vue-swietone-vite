<template>
  <section class="min-h-screen flex justify-center items-center relative w-full" id="branding">
    <div class="flex flex-wrap justify-center lg:justify-center items-center relative max-w-[85%] h-100 sm:max-w-[90%] md:max-w-[70%]" v-if="logos" 
     >
      <SingleLogo
        :logo="logo"
        v-for="logo in logos"
        :key="logo.alt"
      />
    </div>
  </section>
</template>

<script>
import mctLogo from "../assets/svg/logos/mct.svg";
import w2Logo from "../assets/svg/logos/w2.svg";
import moonLogo from "../assets/svg/logos/moon.svg";
import zsipsLogo from "../assets/svg/logos/zsips.svg";
import theflierLogo from "../assets/svg/logos/theflier.svg";
import torchLogo from "../assets/svg/logos/torch.svg"
import w1Logo from "../assets/svg/logos/w1.svg"
import swietoneLogo from "../assets/svg/logos/swietone.svg"
import gswetLogo from "../assets/svg/logos/gswet.svg"
import w3Logo from "../assets/svg/logos/w3.svg"
import trenerLogo from "../assets/svg/logos/trener.svg"
import gswetstoreLogo from "../assets/svg/logos/gswetstore.svg"
import elsafeLogo from "../assets/svg/logos/elsafe.svg"


import SingleLogo from './SingleLogo.vue'
export default {
  components: { SingleLogo },
  data() {
    return {
      logos: [
        {
          alt: "gswet-logo",
          path: gswetLogo,
        },
          {
            alt: "mctrade-logo",
            path: mctLogo,
          },
        {
          alt: "w2-logo",
          path: w2Logo,
        },
          {
            alt: "elsafe-logo",
            path: elsafeLogo,
          },
        {
          alt: "moon-logo",
          path: moonLogo,
        },
        {
          alt: "zsips-logo",
          path: zsipsLogo,
        },
        {
          alt: "theflier-logo",
          path: theflierLogo,
        },
        {
          alt: "torch-logo",
          path: torchLogo,
        },
        {
          alt: "w1-logo",
          path: w1Logo,
        },
        {
          alt: "swietone-logo",
          path: swietoneLogo,
        },
        {
          alt: "w3-logo",
          path: w3Logo,
        },
        {
          alt: "trener-logo",
          path: trenerLogo,
        },
        {
          alt: "gswet.store-logo",
          path: gswetstoreLogo,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
