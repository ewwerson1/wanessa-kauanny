<template>
  <div class="general h-screen w-full grid grid-rows-[auto_1fr]">

    <!-- MINI MENU SUPERIOR -->
    <div class="w-full px-6 py-4 fixed bg-transparent z-50">
      <div class="flex items-center justify-between max-w-[1180px] mx-auto">
        <router-link to="/" class="flex items-center gap-2">
          <img src="../assets/icons/logo.png" class="w-34 py-5" alt="Logo" />
        </router-link>

        <router-link
          to="/"
          class="text-gray-800 font-semibold hover:text-purple-900 transition"
        >
          ← Voltar para página inicial
        </router-link>
      </div>
    </div>

    <!-- CONTEÚDO PRINCIPAL -->
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">

      <!-- LOGIN -->
      <div class="max-w-2xl w-full mx-auto flex flex-col justify-center px-10 md:px-20">
        <h1 class="text-3xl text-gray-800 font-bold mb-6">Bem-vindo(a)</h1>
        <p class="text-gray-600 mb-8">Faça login para continuar.</p>

        <form @submit.prevent="login" class="w-full flex flex-col space-y-5">
          <div>
            <label class="text-sm font-medium">Email</label>
            <input 
              v-model="email"
              type="email"
              class="w-full mt-1 p-3 border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none "
              placeholder="seuemail@email.com"
            />
          </div>

          <div>
            <label class="text-sm font-medium">Senha</label>
            <input 
              v-model="senha"
              type="password"
              class="w-full mt-1 p-3 border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none "
              placeholder="••••••••"
            />
          </div>

          <button 
            class="w-full py-3 mt-2 bg-violet-600 text-white font-semibold hover:bg-violet-700 cursor-pointer transition">
            Entrar
          </button>

          <router-link to="/cadastrar" class="text-sm text-purple-600 hover:underline text-center">
            Esqueceu a senha?
          </router-link>
        </form>
      </div>

      <!-- LOTTIE ANIMATION - Psicologia / Relaxamento -->
      <div class="hidden md:flex items-center justify-center bg-purple-200 relative overflow-hidden">
        <!-- Degradê de fundo -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 opacity-40 pointer-events-none"></div>

        <!-- Granulado animado -->
        <div class="absolute inset-0 pointer-events-none grain-animation"></div>

        <!-- Lottie -->
        <div ref="lottieContainer" class="w-[80%] h-[80%] relative z-10"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import lottie from "lottie-web";

const email = ref("");
const senha = ref("");

function login() {
  alert("Login enviado!");
}

const lottieContainer = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/animations/yoga.json" // JSON que você colocou na pasta public/animations
  });
});
</script>

<style scoped>
/* Granulado animado CSS */
@keyframes grainAnim {
  0% { transform: translate(0,0); opacity: 5; }
  50% { transform: translate(5px,5px); opacity: 5; }
  100% { transform: translate(0,0); opacity: 5; }
}

.grain-animation {
  background-image: 
    radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 4px 3px; /* densidade do granulado */
  animation: grainAnim 1s infinite linear;
  z-index: 20;
}
</style>
