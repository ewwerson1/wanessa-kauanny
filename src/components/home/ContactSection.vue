<template>
  <section id="contato" class="general pb-20 bg-gradient-to-b from-white to-[#F6ECFB]">
    <!-- Bloco principal -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-6">

      <!-- Formulário -->
      <div class="bg-white rounded-2xl shadow-md p-10 border border-purple-100">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h3>

        <form class="space-y-5">
          <div>
            <label class="text-gray-600">Nome</label>
            <input
              type="text"
              class="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-purple-500"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label class="text-gray-600">Email</label>
            <input
              type="email"
              class="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-purple-500/60"
              placeholder="Digite seu email"
            />
          </div>

          <div>
            <label class="text-gray-600">Mensagem</label>
            <textarea
              rows="5"
              class="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-purple-500/60"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>

          <button
            class="w-full bg-violet-700 text-white py-3 rounded font-semibold hover:bg-violet-700/90 transition">
            Enviar Mensagem
          </button>
        </form>
      </div>
      <div>

     
    <div class=" gap-8 max-w-[1180px] mx-auto mb-6">
      <div class="bg-white cursor-pointer p-8 rounded-2xl flex flex-col hover:bg items-center shadow-lg border border-purple-100 text-center"> 
        <img src="@/assets/images/atendimento-online.png" alt="" class="w-46"> 
        <h3 class="text-xl font-semibold text-gray-800 mt-1">Atendimento Online</h3>
        <p class="text-gray-600 mt-2">Conecte-se com segurança e conforto.</p>
      </div>
    </div>

        <!-- Infos -->
        <div class=" space-y-4">

          <div class="flex items-center bg-white p-4 rounded-xl shadow border border-purple-100">
            <img src="@/assets/icons/tel.svg" alt="Ícone de telefone" class="w-6 mr-3">
            <p class="text-gray-800 text-lg">(81) 9 8555-3709</p>
          </div>

          <div class="flex items-center bg-white p-4 rounded-xl shadow border border-purple-100">
            <img src="@/assets/icons/email.svg" alt="Ícone de email" class="w-6 mr-3">
            <p class="text-gray-800 text-lg">psi.wanessakauanny@gmail.com</p>
          </div>

          <div class="flex items-center bg-white p-4 rounded-xl shadow border border-purple-100">
             <img src="@/assets/icons/loc.svg" alt="Ícone de localização" class="w-5 mr-4">
            <p class="text-gray-800 text-lg">Atendimento 100% Online</p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

</script>
<style scoped>
.general {
  font-family: "Bitter", serif;
}
</style>