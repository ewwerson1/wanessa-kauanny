<template>
  <footer class="bg-gradient-to-t from-[#f8f4ff] to-white border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="space-y-4">
          <img src="../assets/icons/logo.png" alt="Logo do Site" class="w-32">

          <p class="text-gray-600">
            Espaço acolhedor para acompanhamento psicológico — atendimentos presenciais e online. Se precisar, estamos aqui para caminhar ao seu lado.
          </p>

          <div class="flex flex-col items-start gap-3">
            <a class="inline-flex items-center gap-2 text-gray-700 hover:text-[#7D3ECD]" href="tel:+558190000000">
                <img src="../assets/icons/tel.svg" alt="ícone de telefone" class="w-4">
              <span>(81) 9 8555-3709</span>
            </a>

            <a class="inline-flex items-center gap-2 text-gray-700 hover:text-[#7D3ECD]" href="mailto:contato@psicologa.com">
             <img src="../assets/icons/email.svg" alt="Ícone de email" class="w-4">
              <span>psi.wanessakauanny@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- Middle: Links úteis -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
          <div>
            <h4 class="text-gray-800 font-semibold mb-3">Navegação</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="/" class="hover:text-[#7D3ECD]">Início</a></li>
              <li><a href="/sobre" class="hover:text-[#7D3ECD]">Sobre</a></li>
              <li><a href="/servicos" class="hover:text-[#7D3ECD]">Serviços</a></li>
              <li><a href="/depoimentos" class="hover:text-[#7D3ECD]">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-gray-800 font-semibold mb-3">Atendimento</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="/contato" class="hover:text-[#7D3ECD]">Contato</a></li>
              <li><a href="/marcar-consulta" class="hover:text-[#7D3ECD]">Marcar Consulta</a></li>
              <li><a href="/faq" class="hover:text-[#7D3ECD]">Perguntas Frequentes</a></li>
            </ul>
          </div>
        </div>

        <!-- Right: Newsletter + Social -->
        <div class="space-y-4">
          <h4 class="text-gray-800 font-semibold">Receba novidades</h4>
          <p class="text-gray-600 text-sm">Inscreva-se para receber novidades e avisos sobre vagas de atendimento.</p>

          <form @submit.prevent="handleSubscribe" class="flex gap-3">
            <label for="newsletter-email" class="sr-only">Email</label>
            <input
              id="newsletter-email"
              v-model="email"
              type="email"
              placeholder="seu@email.com"
              class="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d7bfff] focus:outline-none"
              required
              aria-required="true"
            />
            <button
              :disabled="loading"
              type="submit"
              class="px-4 py-3 rounded-lg bg-[#7D3ECD] text-white font-medium hover:bg-[#6a2fc1] disabled:opacity-60 transition">
              {{ loading ? 'Enviando...' : 'Inscrever' }}
            </button>
          </form>

          <p v-if="message" :class="messageType === 'success' ? 'text-green-600' : 'text-red-600'">{{ message }}</p>

          <div class="pt-2 flex items-center gap-4">
            <!-- Social icons (use suas urls) -->
            <a aria-label="Instagram" href="#" class="p-2 rounded-md hover:bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#7D3ECD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="#7D3ECD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>

            <a aria-label="WhatsApp" href="#" class="p-2 rounded-md hover:bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M21 12.1a8.9 8.9 0 1 1-17.8 0 8.9 8.9 0 0 1 17.8 0z" stroke="#7D3ECD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.8 8.8c-.2-1.2.3-2.3 1.2-3.1L12 8l1.9 1.9L15 12l-1.5.4a2.8 2.8 0 0 1-2.6-.6L8.8 8.8z" stroke="#7D3ECD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>

            <a aria-label="Facebook" href="#" class="p-2 rounded-md hover:bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v3h3v7h3v-7h2.2l.8-3H14V6.5c0-.4.3-.5.6-.5H18V2z" stroke="#7D3ECD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom: legal / credits -->
      <div class="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {{ new Date().getFullYear() }} Clínica Wanessa. Todos os direitos reservados.</p>

        <div class="flex items-center gap-4">
          <a href="/politica-de-privacidade" class="hover:text-[#7D3ECD]">Política de Privacidade</a>
          <a href="/termos" class="hover:text-[#7D3ECD]">Termos</a>
          <span>•</span>
          <a href="https://seusiteweb.com" target="_blank" rel="noopener" class="hover:text-[#7D3ECD]">Desenvolvido por Você</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const message = ref('')
const messageType = ref('')

function validateEmail(e) {
  // validação simples
  const re = /\S+@\S+\.\S+/
  return re.test(e)
}

async function handleSubscribe() {
  message.value = ''
  messageType.value = ''
  if (!validateEmail(email.value)) {
    message.value = 'Por favor, insira um email válido.'
    messageType.value = 'error'
    return
  }

  loading.value = true
  try {
    // Aqui você pode integrar com EmailJS / API / sua ferramenta de newsletter.
    // Exemplo simulado:
    await new Promise((res) => setTimeout(res, 800))

    message.value = 'Inscrição realizada com sucesso! Obrigada.'
    messageType.value = 'success'
    email.value = ''
  } catch (err) {
    message.value = 'Erro ao inscrever. Tente novamente mais tarde.'
    messageType.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>
