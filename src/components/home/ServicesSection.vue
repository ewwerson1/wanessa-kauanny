<template>
  <div class="max-w-[1180px] py-12 mx-auto general px-4">
    <h1 class="text-gray-700 text-4xl text-center font-bold">
      Nossos <span class="text-violet-800/70">serviços</span> de atendimento
    </h1>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(item, i) in services"
        :key="i"
        class="bg-transparent rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:scale-[1.03]"
      >
        <!-- usa a URL que já está no objeto -->
        <img :src="item.img" :alt="item.title" class="w-32 mb-4 object-contain">

        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ item.title }}</h2>
        <p class="text-gray-600">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Gera URLs das imagens residindo em src/assets/icons/
// Ajuste os caminhos se seu arquivo estiver em outra pasta.
// Exemplos:
// new URL('../assets/icons/card-1.png', import.meta.url).href
// new URL('/src/assets/icons/card-1.png', import.meta.url).href

const services = [
  {
    img: new URL('../../assets/icons/card-1.png', import.meta.url).href,
    title: "Terapia Individual",
    desc: "Atendimento focado no autoconhecimento, saúde emocional e crescimento pessoal."
  },
  {
    img: new URL('../../assets/icons/card-3.png', import.meta.url).href,
    title: "Terapia Familiar",
    desc: "Apoio para famílias desenvolverem vínculos saudáveis e melhorarem dinâmicas internas."
  },
  {
    img: new URL('../../assets/icons/card-4.png', import.meta.url).href,
    title: "Terapia Infantil",
    desc: "Acompanhamento psicológico para crianças com foco emocional e comportamental."
  },
]

// Se preferir usar URLs externas (CDN), basta colocar a string da URL em item.img,
// por exemplo: img: 'https://example.com/card-1.png'
</script>

<style scoped>
.general {
  font-family: "Bitter", serif;
}
</style>
