<!-- src/pages/CategoryPage.vue -->
<template>
  <div class="max-w-[1500px] mx-auto px-4 py-6">
    <h2 class="text-2xl text-[#9d6727] font-bold p-10 text-center">Kategori: {{ categoryName }}</h2>
    <HeroBanner/>
    <ProductList :items="filteredProducts" />

    <p v-if="filteredProducts.length === 0" class="text-center mt-8 text-gray-500">
      Tidak ada produk di kategori ini.
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ProductList from '../components/ProductList.vue'
import HeroBanner from '../components/HeroBanner.vue'

// Import gambar produk (gunakan sesuai dengan yang tersedia)
import {
  kismis,
  mensok,
  jempolmisty,
  kidsa,
  original,
  schoolhitput,
  schoolputih,
  schoolhitam,
  best1,
  best2,
  onsale,
} from '../assets'

const route = useRoute()
const slug = computed(() => route.params.slug)
const categoryName = computed(() => slug.value.charAt(0).toUpperCase() + slug.value.slice(1))

const allProducts = [
  // Basic
  { id: 1, name: 'School Hitam Putih', price: 25000, image: schoolhitput, hoverImage: best1, category: 'basic' },
  { id: 2, name: 'School Putih', price: 24000, image: schoolputih, hoverImage: best2, category: 'basic' },
  { id: 3, name: 'School Hitam', price: 24000, image: schoolhitam, hoverImage: best1, category: 'basic' },
  { id: 4, name: 'Mensak', price: 35000, image: mensok, hoverImage: best2, category: 'basic' },
  { id: 5, name: 'Misty Jempol', price: 25000, image: jempolmisty, hoverImage: best1, category: 'basic' },
  { id: 6, name: 'Kidsa', price: 28000, image: kidsa, hoverImage: best2, category: 'basic' },
  { id: 7, name: 'Original', price: 32000, image: original, hoverImage: best1, category: 'basic' },
  { id: 8, name: 'Jempol', price: 27000, image: best1, hoverImage: best2, category: 'basic' },
  { id: 9, name: 'Wudhu', price: 25000, image: best2, hoverImage: best1, category: 'basic' },
  { id: 10, name: 'Jempol Telapak Misty', price: 27000, image: best1, hoverImage: best2, category: 'basic' },
  { id: 11, name: 'Kanik Kismis', price: 20000, image: kismis, hoverImage: best1, category: 'basic' },

  // Infinity
  { id: 1, name: 'All Motif', price: 40000, image: best1, hoverImage: best2, category: 'infinity' },
  { id: 2, name: 'Rilex Sandal', price: 42000, image: best2, hoverImage: best1, category: 'infinity' },
  { id: 3, name: 'Flat Shoes', price: 38000, image: best2, hoverImage: best1, category: 'infinity' },
  { id: 4, name: 'Balet Socks', price: 37000, image: best1, hoverImage: best2, category: 'infinity' },

  // Innovate
  { id: 1, name: 'Anti Licin', price: 30000, image: onsale, hoverImage: best1, category: 'innovate' },
  { id: 2, name: 'Wupol', price: 32000, image: best2, hoverImage: best1, category: 'innovate' },
  { id: 3, name: 'Saqeena Socks', price: 35000, image: best1, hoverImage: best2, category: 'innovate' },

  // Complement
  { id: 1, name: 'Inner Pants Basic', price: 45000, image: best1, hoverImage: best2, category: 'complement' },
  { id: 2, name: 'Inner Pants Wupol', price: 47000, image: best2, hoverImage: best1, category: 'complement' },
  { id: 3, name: 'Legging Pants', price: 48000, image: best1, hoverImage: best2, category: 'complement' },
  { id: 4, name: 'Flat Shoes Jempol Emoji Series', price: 46000, image: best2, hoverImage: best1, category: 'complement' },
];



const filteredProducts = computed(() =>
  allProducts.filter(product => product.category === slug.value)
)
</script>
