<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <h1 class="font-sans text-2xl font-bold underline">{{ msg }}</h1>
  <h2 class="font-serif">{{ msg }}</h2>
</template>

<style scoped>
</style>
