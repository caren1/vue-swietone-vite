<template>
  <div class="h-50px max-w-[28%] flex justify-center items-center m-2 p-2">
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