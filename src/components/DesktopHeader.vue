<template>
  <div class="w-full fixed z-40 bg-white text-sm general" :class="{'shadow-md': scrolled}">
    <nav class="flex max-w-[1180px] mx-auto justify-between py-5 px-4 items-center">
      
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="../assets/icons/logo.png" alt="logo" class="w-28">
      </router-link>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex font-semibold text-gray-700 gap-6 items-center">
        <router-link to="/">Inicio</router-link>
        <router-link to="/sobre">Sobre</router-link>
        <router-link to="/servicos">Serviços</router-link>
        <router-link to="/depoimentos">Depoimentos</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/agendar-consulta"
          class="py-2 px-4 bg-purple-800/80 text-white"
        >
          Marcar Consulta
        </router-link>
      </ul>

      <!-- Botão Mobile -->
      <button @click="menuOpen = !menuOpen" class="md:hidden flex items-center">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- MENU MOBILE DROPDOWN -->
    <div
      v-if="menuOpen"
      class="md:hidden px-6 pb-6 space-y-4 text-gray-700 font-semibold animate-fadeIn"
    >
      <router-link to="/" class="block">Inicio</router-link>
      <router-link to="/sobre" class="block">Sobre</router-link>
      <router-link to="/servicos" class="block">Serviços</router-link>
      <router-link to="/depoimentos" class="block">Depoimentos</router-link>
      <router-link to="/contato" class="block">Contato</router-link>

      <router-link
        to="/agendar-consulta"
        class="block text-center py-4 px-4 bg-purple-600/70 rounded-xl text-white"
      >
        Marcar Consulta
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

// Detecta scroll para adicionar sombra
const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.general{
   font-family: "Open Sans", sans-serif;
}
</style>
