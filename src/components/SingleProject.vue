<template>
  <!-- <div class="grid gap-x-4 grid-cols-2 my-6"> -->
  <div class="flex-col p-6 items-center justify-center text-center">
      <div class="w-[40%] max-w-[180px] m-auto p-4">
          <img :src="project.img" :alt="project.alt" class="w-full"/>
      </div>
      <div class="leading-5 px-2">
          <h4 class="font-serif text-croissantYellow mb-2 text-lg">{{project.title}}</h4>
          <p class="font-sans text-sm font-hairline text-white ">{{project.goal}}</p>
          <p class="font-sans text-xs font-hairline text-white my-2">{{project.description}}</p>
          <a :href="project.url" target="_blank" class="text-xs font-serif text-croissantYellow">zobacz realizację.</a>
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

