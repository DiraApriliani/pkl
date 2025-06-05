<template>
  <section
    id="onsale"
    class="w-full h-[80vh] flex flex-col justify-center items-center text-center px-4 py-10 rounded-xl"
  >
    <!-- Judul -->
    <h3 class="text-3xl sm:text-4xl font-bold text-[#9d6727] mb-4">
      Promo Spesial Segera Hadir!
    </h3>

    <!-- Teks deskripsi -->
    <p class="text-base sm:text-lg font-serif text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Kami sedang menyiapkan promo menarik untukmu 🎉
    </p>

    <!-- CTA kecil -->
    <p class="text-sm text-gray-500 italic mt-2">
      Pantau terus halaman ini atau follow kami di Instagram untuk info terbaru.
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
