<template>
  <div class="pt-[80px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <Header></Header>
    <main class="min-h-[calc(100vh-80px)]">
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
