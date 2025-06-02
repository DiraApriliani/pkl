<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
    <div
      v-for="item in items"
      :key="item.id"
      class="bg-white dark:bg-gray-800 p-4 text-left group"
    >
      <!-- Gambar dengan efek hover -->
      <div class="relative w-[445px] h-[585px] overflow-hidden shrink-0">
        <!-- Gambar utama -->
        <img
          :src="item.image"
          :alt="item.name"
          class="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-500 ease-in-out will-change-transform group-hover:opacity-0"
        />
        <!-- Gambar hover (jika ada) -->
        <img
          v-if="item.hoverImage"
          :src="item.hoverImage"
          :alt="item.name + ' Hover'"
          class="absolute inset-0 w-full h-full object-cover opacity-0 scale-100 transition-all duration-500 ease-in-out will-change-transform group-hover:opacity-100 group-hover:scale-110"
        />
      </div>

      <!-- Info Produk -->
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mt-4">{{ item.name }}</h3>
      <p class="text-yellow-700 font-bold text-md mt-1">
        Rp {{ item.price.toLocaleString() }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  }
})
</script>
