<template>
  <section id="gifting" class="bg-white dark:bg-gray-900 py-16">
    <div class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Judul -->
      <h3 class="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-8">
        Gifting Ideas 🎁
      </h3>

      <!-- Deskripsi -->
      <p class="sm:text-xl font-serif text-gray-600 dark:text-gray-300 mx-auto mb-10 max-w-[1460px] text-justify px-">
        Bingung cari kado atau hampers? Kami sediakan pilihan produk eksklusif dan bundle cantik
        untuk berbagai momen spesial seperti ulang tahun, lebaran, atau hadiah spontan penuh cinta.
      </p>

      <HeroBanner class="mb-10" />

      <!-- Wrapper max-w agar mx-auto bekerja -->
      <div class="max-w-[1430px] mx-auto">
        <!-- Grid produk -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          <div
            v-for="gift in giftingProducts"
            :key="gift.id"
            class="bg-white dark:bg-gray-800 overflow-hidden relative group transition transform"
          >
            <!-- Label Diskon -->
            <span
              v-if="gift.discountPrice"
              class="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10 rounded"
            >
              -{{ Math.round((1 - gift.discountPrice / gift.originalPrice) * 100) }}%
            </span>

            <!-- Gambar Produk -->
            <div class="relative overflow-hidden shrink-0">
              <img
                :src="gift.image"
                :alt="gift.name"
                class="w-full h-[585px] object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                :src="gift.hoverImage"
                alt="Hover Image"
                class="absolute top-0 left-0 w-full h-[585px] object-cover opacity-0 scale-100 transition duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110"
              />
            </div>

            <!-- Info Produk -->
            <div class="p-3 min-h-[160px] flex flex-col justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-300 mb-1">{{ gift.category }}</p>
                <h4 class="font-semibold text-lg mb-1 dark:text-white">{{ gift.name }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">{{ gift.description }}</p>
              </div>

              <div class="space-y-0.5">
                <p
                  v-if="gift.discountPrice"
                  class="text-sm line-through text-gray-400 dark:text-gray-500"
                >
                  Rp {{ gift.originalPrice.toLocaleString('id-ID') }}
                </p>
                <p class="text-yellow-600 font-bold text-xl">
                  Rp {{ (gift.discountPrice || gift.originalPrice).toLocaleString('id-ID') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pesan jika tidak ada produk -->
    <p
      v-if="giftingProducts.length === 0"
      class="text-center mt-8 text-gray-500 dark:text-gray-400"
    >
      Belum ada produk gifting tersedia saat ini.
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
