<template>
  <footer class="min-h-screen flex justify-center items-center relative p-6 sm:p-10 md:max-w-[1200px] md:m-auto" id="footer">

    <div class="flex-col w-100 align-center justify-around p-3 min-h-[70vh] sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:w-full footer-info" >
      <div class="font-serif sm:w-[50%] sm:flex-col sm:items-center sm:justify-center md:max-w-[45%] md:px-6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h4 class="text-4xl text-white text-right sm:text-right sm:text-3xl md:text-5xl">
          Od <span class="text-croissantYellow">brandingu,</span><br />
          aż po <span>stronę!</span>
        </h4>
        <div class="mt-12 ml-6 hidden sm:inline-block md:mt-16">
            <h5 class="text-4xl text-croissantYellow">swietone.</h5>
                    <ul class="list-none text-sm text-white font-sans font-hairline leading-5"> 
                        <li>NIP: 5783130795</li>
                        <li>kontakt@swietone.pl</li>
                        <li>czarnocki.w@wp.pl</li>
                        <li>Wojciech Czarnocki</li>
                        <li>(+48) 513 192 155</li>
                    </ul>
        </div>
      </div>

      <div class="divider hidden sm:block sm:mx-6 h-[550px] md:mx-10" data-aos="flip-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img :src="divider" alt="divider-svg" class="h-full"/>
      </div>

      <div class="partnership text-right mt-10 text-white sm:w-[50%] md:max-w-[50%] md:px-8" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h6 class="text-4xl text-white my-4 md:text-5xl">Współpraca?</h6>
        <p class="text-sm text-white font-light font-sans max-w-[90%] ml-auto p-1 sm:max-w-full md:text-[16px]">
          Jeżeli jesteś zainteresowany(a) którąkolwiek z moich usług,
          proszę skontaktuj się telefonicznie bądź mailowo. Z przyjemnością
          odpowiem na wszelkie pytania i znajdę odpowiednie rozwiązanie.
        </p>
        <div class="flex ml-auto w-100 justify-end my-2">
        <a href="tel:+48513192155"
          ><img :src="phoneCloud" alt="phone-cloud-svg" class="p-2"
        /></a>
        <a href="mailto:czarnocki.w@wp.pl"
          ><img :src="mailCloud" alt="mail-cloud-svg" class="p-2"
        /></a>
        </div>
      </div>

      <div class="mt-8 sm:hidden" data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
     >
            <h5 class="text-4xl text-croissantYellow">swietone.</h5>
                    <ul class="list-none text-sm text-white font-sans font-hairline leading-5"> 
                        <li>NIP: 5783130795</li>
                        <li>kontakt@swietone.pl</li>
                        <li>czarnocki.w@wp.pl</li>
                        <li>Wojciech Czarnocki</li>
                        <li>(+48) 513 192 155</li>
                    </ul>
        </div>
    </div>
        <p class="absolute bottom-6 text-center font-sans text-white font-hairline opacity-50">
          powered by <br/><span class="font-serif font-light">swietone.</span>
        </p>
  </footer>
</template>

<script>
import divider from "../assets/svg/divider.svg"
import phoneCloud from "../assets/svg/phone-cloud.svg"
import mailCloud from "../assets/svg/mail-cloud.svg"

export default {
  data() {
    return {
      divider,
      phoneCloud,
      mailCloud,
    };
  },
  
};
</script>

<style scoped>
    a:hover, a:focus {
        transform: scale(1.08);
        transition: all .25s ease-in;
        cursor: pointer;
    }
</style>