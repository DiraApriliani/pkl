<template>
  <div>
    <footer class="bg-white dark:bg-gray-900 py-12 mt-10 border-t border-gray-300 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
      <div class="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-600 dark:text-gray-300 text-lg font-serif">

        <!-- IKUTI KANIK -->
        <div class="space-y-4">
          <h3 class="font-semibold text-base text-yellow-700">IKUTI KANIK</h3>
          <p>Temukan inspirasi fashion harianmu lewat sosial media KANIK.</p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-yellow-600"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#" class="hover:text-yellow-600"><i class="fab fa-facebook fa-lg"></i></a>
            <a href="#" class="hover:text-yellow-600"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="#" class="hover:text-yellow-600"><i class="fab fa-tiktok fa-lg"></i></a>
          </div>
        </div>

        <!-- NEWSLETTER -->
        <div class="space-y-4">
          <h3 class="font-semibold text-base text-yellow-700">INFORMASI</h3>
          <p>Daftarkan email kamu untuk dapat info terbaru dan penawaran spesial dari KANIK.</p>
          <div class="flex border-b border-gray-400 focus-within:border-yellow-600">
            <input
              type="email"
              placeholder="masukkan email"
              class="w-full bg-transparent focus:outline-none py-1 text-sm text-gray-800 dark:text-white"
            />
            <button class="text-yellow-700 hover:text-yellow-800 px-2">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          <div class="flex justify-center mt-4 space-x-4">
            <!-- ✅ Perbaikan URL BCA -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Logo_Bank_BCA.svg/2560px-Logo_Bank_BCA.svg.png" alt="BCA" class="h-4 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Bank_Mandiri_logo.svg" alt="Mandiri" class="h-4 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/id/0/04/Logo_BNI.png" alt="BNI" class="h-4 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_2021.svg" alt="Visa" class="h-4 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Logo_Gopay.svg" alt="GoPay" class="h-4 object-contain" />
          </div>
        </div>

        <!-- KUNJUNGI TOKO -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-yellow-700">Kunjungi Toko</h3>
          <a href="https://www.google.com/maps?q=Jl.+Saturnus+Raya+No.11A" target="_blank" rel="noopener noreferrer">
            <iframe
              class="w-full h-52 rounded-md"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Jl.+Saturnus+Raya+No.11A&output=embed"
            ></iframe>
          </a>
          <p class="text-sm text-gray-800 dark:text-gray-200">Jl. Saturnus Raya No.11A</p>
        </div>

      </div>

      <!-- Copyright -->
      <div class="max-w-7xl mx-auto mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        © 2025 KANIK. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
// kosong karena tidak ada logic interaktif
</script>

<style lang="scss" scoped>
</style>
