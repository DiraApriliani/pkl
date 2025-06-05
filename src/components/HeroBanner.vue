<template>
  <div class="w-full h-auto overflow-hidden">
    <img :src="onsale" alt="Hero Banner" class="w-full object-contain" />
  </div>
</template>

<script setup>
import { onsale } from '../assets';
</script>