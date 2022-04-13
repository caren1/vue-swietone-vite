<template>
  <Layout v-if="!isMenuOpen" :menuState="isMenuOpen">
    <Navbar @toggle-Menu="isMenuOpen = $event"/>
    <Home />
    <About />
    <Swietone />
    <Bio />
    <Projects />
    <Logos />
    <Footer />
  </Layout>
  <Layout :menuState="isMenuOpen" v-else>
    <Menu @toggle-Menu="isMenuOpen = $event" />
  </Layout>
  
</template>

<script >
import Layout from './components/Layout.vue'
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue';
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Swietone from './components/Swietone.vue';
import Bio from './components/Bio.vue';
import Projects from "./components/Projects.vue"
import Logos from './components/Logos.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Layout, Home, Navbar, Menu, About, Swietone, Bio, Projects, Logos, Footer },
    data() {
      return{
        isMenuOpen: false
      }
    }
}
</script>