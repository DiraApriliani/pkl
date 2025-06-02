<!-- src/pages/Home.vue -->
<template>
  <div class="w-full h-full dark:bg-gray-900 dark:text-white">
    <!-- Konten utama -->
    <section class="pt-32 space-y-20 container mx-auto px-4 lg:px-8">
      <!-- Banner utama -->
      <div class="max-w-[1450px] mx-auto px-4 mb-10">
        <HeroBanner />
      </div>

      <!-- Deskripsi -->
      <p class="sm:text-xl max-w-[1410px] font-serif text-gray-600 dark:text-gray-300 mx-auto text-justify">
        Jelajahi berbagai jenis kaos kaki dari Kanik yang cocok untuk kebutuhan harian, sekolah, hingga momen spesial. 
        Tersedia kategori Basic, Infinity, Innovate, dan Complement – semuanya hadir dengan kenyamanan dan desain berkualitas.
      </p>

      <!-- ICON KATEGORI LANGSUNG -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto my-10">
        <div
          v-for="category in categories"
          :key="category.slug"
          @click="goToCategory(category.slug)"
          class="cursor-pointer flex flex-col items-center bg-white dark:bg-gray-800"
        >
          <img :src="category.icon" :alt="category.name" class="w-16 h-16 mb-2" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ category.name }}</span>
        </div>
      </div>

      <!-- Sekilas On Sale -->
      <section class="text-center">
        <SectionTitle title="Promo Spesial Hari Ini" />
        <ProductList :items="onsalePreview" />
        <router-link to="/onsale" class="btn-primary mt-4 inline-block">Lihat Semua</router-link>
      </section>

      <!-- Sekilas Gifting -->
      <section class="text-center">
        <SectionTitle title="Rekomendasi Kado" />
        <ProductList :items="giftPreview" />
        <router-link to="/gift" class="btn-primary mt-4 inline-block">Lihat Semua</router-link>
      </section>

      <!-- Sekilas Custom -->
      <section class="text-center">
        <SectionTitle title="Bikin Kaos Kaki Sendiri?" />

        <!-- Banner Custom -->
        <div class="relative max-w-[1420px] mx-auto rounded-xl overflow-hidden shadow-md">
          <img :src="customBanner" alt="Kaos Kaki Custom" class="w-full h-64 object-cover" />
          <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6">
            <h3 class="text-2xl font-bold mb-2">Bisa Custom Desain Sendiri!</h3>
            <p class="text-sm max-w-md">Upload gambar atau ide kamu, dan biarkan tim Kanik mewujudkannya jadi kaos kaki keren sesuai keinginanmu.</p>
            <router-link to="/custom" class="btn-primary mt-4">Mulai Custom</router-link>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeroBanner from '../components/HeroBanner.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProductList from '../components/ProductList.vue'
import { iconkatalog, best1, best2, kidsa, customBanner } from '../assets'

const router = useRouter()

// Ikon kategori langsung
const categories = [
  { name: 'Basic', slug: 'basic', icon: iconkatalog },
  { name: 'Infinity', slug: 'infinity', icon: iconkatalog },
  { name: 'Innovate', slug: 'innovate', icon: iconkatalog },
  { name: 'Complement', slug: 'complement', icon: iconkatalog }
]

function goToCategory(slug) {
  router.push(`/kategori/${slug}`)
}

// Preview produk
const onsalePreview = [
  { id: 1, name: 'Kanik Kismis', price: 89000, image: best1, hoverImage: best2 },
  { id: 2, name: 'Mensak Misty', price: 92000, image: best1, hoverImage: best2 },
  { id: 3, name: 'Jempol Nyaman', price: 87000, image: best1, hoverImage: best2 }
]

const giftPreview = [
  { id: 4, name: 'Gift Box A', price: 99000, image: best2, hoverImage: best1 },
  { id: 5, name: 'Gift Box B', price: 115000, image: best2, hoverImage: best1 },
  { id: 6, name: 'Gift Box C', price: 102000, image: best2, hoverImage: best1 }
]

// Gambar custom banner
// Pastikan customBanner sudah ada di folder /assets
</script>

<style setup>
.btn-primary {
  @apply px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition;
}
</style>
