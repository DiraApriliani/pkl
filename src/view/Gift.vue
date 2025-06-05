<template>
  <section id="gifting" class="w-full h-[80vh] flex flex-col justify-center items-center text-center px-4 py-10 rounded-xl">
    <h3 class="text-3xl sm:text-4xl font-bold text-[#9d6727] mb-4">
      Gifting Segera Hadir 🎁
    </h3>

    <p class="text-justify text-base sm:text-lg font-serif text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Kami sedang menyiapkan koleksi hadiah spesial untukmu.
  
      Tunggu peluncurannya dan temukan berbagai pilihan hampers dan bundle eksklusif dari Kanik.
    </p>

    <p class="text-sm text-gray-500 italic mt-6">
      Follow Instagram kami untuk jadi yang pertama tahu saat Gifting dibuka kembali.
    </p>
  </section>
</template>


<script setup>
import { best1, best2, best3 } from '../assets'
import HeroBanner from '../components/HeroBanner.vue'

const giftingProducts = [
  {
    id: 1,
    name: 'Gifting Set - Soft Socks Bundle',
    category: 'Bundle Hadiah',
    originalPrice: 29999,
    discountPrice: 24999,
    image: best1,
    hoverImage: best2,
    description: '3 pasang kaos kaki lembut dalam kotak kado eksklusif, cocok untuk sahabat dan keluarga.',
  },
  {
    id: 2,
    name: 'Luxury Gift Box - Elegance Edition',
    category: 'Premium Box',
    originalPrice: 39999,
    discountPrice: null,
    image: best2,
    hoverImage: best3,
    description: 'Pilihan premium dengan balutan box mewah dan pita satin, sangat cocok untuk surprise.',
  },
  {
    id: 3,
    name: 'Hampers Lebaran Spesial',
    category: 'Hampers',
    originalPrice: 49000,
    discountPrice: 42000,
    image: best3,
    hoverImage: best1,
    description: 'Isi: kaos kaki, inner pants, kartu ucapan – dikemas rapi, siap kirim!',
  },
]
</script>
