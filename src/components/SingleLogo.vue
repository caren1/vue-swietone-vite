<template>
  <div class="h-50px max-w-[28%] flex justify-center items-center m-2 p-2 sm:max-w-[16%] md:max-w-[14%] md:m-6 sm:m-4" 
  data-aos="flip-up"
    data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-anchor="#branding"
  >
      <img :src="logo.path" alt="logo.alt" class="w-[100%] h-[100%]"/>
  </div>
</template>

<script>
export default {
    props: ['logo'],
    
}
</script>

<style scoped lang="scss">
</style>