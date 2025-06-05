<template>
  <div class="w-full h-full dark:bg-gray-900 dark:text-white">
    <section class="pt-16 space-y-11 container mx-auto px-4 lg:px-8">
      <!-- Banner utama -->
      <div class="max-w-[1450px] mx-auto">
        <HeroBanner />
      </div>

      <!-- Deskripsi -->
      <p class="sm:text-xl max-w-[1450px] font-serif text-black dark:text-gray-300 mx-auto text-justify">
        Jelajahi berbagai jenis kaos kaki dari Kanik yang cocok untuk kebutuhan harian, sekolah, hingga momen spesial. 
        Tersedia kategori Basic, Infinity, Innovate, dan Complement – semuanya hadir dengan kenyamanan dan desain berkualitas.
      </p>

      <!-- ICON KATEGORI -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto my-10">
        <div
          v-for="category in categories"
          :key="category.slug"
          @click="goToCategory(category.slug)"
          class="cursor-pointer flex flex-col items-center transition"
        >
          <img :src="category.icon" :alt="category.name" class="w-16 h-16 mb-2" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ category.name }}</span>
        </div>
      </div>

      <!-- Sekilas Tiap Kategori -->
      <section class="space-y-16">
        <div v-for="category in categoryPreviews" :key="category.slug">
          <SectionTitle :title="`Kategori ${category.name}`" class="text-center text-[#9d6727] " />
          <ProductList :items="category.items" />
        </div>
      </section>

    

      <!-- Sekilas Gifting -->
<section class="text-center">
  <div class="">
    <!-- Judul lebih emosional -->
    <SectionTitle title="Gifting Dari Hati ke Hati" class="text-[#9d6727] "  />

    <!-- Deskripsi tambahan -->
    <p class="sm:text-xl max-w-[1440px] font-serif text-black dark:text-gray-300 mx-auto text-justify">
      Hadiah yang simpel tapi penuh makna akan selalu diingat. Kanik menghadirkan hampers eksklusif berisi kaos kaki pilihan 
      yang cocok untuk teman kantor, sahabat, guru, atau keluarga. 
    </p>

    <!-- Daftar produk -->
    <ProductList :items="giftPreview" />

    <!-- CTA -->
    <router-link to="/gift" class="btn-primary mt-6 inline-block">Lihat Semua Pilihan</router-link>
  </div>
</section>


      <!-- Sekilas Custom -->
<section class="text-center px-4 sm:px-6 lg:px-8">
  <SectionTitle title="Bikin Kaos Kaki Sendiri?" class="text-[#9d6727]" />

  <div class="relative max-w-[1440px] mx-auto overflow-hidden rounded-xl shadow-md">
    <!-- Gambar banner -->
    <img
      :src="customBanner"
      alt="Kaos Kaki Custom"
      class="w-full h-[300px] sm:h-[400px] lg:h-[365px] object-cover object-center"
    />

    <!-- Overlay teks -->
    <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 sm:px-8 text-center">
      <h3 class="text-lg sm:text-2xl font-bold mb-2">Bisa Custom Desain Sendiri!</h3>
      <p class="text-sm sm:text-base max-w-md leading-relaxed">
        Upload gambar atau ide kamu, dan biarkan tim Kanik mewujudkannya jadi kaos kaki keren sesuai keinginanmu.
      </p>
      <router-link to="/custom" class="btn-primary mt-4">Mulai Custom</router-link>
    </div>
  </div>
</section>

    </section>

  <!-- Sekilas On Sale -->
<section class="text-center py-10 px-4">
  <SectionTitle title="Promo Spesial!" class="text-[#9d6727]" />
  
  <div class="max-w-[1440px] mx-auto">
    <p class="text-sm sm:text-lg font-serif t text-gray-700 dark:text-gray-100 mb-4 leading-relaxed text-justify">
      Nantikan promo menarik setiap tanggal kembar seperti <strong>7.7</strong>, <strong>8.8</strong>, dan <strong>9.9</strong>! 🎉 
      Di hari-hari spesial ini, Kanik hadirkan <strong>diskon besar-besaran</strong> untuk berbagai koleksi kaos kaki favoritmu — mulai dari model basic, anti licin, hingga hampers siap kirim!
      
    </p>

    <p class="text-sm text-gray-500 italic mt-3">
      Follow kami di Instagram & aktifkan notifikasi agar kamu jadi yang pertama tahu saat promonya dimulai!
    </p>
  </div>
</section>



    <!-- Tombol WhatsApp melayang -->
<a
  href="https://wa.me/6281220665701"
  target="_blank"
  class="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
  aria-label="Chat via WhatsApp"
>
  <i class="fab fa-whatsapp fa-lg"></i>
