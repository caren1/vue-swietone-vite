<template>
  <!-- <div class="grid gap-x-4 grid-cols-2 my-6"> -->
  <div class="flex-col p-6 items-center justify-center text-center sm:flex sm:flex-row sm:text-right md:max-w-[90%] md:m-auto">
      <div class="w-[40%] max-w-[180px] m-auto p-4 sm:p-2 sm:m-6">
          <img :src="project.img" :alt="project.alt" class="w-full"/>
      </div>
      <div class="leading-5 px-2 max-w-[80%] m-auto sm:m-0 sm:max-w-[55%] md:max-w-[45%] md:m-0">
          <h4 class="font-serif text-croissantYellow mb-2 text-lg sm:text-xl sm:text-left md:text-2xl">{{project.title}}</h4>
          <p class="font-sans text-sm font-thin text-white sm:text-[14px] sm:text-left md:text-[16px] md:mb-0">{{project.goal}}</p>
          <p class="font-sans text-xs font-thin text-white my-2 sm:text-[14px] sm:text-left sm:mb-5 md:text-[16px] md:leading-5">{{project.description}}</p>
          <a :href="project.url" target="_blank" class="text-xs font-serif text-croissantYellow md:text-[15px]">zobacz realizację.</a>
      </div>
      
  </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style lang="scss" scoped>
    a:hover, a:focus {
        transform: scale(1.08);
        transition: all .25s ease-in;
        cursor: pointer;
    }
</style>

