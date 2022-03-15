<template>
  <footer class="min-h-screen flex justify-center items-center relative p-6" id="footer">
    <div class="flex-col w-100 align-center justify-around p-2 min-h-[70vh] p-3">
      <div class="font-serif">
        <h4 class="text-4xl text-white mb-2 text-right">
          Od <span class="text-croissantYellow">brandingu,</span><br />
          aż po <span>stronę!</span>
        </h4>
      </div>
      <div class="divider hidden">
        <img :src="divider" alt="divider-svg" />
      </div>
      <div class="partnership text-right text-white">
        <h6 class="text-4xl text-white my-4">Współpraca?</h6>
        <p class="text-sm text-white font-light font-sans max-w-[90%] ml-auto p-1">
          Jeżeli są Państwo zainteresowani skorzystaniem z naszych usług,
          prosimy kontaktować się telefonicznie bądź mailowo. Z przyjemnością
          odpowiemy na wszelkie pytania i znajdziemy odpowiednie rozwiązanie.
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

      <div class="mt-8">
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
        <div class="absolute bottom-6 right-6 max-w-[10%]">
          <a href="#home"><img :src="arrow" alt="back-to-top-arrow-icon" class="w-100"/></a>
        </div>
  </footer>
</template>

<script>
import divider from "../assets/svg/divider.svg"
import phoneCloud from "../assets/svg/phone-cloud.svg"
import mailCloud from "../assets/svg/mail-cloud.svg"
import arrow from "../assets/svg/arrow.svg"

export default {
  data() {
    return {
      divider,
      phoneCloud,
      mailCloud,
      arrow
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