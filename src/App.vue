<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/DesktopHeader.vue';
import Footer from './components/DesktopFooter.vue';

// ➜ ESTA LINHA FALTAVA e deixava a tela TODA BRANCA
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div>
    <Header v-if="route.path !== '/login' && route.path !== '/cadastrar'" />

    <RouterView />
    <Footer v-if="route.path !== '/login' && route.path !== '/cadastrar'" />
  </div>
</template>
