<template>
  <div class="min-h-screen bg-base-200">
    <section class="relative overflow-hidden py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
          AstralList
        </h1>
        <p class="text-xl md:text-2xl text-base-content/80 mb-10 max-w-3xl mx-auto">
          O MyAnimeList que você sempre quis: bonito, rápido e feito por quem realmente entende de anime.
        </p>
       <div class="">
          <h2 class="text-4xl font-bold mb-6">Abandone o MAL oficial</h2>
           <a href="/login" class="btn btn-primary btn-lg text-xl px-12 ">
             Começar agora — é grátis
           </a>
       </div>
      
      </div>
    </section>

    <section class="py-20 px-6 bg-base-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-primary">
          Por que o AstralList é melhor?
        </h2>
        <div class="grid md:grid-cols-3 gap-10">

          <div class="card bg-base-200 shadow-xl text-center p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3">Sync automático com MAL</h3>
            <p class="text-base-content/70">Importa tudo em 5 segundos e atualiza dos dois lados</p>
          </div>

          <div class="card bg-gradient-to-br bg-primary text-white shadow-2xl p-8 scale-105">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
              <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold mb-3">Gerenciamento Diferenciado</h3>
            <p class="text-lg">+1 episódio com 1 clique • arrasta entre listas • nunca mais perde progresso</p>
          </div>

          <div class="card bg-base-200 shadow-xl text-center p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
              <svg class="w-12 h-12 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3">Estatísticas que viciam</h3>
            <p class="text-base-content/70">Dias gastos, gráficos, ranking e comparação com amigos</p>
            <p class="py-2 mt-5 bg-primary font-bold rounded-lg">Em Breve</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>