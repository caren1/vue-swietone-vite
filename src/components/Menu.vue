<template>
  <section id="menu" class="min-h-screen text-center flex justify-center items-center relative main-menu md:w-[100vw]" data-aos="flip-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

    <div class="px-6 py-4 leading-8 text-white font-serif text-2xl sm:text-4xl md:flex md:items-center md:justify-between md:w-[70vw] md:text-5xl md:text-left md:font-medium">

      <div class="options">
        <ul class="leading-relaxed md:leading-normal w-[75%] m-auto md:w-[100%]">
          <li><a href="#about" @click="menuHandler($event, '#about')">Misja</a></li>
          <li><a href="#swietone" @click="menuHandler($event, '#swietone')">O swietone</a></li>
          <li><a href="#bio" @click="menuHandler($event, '#bio')">O mnie</a></li>
          <li><a href="#projects" @click="menuHandler($event, '#projects')">Portfolio</a></li>
          <li><a href="#branding" @click="menuHandler($event, '#branding')">Branding</a></li>
          <li><a href="#footer" @click="menuHandler($event, '#footer')"> Współpraca</a></li>
        </ul>
      </div>

      <div class="my-6 w-full md:hidden">
        <img :src="mobileDivider" alt="mobile-divider-svg" class="w-100 m-auto h-4"/>
      </div>
      <div class="hidden md:block h-full ">
        <img :src="divider" alt="divider-svg" class="w-full h-full"/>
      </div>

      <div>
        <div>
          <h1 class="text-3xl md:text-5xl md:mb-4">Kontakt</h1>
          <a class="block font-sans font-hairline text-lg" href="mailto:czarnocki.w@wp.pl">czarnocki.w@wp.pl</a>
          <a class="block font-sans font-hairline text-lg" href="mailto:czarnocki.w@wp.pl">kontakt@swietone.pl</a>
        </div>

        
        <div class="my-6 text-2xl">
          <h2 class="md:text-4xl">Media</h2>
          <div class="flex justify-center items-center md:justify-start md:items-end">
            <a href="https://www.linkedin.com/in/wojciechczarnocki/" target="_blank"><img class="p-2 w-8 md:w-10" :src="linkedInIcon" alt="linkedin-icon" /></a>
            <a href="https://github.com/caren1" target="_blank"><img class="p-2 w-8 md:w-10" :src="gitIcon" alt="github-icon" /></a>
            <a href="https://www.behance.net/wojtczarny" target="_blank"><img class="p-2 w-8 md:w-11" :src="behanceIcon" alt="behance-icon"/></a>
          </div>
        </div>

      </div>
    </div>

    <div class="absolute top-11 right-8" @click="$emit('toggleMenu', false)" tabindex=0 @keypress="$emit('toggleMenu', false)">
        <div class="open-kebab">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
  </section>
</template>

<script>
import mobileDivider from "../assets/svg/mobile-divider.svg"
import divider from "../assets/svg/divider.svg"
import linkedInIcon from "../assets/svg/linkedin-icon.svg"
import gitIcon from "../assets/svg/git-icon.svg"
import behanceIcon from "../assets/svg/behance-icon.svg"

 

export default {
 data() {
     return {
         divider,
         linkedInIcon,
         gitIcon,
         behanceIcon,
         mobileDivider
     }
 },
 methods: {
   menuHandler(e, href) {
     e.preventDefault();
     this.$emit('toggleMenu', false)
     let offsetTop;
     setTimeout(() => {
       offsetTop = document.querySelector(href).offsetTop;

      scroll({
    top: offsetTop,
    behavior: "smooth"
  });
     }, 1);
     
  
   }
 }
}
</script>

<style scoped lang="scss">
li {
      border-bottom: 10px solid transparent;
      border-image: url("../assets/svg/waves.svg") 0 stretch;
      
     
     

      &:hover, &:focus {
        border-image: url("../assets/svg/waves.svg") 100 stretch;
        transition: all .35s ease-in;
        cursor: pointer;
        // transform: scale(1.02);
      }
    }

    a:hover, a:focus {  
        transform: scale(1.05);
        transition: all .2s ease-in;
        cursor: pointer;
    }
    
</style>