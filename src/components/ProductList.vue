<template>
  <div
    :class="[
      'grid gap-6',
      items.length === 1
        ? 'grid-cols-1'
        : items.length === 2
        ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'
        : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4'
    ]"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="p-4 text-left group"
    >
      <!-- Gambar dengan efek hover -->
      <div class="relative w-full aspect-[445/585] overflow-hidden shrink-0">
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
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mt-4">
        {{ item.name }}
      </h3>
      <!-- Deskripsi jika tersedia -->
      <p v-if="item.description" class="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {{ item.description }}
      </p>
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
