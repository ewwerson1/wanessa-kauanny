<script setup>
  import Hero from '../components/home/HeroSection.vue';
  import About from '../components/home/AboutSection.vue';
  import Services from '../components/home/ServicesSection.vue';
  import Contact from '../components/home/ContactSection.vue';
</script>

<template>
  <main class="textured-bg py-30">
    <Hero/>
    <About/>
    <Services class="w-full" />
    <Contact/>
  </main>
</template>
<style >
  .general {
  font-family: "Bitter", serif;
}
</style>
