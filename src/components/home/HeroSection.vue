<template>
  <div class="mx-auto max-w-[1180px] z-20 px-4 py-28 general textured-bg rounded-xl">
    <div class="rounded-xl flex flex-col md:flex-row items-center justify-between gap-12 p-4 md:p-8 w-full">

      <!-- TEXTOS -->
      <div class="font-bold max-w-full md:max-w-[600px] text-left">
        <h1 class="text-4xl md:text-6xl text-gray-800 leading-tight">
          Cuidar da sua saúde
        </h1>

        <h2 class="text-4xl md:text-4xl text-purple-700/50 mt-3">
          É o melhor investimento
        </h2>

        <p class="mt-4 font-normal text-gray-700">
          Cuidar da sua saúde é o início para uma vida feliz e próspera. Através de atendimentos online ou presencialmente na nossa clínica, você pode mudar o rumo da sua vida. Conte com a gente.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <router-link
            to=""
            class="py-4 w-full sm:w-60 text-center bg-violet-800/80 text-white"
          >
            Agende sua Consulta
          </router-link>

          <router-link
            to=""
            class="py-4 w-full sm:w-60 text-center border border-violet-800/80 text-violet-800"
          >
            Saiba Mais
          </router-link>
        </div>
      </div>

      <!-- IMAGEM (oculta no mobile) -->
      <div class="relative hidden md:flex justify-center">
        <img
          src="../../assets/images/bg.png"
          alt=""
          class="z-10 w-[400px] rounded-xl"
        />

        <div
          class="absolute shadow-2xl rounded-xl py-4 px-6 bg-white z-20 -left-20 -bottom-10"
        >
          <h1 class="text-3xl font-bold text-violet-800/60">100%</h1>
          <p class="text-gray-700 font-bold">Confiável</p>
        </div>
      </div>
    </div>
    <div class="mt-3 w-auto ">
      <div>

      </div>
    </div>
  </div>
</template>
<style scoped>
  .general {
    font-family: "Bitter", serif;
  }

/* Textura moderna e visível */
.textured-bg {
  /* Gradient base suave */
  background: linear-gradient(135deg, #f5f7fa 0%, #e0e7ff 100%);

  /* Linhas diagonais marcantes */
  background-image: 
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.05) 2px,
      transparent 2px,
      transparent 20px
    );
  
  /* Combina o gradiente com as linhas */
  background-blend-mode: overlay;
}
</style>