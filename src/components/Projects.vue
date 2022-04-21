<template>
  <section
    id="projects"
    class="min-h-screen flex justify-center items-center relative w-full"
  >
    <div v-if="projects" class="">
      <SingleProject
        v-for="project in projects"
        :key="project.alt"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import SingleProject from './SingleProject.vue'
import mctProject from '../assets/svg/logos/mct-project.svg'
import gswetProject from '../assets/svg/logos/gswet-project.svg'
import swietoneProject from '../assets/svg/logos/swietone-project.svg'

export default {
  components: { SingleProject },
  data () {
    return {
      projects: [
        {
          title: 'MC Trade Sp. z o.o.',
          goal: 'Realizacja dla firmy ogólnobudowlanej',
          description:
            'Zaprojektowanie brandingu od podstaw - kolorystyka, logotyp, materiały marketingowe. Projekt i stworzenie strony internetowej wraz z jej pełną responsywnością na urządzeniach mobilnych.',
          img: mctProject,
          alt: 'mc-trade-logo',
          url: 'https://mc-trade.pl'
        },
        {
          title: 'Gdyński Szpital Weterynaryjny',
          goal: 'Realizacja dla prywatnego szpitala weterynaryjnego w Gdyni',
          description:
            'Odświeżenie wizerunku, odwzorowanie i udoskonalenie logo i jego wariantów. Projekt i realizacja nowej strony internetowej wraz z jej pełną responsywnością na urządzeniach mobilnych. Cały projekt, pozytywnie wpłynął na liczbę wykonywanych połączeń, odpytań o trasę, wyświetlen profilu firmy oraz liczbę wyszukań.',
          img: gswetProject,
          alt: 'gswet-logo',
          url: 'https://gkw-gdynia-25915.web.app/'
        },
        {
          title: 'swietone.',
          goal: 'Realizacja dla własnej marki i działalności',
          description:
            'Zaprojektowanie identyfikacji wizualnej oraz materiałów marketingowych. Zaprojektowanie i stworzenie strony internetowej wraz z jej pełną responsywnością na urządzeniach mobilnych.',
          img: swietoneProject,
          alt: 'swietone-logo',
          url: 'https://swietone.pl'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
