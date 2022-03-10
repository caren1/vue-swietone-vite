<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Layout from './components/Layout.vue'
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Intro from './components/Intro.vue';
import Bio from './components/Bio.vue';
import Logos from './components/Logos.vue';
import Footer from './components/Footer.vue';
import Swietone from './components/Swietone.vue';
</script>

<template>
  <Layout>
    <Intro />
    <Navbar />
    <Home />
    <About />
    <Swietone />
    <Bio />
    <Logos />
    <Footer />
  </Layout>
</template>

<style>

</style>
