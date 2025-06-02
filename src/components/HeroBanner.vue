<template>
  <div class="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
    <img :src="onsale" alt="Hero Banner" class="w-full h-full object-cover" />
  </div>
</template>
<script setup>
import { onsale } from '../assets';
</script>