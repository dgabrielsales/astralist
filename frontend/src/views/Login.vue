<script setup>

</script>

<template>
    <div class="justify-center flex  items-center h-screen bg-gray-800">
      <div class="card justify-center bg-gray-900 w-96 text-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
        <h2 class="font-bold italic text-2xl">AstraList x MyAnimeList</h2>   
        <router-link to="/login" class="bg-primary text-xl font-bold rounded-lg py-4 px-6">Entrar</router-link>
        <router-link to="/">Sair</router-link>
      </div>
    </div>
</template>