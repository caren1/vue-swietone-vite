<template>
  <section class="min-h-screen flex justify-center items-center relative w-full" id="projects">
    <div class="" v-if="projects">
      <SingleProject
        :project="project"
        v-for="project in projects"
        :key="project.alt"
      />
    </div>
  </section>
</template>

<script>
import SingleProject from "./SingleProject.vue"
import mctProject from "../assets/svg/logos/mct-project.svg"
import gswetProject from "../assets/svg/logos/gswet-project.svg"
import swietoneProject from "../assets/svg/logos/swietone-project.svg"

export default {
    components: { SingleProject },
    data() {
        return {
            projects: [
                {
                    title: "MC Trade Sp. z o.o.",
                    goal: "Realizacja dla klienta biznesowego - firma ogólnobudowlana",
                    description: "Zbudowanie całego brandingu, zaprojektowanie logo oraz materiałów marketingowych. Projekt i stworzenie strony internetowej wraz z jej pełną responsywnością na urządzeniach mobilnych.",
                    img: mctProject,
                    alt: "mc-trade-logo",
                    url: "https://mc-trade.pl"
                },
                {
                    title: "Gdyński Szpital Weterynaryjny",
                    goal: "Realizacja dla klienta biznesowego - prywatny szpital weterynaryjny w Gdyni",
                    description: "Odświeżenie logotypu oraz wizerunku, odwzorowanie i udoskonalenie logo i jego wariantów. Projekt i stworzenie strony internetowej wraz z jej pełną responsywnością na urządzeniach mobilnych.",
                    img: gswetProject,
                    alt: "gswet-logo",
                    url: "https://gkw-gdynia-25915.web.app/"
                },
                {
                    title: "swietone.",
                    goal: "Realizacja dla własnej działalności",
                    description: "Zaprojektowanie identyfikacji wizualnej oraz brandingu. Zaprojektowanie i stworzenie strony internetowej wraz z jej pełną responsywwnością na urządzeniach mobilnych.",
                    img: swietoneProject,
                    alt: "swietone-logo",
                    url: "https://swietone.pl"
                },
                
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

</style>


