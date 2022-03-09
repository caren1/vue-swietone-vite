<template>
  <div class="h-50px max-w-[30%] flex justify-center items-center m-2 p-2">
      <img :src="logo.path" alt="logo.alt" class="w-[100%] h-[100%]"/>
  </div>
</template>

<script>
export default {
    props: ['logo'],
    
}
</script>

<style scoped lang="scss">
    .single-logo {
        // border: 1px solid white;
        // width: 130px;
        height: 70px;
        max-width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2em 3em;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>