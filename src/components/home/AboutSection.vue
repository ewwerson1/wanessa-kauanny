<template>
    <div class="bg-gray-50 general bg-texture">
        
        <div class="mx-auto max-w-[1180px] px-12 md:pt-6 py-12 flex items-center">

            <!-- FOTO (agora some no mobile) -->
            <div class="hidden md:block">
                <img src="../../assets/images/sobre.png" alt="Foto da psicóloga" class="rounded-2xl w-[300px]">
            </div>

            <!-- TEXTO (agora sempre text-start) -->
            <div class="pl-10 max-w-[700px] relative text-start">
                <h1 class="text-violet-800/70 text-4xl font-extrabold">Sobre mim</h1>

                <p class="text-lg text-gray-600 mt-3">
                    Olá! Meu nome é Wanessa, sou psicóloga e dedico meu trabalho a oferecer um espaço seguro,
                    acolhedor e livre de julgamentos.
                    Acredito que cada pessoa carrega uma história única, e é exatamente essa singularidade que guia
                    meu olhar clínico. Trabalho com escuta sensível, respeito e empatia, ajudando meus pacientes a
                    compreenderem suas emoções, desenvolverem recursos internos e encontrarem novas possibilidades
                    diante dos desafios do dia a dia.
                    Se você busca apoio emocional, autoconhecimento ou deseja iniciar um processo de transformação
                    pessoal, estou aqui para caminhar ao seu lado.
                </p>

                <img src="../../assets/images/aspas.png"
                    alt="aspas"
                    class="absolute top-[-120px] right-[-0px] w-36 opacity-40">
            </div>

        </div>
    </div>
</template>

<style scoped>
.bg-texture {
  background:
    url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5'/%3E%3CfeDiffuseLighting lighting-color='white' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='55'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.1'/%3E%3C/svg%3E");
  background-color: #f3efff;
  background-size: 300px;
}



</style>