<template>
  <section id="onsale" class="bg-white dark:bg-gray-900 py-16">
    <!-- Judul -->
    <h3 class="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-8">
      On Sale
    </h3>

    <div class="max-w-[1450px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
      <div
        v-for="item in onSaleProducts"
        :key="item.id"
        class="bg-white dark:bg-gray-800 overflow-hidden relative group"
      >
        <!-- Label Diskon -->
        <span class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10 rounded">
          Diskon
        </span>

        <!-- Gambar Produk -->
        <div class="relative w-full aspect-[3/4] overflow-hidden">
          <!-- Gambar utama -->
          <img
            :src="item.image"
            :alt="item.name"
            class="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-500 ease-in-out will-change-transform group-hover:opacity-0"
          />
          <!-- Gambar hover -->
          <img
            :src="item.hoverImage"
            :alt="item.name + ' Hover'"
            class="absolute inset-0 w-full h-full object-cover opacity-0 scale-100 transition-all duration-500 ease-in-out will-change-transform group-hover:opacity-100 group-hover:scale-110"
          />
        </div>

        <!-- Info Produk -->
        <div class="p-4">
          <p class="text-sm text-gray-500 dark:text-gray-300 mb-1">{{ item.category }}</p>
          <h4 class="font-semibold text-lg mb-1 dark:text-white">{{ item.name }}</h4>

          <div>
            <p class="text-sm line-through text-gray-400 dark:text-gray-500">
              Rp {{ item.originalPrice.toLocaleString('id-ID') }}
            </p>
            <p class="text-yellow-600 font-bold text-lg">
              Rp {{ item.price.toLocaleString('id-ID') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <p
      v-if="onSaleProducts.length === 0"
      class="text-center mt-8 text-gray-500 dark:text-gray-400"
    >
      Belum ada produk yang sedang diskon saat ini.
    </p>
  </section>
</template>




<script setup>
import {
  kismis, mensok, jempolmisty, kidsa, original,
  schoolputih, best1, best2, onsale,
} from '../assets'

// Produk yang sedang diskon, lengkap dengan gambar hover-nya
const onSaleProducts = [
  {
    id: 1,
    name: 'Kanik Kismis',
    category: 'Basic',
    originalPrice: 30000,
    price: 25000,
    image: kismis,
    hoverImage: mensok , // Gambar saat hover
  },
  {
    id: 2,
    name: 'Mensak',
    category: 'Basic',
    originalPrice: 35000,
    price: 29000,
    image: mensok,
    hoverImage: kidsa,
  },
  {
    id: 3,
    name: 'Jempol Misty',
    category: 'Basic',
    originalPrice: 28000,
    price: 23000,
    image: jempolmisty,
    hoverImage: best1,
  },
  {
    id: 4,
    name: 'Kidsa Hitam',
    category: 'Basic',
    originalPrice: 32000,
    price: 26000,
    image: kidsa,
    hoverImage: best1,
  },
  {
    id: 5,
    name: 'Original Socks',
    category: 'Basic',
    originalPrice: 30000,
    price: 25000,
    image: original,
    hoverImage: best1,
  },
  {
    id: 6,
    name: 'School Putih',
    category: 'Basic',
    originalPrice: 27000,
    price: 22000,
    image: schoolputih,
    hoverImage: kidsa,
  },
  {
    id: 7,
    name: 'Flat Shoes Infinity',
    category: 'Infinity',
    originalPrice: 40000,
    price: 32000,
    image: best1,
    hoverImage: kidsa,
  },
  {
    id: 8,
    name: 'Saqeena Socks',
    category: 'Innovate',
    originalPrice: 35000,
    price: 29000,
    image: best2,
    hoverImage: kidsa,
  },
  {
    id: 9,
    name: 'Inner Pants Wupol',
    category: 'Complement',
    originalPrice: 47000,
    price: 39000,
    image: onsale,
    hoverImage: kidsa,
  },
]
</script>
