<template>
  <div
    class="w-full fixed z-40 bg-white text-sm general"
    :class="{ 'shadow-md': scrolled }"
  >
    <nav class="flex max-w-[1180px] mx-auto justify-between py-5 px-4 items-center">
      
      <!-- Logo -->
      <a href="#inicio" class="logo">
        <img src="../assets/icons/logo.png" alt="logo" class="w-28" />
      </a>

      <!-- MENU DESKTOP -->
      <ul class="hidden md:flex font-semibold text-purple-700/80 gap-6 items-center">
        <a href="#inicio" :class="linkClass('inicio')">Início</a>
        <a href="#sobre" :class="linkClass('sobre')">Sobre</a>
        <a href="#servicos" :class="linkClass('servicos')">Serviços</a>
        <a href="#contato" :class="linkClass('contato')">Contato</a>

        <div class="w-[280px] grid grid-cols-2">
          <router-link
            to="/login"
            class="py-2 w-32 text-center bg-purple-800/80 text-white rounded"
          >
            Entrar
          </router-link>

          <router-link
            to="/cadastrar"
            class="py-2 w-32 text-center border text-purple-800/80 border-purple-800/80 rounded"
          >
            Cadastrar
          </router-link>
        </div>
      </ul>

      <!-- Botão Mobile -->
      <button @click="menuOpen = !menuOpen" class="md:hidden flex items-center">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-purple-700/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-purple-700/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- MENU MOBILE -->
    <div
      v-if="menuOpen"
      class="md:hidden px-6 pb-6 space-y-4 text-purple-700/80 font-semibold animate-fadeIn"
    >
      <a href="#inicio" class="block" @click="closeMenu">Início</a>
      <a href="#sobre" class="block" @click="closeMenu">Sobre</a>
      <a href="#servicos" class="block" @click="closeMenu">Serviços</a>
      <a href="#contato" class="block" @click="closeMenu">Contato</a>

      <router-link
        to="/login"
        class="block text-center py-4 px-4 bg-purple-600/70 text-white"
      >
        Entrar
      </router-link>

      <router-link
        to="/cadastrar"
        class="block text-center py-3 px-4 border border-purple-600/60 text-purple-700 "
      >
        Cadastrar
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("inicio");

// Fecha menu no mobile
const closeMenu = () => (menuOpen.value = false);

// Sombra no scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
  detectSection();
};

// Detecta seção visível
const detectSection = () => {
  const sections = ["inicio", "sobre", "servicos", "contato"];

  for (const sec of sections) {
    const el = document.getElementById(sec);
    if (!el) continue;

    const rect = el.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      activeSection.value = sec;
      break;
    }
  }
};

// Classe dinâmica para links
const linkClass = (name) => {
  return activeSection.value === name
    ? "pb-1 border-b-2 border-purple-700/80 text-purple-700/80"
    : "pb-1 border-b-2 border-transparent text-gray-700 hover:border-purple-500/50 transition";
};


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  detectSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.general {
  font-family: "Open Sans", sans-serif;
}
</style>
