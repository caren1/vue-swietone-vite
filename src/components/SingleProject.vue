<template>
  <!-- <div class="grid gap-x-4 grid-cols-2 my-6"> -->
  <div class="flex-col p-2 items-center justify-center text-center sm:flex sm:flex-row sm:text-right md:max-w-[90%] md:m-auto" data-aos="fade-right"
     data-aos-offset="10"
     data-aos-easing="ease-in-sine">
      <div class="w-[40%] max-w-[180px] m-auto p-4 sm:p-2 sm:m-6">
          <img :src="project.img" :alt="project.alt" class="w-full"/>
      </div>
      <div class="leading-5 px-2 max-w-[80%] m-auto sm:m-0 sm:max-w-[55%] md:max-w-[50%] md:m-0">
          <h4 class="font-serif text-croissantYellow mb-2 text-lg sm:text-xl sm:text-left md:text-2xl">{{project.title}}</h4>
          <p class="font-sans text-sm font-light text-white sm:text-[14px] sm:text-left md:text-[16px] md:mb-0">{{project.goal}}</p>
          <p class="font-sans text-xs font-thin text-white my-4 sm:text-[14px] sm:text-left sm:mb-4 md:text-[15px] md:leading-5">{{project.description}}</p>
          <div class="md:flex md:items-center md:justify-between">
            <img :src="waveLink" alt="wave-link" class="hidden sm:hidden md:block md:w-[72%] md:mr-2 md:py-4 link-wave">
            <a :href="project.url" target="_blank" class="text-xs font-serif text-croissantYellow md:text-[15px] min-w-[140px]">zobacz realizację.</a>   
          </div>
      </div>
      
  </div>
</template>

<script>
import waveLink from '../assets/svg/wave-link.svg'
export default {
    props: ['project'],
    data() {
        return {
            waveLink
        }
    }
}
</script>

<style lang="scss" scoped>

    @media (max-width:1000px) {
        
    
    a {
        animation: clickMe 4s ease-in infinite;
        padding-bottom: 4px;
        border-bottom: 6px solid transparent;
        border-image: url("../assets/svg/waves.svg") 100 stretch;
    
    }
    

    a:hover, a:focus {
        transform: scale(1.02);
        transition: all .25s ease-in;
        text-decoration: none;
        cursor: pointer;
    }

    @keyframes clickMe {
      0% {
        border-image: url("../assets/svg/waves.svg") 000 stretch;
        transition: all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      50% {
        border-image: url("../assets/svg/waves.svg") 100 stretch;
        transition: all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      100% {
        border-bottom: 6px solid transparent;
        border-image: url("../assets/svg/waves.svg") 000 stretch;
      }
    }
    }

</style>