</a>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroBanner from '../components/HeroBanner.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProductList from '../components/ProductList.vue'

// Import gambar dari assets
import { iconBasic, iconComplement, iconInfinity, iconInovate, best1, best2, customBanner, schoolhitput, hoverhitput, kidsa, hoverkidsa,
  hoverkismis, hoverOri, original, kismis, motif, hovermotif, rilex, hoverRilex, fs, hoverFs, balet, hoverBalet, 
  wupol, hoverWupol, antilicin, hoverAnti, wudhuTelapak, hoverWutak, saqeena, hoverSaqeena, basicIn, hoverInbase, 
  inWupol, hoverInwup, legging, hoverLeg, cfs, hoverCfs, pakethampers, paketumroh, hoverHampers, hoverUmroh
 } from '../assets'

const router = useRouter()

// Kategori ikon
const categories = [
  { name: 'Basic', slug: 'basic', icon: iconBasic },
  { name: 'Infinity', slug: 'infinity', icon: iconInfinity },
  { name: 'Innovate', slug: 'innovate', icon: iconInovate },
  { name: 'Complement', slug: 'complement', icon: iconComplement }
]

function goToCategory(slug) {
  router.push(`/kategori/${slug}`)
}

// Sekilas kategori dengan 4 produk masing-masing
const categoryPreviews = [
  {
    name: 'Basic',
    slug: 'basic',
    items: [
      { id: 101, name: 'School Hitam Putih', price: 10000, image: best2, hoverImage: hoverhitput },
      { id: 102, name: 'Kidsa', price: 16000, image: kidsa, hoverImage: hoverkidsa },
      { id: 103, name: 'Original', price: 17000, image: original, hoverImage: hoverOri },
      { id: 104, name: 'Kanik Kismis', price: 10000, image: kismis, hoverImage: hoverkismis },
    ]
  },
  {
    name: 'Infinity',
    slug: 'infinity',
    items: [
      { id: 201, name: 'Motif', price: 20000, image: motif, hoverImage: hovermotif },
      { id: 202, name: 'Rilex Sandal', price: 20000, image: rilex, hoverImage: hoverRilex },
      { id: 203, name: 'Flat Shoes', price: 20000, image: fs, hoverImage: hoverFs },
      { id: 204, name: 'Balet Socks', price: 20000, image: balet, hoverImage: hoverBalet },
    ]
  },
  {
    name: 'Innovate',
    slug: 'innovate',
    items: [
      { id: 301, name: 'Wudhu Jempol Anti licin', price: 25000, image: antilicin, hoverImage: hoverAnti },
      { id: 302, name: 'Wudhu Jempol', price: 25000, image: wupol, hoverImage: hoverWupol },
      { id: 303, name: 'Wudhu Tanpa Jempol Anti Kotor', price: 19000, image: wudhuTelapak, hoverImage: hoverWutak },
      { id: 304, name: 'Saqeena Sokcs', price: 25000, image: saqeena, hoverImage: hoverSaqeena },
    ]
  },
  {
    name: 'Complement',
    slug: 'complement',
    items: [
      { id: 401, name: 'Inner Pants Basic', price: 100000, image:basicIn , hoverImage: hoverInbase },
      { id: 402, name: 'Inner Pants Wupol', price: 120000, image: inWupol, hoverImage: hoverInwup },
      { id: 403, name: 'Legging Pants', price: 50000, image: legging, hoverImage: hoverLeg },
      { id: 404, name: 'Flat Shoes Jempol Eomji Series', price: 289000, image: cfs, hoverImage: hoverCfs },
    ]
  },
]

// Sekilas On Sale
const onsalePreview = [
  { id: 1, name: 'Kanik Kismis', price: 89000, image: best1, hoverImage: best2 },
  { id: 2, name: 'Mensak Misty', price: 92000, image: best1, hoverImage: best2 },
  { id: 3, name: 'Jempol Nyaman', price: 87000, image: best1, hoverImage: best2 },
  { id: 4, name: 'Socks Premium', price: 88000, image: best1, hoverImage: best2 }
]

const giftPreview = [
  {
    id: 5,
    name: 'Paket Hampers',
    price: 97000,
    image: pakethampers,
    hoverImage: hoverHampers,
    description: 'Isi kaos kaki pilihan + kemasan eksklusif, cocok untuk hadiah Lebaran & hari spesial.'
  },
  {
    id: 6,
    name: 'Paket Umroh',
    price: 97000,
    image: paketumroh,
    hoverImage: hoverUmroh,
    description: 'Paket siap kirim berisi kaos kaki ibadah. Ideal untuk sahabat atau keluarga yang akan Umrah/Haji.'
  }
]

</script>

<style setup>
.btn-primary {
  @apply px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition;
}
</style>
