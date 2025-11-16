<template>
  <div class="pt-38 general px-4 pb-1 bg-texture relative bg-violet-100">

    <div class="max-w-3xl mx-auto pt-10 mb-20 bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-200 relative z-10">
        <!-- DATE -->
        <div>
          <label class="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">

            <!-- ÍCONE CALENDÁRIO -->
            <svg class="w-6 h-6" fill="none" stroke="#A78BFA" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8 2v4M16 2v4M3 10h18M4 5h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"/>
            </svg>

            Selecionar Data
          </label>

          <input
            type="date"
            v-model="form.date"
            class="w-full bg-gray-100 py-3 px-4 rounded-lg text-gray-700 font-medium cursor-pointer"
          />
        </div>

        <!-- TIME SLOTS -->
        <div class="mt-8">
          <label class="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">

            <!-- ÍCONE RELÓGIO -->
            <svg class="w-6 h-6" fill="none" stroke="#A78BFA" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

            Selecionar Horário
          </label>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <button
              v-for="time in times"
              :key="time"
              @click="form.time = time"
              :class="[
                'py-3 rounded-lg font-medium border text-sm md:text-base',
                form.time === time
                  ? 'bg-purple-600 text-white border-purple-700 shadow'
                  : 'bg-gray-100 text-gray-600 border-gray-200'
              ]"
            >
              {{ time }}
            </button>
          </div>
        </div>

        <!-- FULL NAME + EMAIL -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">

              <!-- ÍCONE PESSOA -->
              <svg class="w-5 h-5" fill="none" stroke="#A78BFA" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 21c0-4.4 3.6-8 9-8s9 3.6 9 8"/>
              </svg>

              Nome Completo
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Digite seu nome completo"
              class="w-full bg-gray-100 py-3 px-4 rounded-lg"
            />
          </div>

          <div>
            <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">

              <!-- ÍCONE EMAIL -->
              <svg class="w-5 h-5" fill="none" stroke="#A78BFA" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 4h16v16H4z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 4l8 8 8-8"/>
              </svg>

              Endereço de E-mail
            </label>

            <input
              v-model="form.email"
              type="email"
              placeholder="seu.email@exemplo.com"
              class="w-full bg-gray-100 py-3 px-4 rounded-lg"
            />
          </div>
        </div>

        <!-- PHONE -->
        <div class="mt-6">
          <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">

            <!-- ÍCONE TELEFONE -->
            <svg class="w-5 h-5" fill="none" stroke="#A78BFA" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.7 19.7 0 01-6-6A19.8 19.8 0 014.11 4.1 2 2 0 016.1 2h3a2 2 0 012 1.72 13 13 0 00.7 2.79 2 2 0 01-.45 2L9.2 10.8a16 16 0 006 6l2.16-2.16a2 2 0 012-.45 13 13 0 002.79.7A2 2 0 0122 16.92z"/>
            </svg>

            Telefone
          </label>

          <input
            v-model="form.phone"
            type="text"
            placeholder="(DDD) 00000-0000"
            class="w-full bg-gray-100 py-3 px-4 rounded-lg"
          />
        </div>

        <!-- MESSAGE -->
        <div class="mt-6">
          <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">

            <!-- ÍCONE MENSAGEM -->
            <svg class="w-5 h-5" fill="none" stroke="#A78BFA" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 11.5a8.5 8.5 0 11-3.8-7m3.8 3.5V4h-7"/>
            </svg>

            Mensagem (Opcional)
          </label>

          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Escreva sua mensagem..."
            class="w-full bg-gray-100 py-3 px-4 rounded-lg resize-none"
          ></textarea>
        </div>

        <!-- SUBMIT BUTTON -->
        <button
          @click="submitForm"
          class="w-full mt-8 py-5 bg-violet-700/90 hover:bg-violet-700/80 cursor-pointer text-white font-semibold rounded shadow-md transition"
        >
          Confirmar Agendamento
        </button>

        <!-- SUCCESS ALERT -->
        <p
          v-if="successMessage"
          class="text-green-600 font-semibold text-center mt-4"
        >
          {{ successMessage }}
        </p>
    </div>

    <img 
      src="@/assets/images/texture.svg" 
      alt="" 
      class="absolute top-0 right-0 w-40 opacity-60 md:w-90"
    >
  </div>
</template>


<script setup>
import { ref } from "vue";

const form = ref({
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  message: ""
});

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00"
];

const successMessage = ref("");

function submitForm() {
  if (!form.value.date || !form.value.time || !form.value.name || !form.value.email || !form.value.phone) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  console.log("Agendamento enviado:", form.value);

  successMessage.value = "Agendamento realizado com sucesso!";

  form.value = {
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  };
}
</script>

<style scoped>
.general {
  font-family: "Bitter", serif;
}
.bg-texture {
  background:
    url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5'/%3E%3CfeDiffuseLighting lighting-color='white' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='55'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.1'/%3E%3C/svg%3E");
  background-color: #f3efff;
  background-size: 300px;
}
</style>
