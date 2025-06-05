<template>
  <h2 class="text-2xl md:text-3xl font-bold text-[#9d6727] dark:text-gray-200 mb-6">
    {{ title }}
  </h2>
</template>

<script setup>
defineProps({ title: String })
</script>
