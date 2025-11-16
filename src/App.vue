<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/DesktopHeader.vue';
import Footer from './components/DesktopFooter.vue';
</script>

<template>
  <div>
    <Header></Header>
    <RouterView /> 
    <!-- Floating WhatsApp button (Tailwind) -->
<a
  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Abrir conversa WhatsApp"
  class="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-full flex items-center justify-center bg-green-600 hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-200 shadow-2xl drop-shadow-[0_8px_20px_rgba(16,185,129,0.25)] focus:outline-none focus:ring-4 focus:ring-green-300"
>
  <!-- WhatsApp SVG (keeps transparency, circular shadow follows SVG bounds) -->
  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.115.553 4.09 1.6 5.84L0 24l6.47-1.59A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.21-1.26-6.18-3.48-8.52zm-8.52 18.14c-1.9 0-3.77-.5-5.4-1.44l-.39-.22-3.84.95.98-3.72-.25-.38A9.96 9.96 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" fill="white"/>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.476-.885-.788-1.482-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.173.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.61-.918-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.877 1.213 3.074.149.198 2.095 3.2 5.076 4.487 0.709.306 1.26.489 1.69.625.71.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.287.173-1.413-.074-.125-.272-.198-.57-.347z" fill="white"/>
  </svg>
</a>

    <Footer/> 
  </div>
</template>
<style>

</style>