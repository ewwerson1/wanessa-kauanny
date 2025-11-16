<template>
  <div class="pt-38 general px-4 pb-1 relative bg-violet-100">
   <div class="max-w-3xl mx-auto pt-10 mb-20 bg-white shadow-xl rounded-2xl p-10 border border-gray-200 relative z-10">
        <!-- DATE -->
        <div>
          <label class="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
            <span class="text-purple-600 text-xl">📅</span>
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
            <span class="text-purple-600 text-xl">⏱️</span>
            Select Time Slot
          </label>
          <div class="grid grid-cols-4 gap-3">
            <button
              v-for="time in times"
              :key="time"
              @click="form.time = time"
              :class="[
                'py-3 rounded-lg font-medium border',
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
        <div class="grid grid-cols-2 gap-4 mt-8">
          <div>
            <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">
              <span class="text-purple-600 text-lg">👤</span>
              Full Name
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              class="w-full bg-gray-100 py-3 px-4 rounded-lg"
            />
          </div>
          <div>
            <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">
              <span class="text-purple-600 text-lg">📧</span>
              Email Address
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your.email@example.com"
              class="w-full bg-gray-100 py-3 px-4 rounded-lg"
            />
          </div>
        </div>
        <!-- PHONE -->
        <div class="mt-6">
          <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <span class="text-purple-600 text-lg">📞</span>
            Phone Number
          </label>
          <input
            v-model="form.phone"
            type="text"
            placeholder="+55 (DDD) 1234-5678"
            class="w-full bg-gray-100 py-3 px-4 rounded-lg"
          />
        </div>
        <!-- MESSAGE -->
        <div class="mt-6">
          <label class="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <span class="text-purple-600 text-lg">💬</span>
            Message (Optional)
          </label>
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Write a message..."
            class="w-full bg-gray-100 py-3 px-4 rounded-lg resize-none"
          ></textarea>
        </div>
        <!-- SUBMIT BUTTON -->
        <button
          @click="submitForm"
          class="w-full mt-8 py-5 bg-violet-700/90 hover:bg-violet-700/80 cursor-pointer text-white font-semibold rounded shadow-md transition"
        >
          Confirm Appointment
        </button>
        <!-- SUCCESS ALERT -->
        <p
          v-if="successMessage"
          class="text-green-600 font-semibold text-center mt-4"
        >
          {{ successMessage }}
        </p>
    </div>
    <img src="../assets/images/texture.svg" alt="" class="absolute top-0 right-0">
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
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM"
];

const successMessage = ref("");

function submitForm() {
  if (!form.value.date || !form.value.time || !form.value.name || !form.value.email || !form.value.phone) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  // Aqui você envia para API ou backend
  console.log("Agendamento enviado:", form.value);

  successMessage.value = "Agendamento realizado com sucesso!";

  // limpar
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
</style>
