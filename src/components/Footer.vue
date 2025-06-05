<template>
  <div>
    <footer class="bg-gray-100 dark:bg-gray-800 py-12 mt-10 border-t border-gray-300 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
      <div class="max-w-[1430px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-600 dark:text-gray-300 text-lg font-serif">

        <!-- IKUTI KANIK -->
        <div class="space-y-4">
          <h3 class="font-semibold text-base text-[#d0a255]">IKUTI KANIK</h3>
          <p>Temukan inspirasi fashion harianmu lewat sosial media KANIK.</p>
          <div class="flex space-x-4">
  <a href="https://www.instagram.com/kanik.official/" target="_blank" class="hover:text-yellow-600">
    <i class="fab fa-instagram fa-lg"></i>
  </a>
  <a href="https://www.tiktok.com/@kanik.official" target="_blank" class="hover:text-yellow-600">
    <i class="fab fa-tiktok fa-lg"></i>
  </a>
  <a href="https://www.youtube.com/@kanikofficial9741" target="_blank" class="hover:text-yellow-600">
    <i class="fab fa-youtube fa-lg"></i>
  </a>
</div>


        </div>

        <!-- NEWSLETTER -->
  <div class="space-y-4">
    <h3 class="font-semibold text-base text-[#d0a255]">INFORMASI</h3>
    <p>Daftarkan email kamu untuk dapat info terbaru dan penawaran spesial dari KANIK.</p>
    <div class="flex border-b border-gray-400 focus-within:border-yellow-600">
      <input
        v-model="email"
        type="email"
        placeholder="masukkan email"
        class="w-full bg-transparent focus:outline-none py-1 text-sm text-gray-800 dark:text-white"
      />
      <button @click="submitEmail" class="text-yellow-700 hover:text-yellow-800 px-2">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
        <!-- KUNJUNGI TOKO -->
<div class="space-y-4 relative">
  <h3 class="text-lg font-semibold text-[#d0a255]">Kunjungi Toko</h3>

  <!-- Wrapper Peta -->
  <div class="relative w-full h-52 rounded-md overflow-hidden">
    <iframe
      class="w-full h-full"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=Jl.+Saturnus+Raya+No.11A&output=embed"
    ></iframe>

    <!-- Layer transparan yang bisa diklik -->
    <a
      href="https://www.google.com/maps?q=Jl.+Saturnus+Raya+No.11A"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute inset-0 z-10"
      aria-label="Klik untuk membuka Google Maps"
    ></a>
  </div>
</div>


      </div>

      <!-- Logo Pembayaran -->
      <div class="max-w-[1450px] mx-auto mt-10 flex justify-center items-center flex-wrap gap-6">
        <img :src="bca" alt="BCA" class="h-5 mt-3 object-contain" />
        <img :src="mandiri" alt="Mandiri" class="h-7 ml-3.5 object-contain" />
        <img :src="bni" alt="BNI" class="h-6 mt-5 object-contain" />
        <img :src="visa" alt="Visa" class="h-11 mt-4 object-contain" />
        <img :src="gopay" alt="GoPay" class="h-[78px] mt-4  object-contain" />
      </div>

      <!-- Copyright -->
      <div class="max-w-7xl mx-auto mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        © 2025 KANIK. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { mandiri, bni, gopay, visa, bca } from '../assets'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const email = ref('')

function submitEmail() {
  if (!email.value || !email.value.includes('@')) {
    ElMessage({
      message: 'Masukkan email yang valid.',
      type: 'warning',
    })
    return
  }

  ElMessage({
    message: 'Terima kasih! Email kamu sudah terdaftar.',
    type: 'success',
  })

  email.value = ''
}

</script>

<style lang="scss" scoped>
</style>
