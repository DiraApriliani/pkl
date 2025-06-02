<template >
  <div class="w-full h-full dark:bg-gray-900 dark:text-white">
    <header class="fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-900 shadow">
    <!-- container utama: flex justify-between -->
    <div class="container mx-auto px-4 flex items-center justify-between py-4">
      <!-- 1. Logo -->
      <a href="#home" class="flex-shrink-0">
        <img :src="logologin" alt="Logo"
             class="w-32 sm:w-36 md:w-40 lg:w-48 h-auto"/>
      </a>

      <!-- 2. Desktop nav (hanya tampil di lg ke atas) -->
      <nav class="hidden lg:flex items-center space-x-8">
        <a href="#home"    class="text-gray-600 dark:text-gray-300 hover:text-yellow-600 text-xl">Home</a>
        <a href="#onsale"  class="text-gray-600 dark:text-gray-300 hover:text-yellow-600 text-xl">On Sale</a>
        <a href="#gifting" class="text-gray-600 dark:text-gray-300 hover:text-yellow-600 text-xl">Gifting</a>
        <a href="#custom"  class="text-gray-600 dark:text-gray-300 hover:text-yellow-600 text-xl">Custom</a>
        <a href="#contact" class="text-gray-600 dark:text-gray-300 hover:text-yellow-600 text-xl">Contact</a>
        <!-- ikon & tombol mode -->
        <el-icon class="icon-large"><ShoppingCart/></el-icon>
        <el-icon class="icon-large"><Search/></el-icon>
        <button @click="toggleTheme" class="text-xl">
          {{ isDark ? '🌙' : '☀️' }}
        </button>
      </nav>

      <!-- 3. Hamburger (hanya tampil di bawah lg) -->
      <button
        @click="menuOpen = !menuOpen"
        class="lg:hidden text-gray-800 dark:text-white"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path :d="menuOpen 
            ? 'M6 18L18 6M6 6l12 12' 
            : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </div>

    <!-- 4. Mobile menu (block saat menuOpen) -->
    <nav v-show="menuOpen" class="lg:hidden bg-white dark:bg-gray-900 shadow-md">
      <ul class="flex flex-col space-y-2 p-4">
        <li><a href="#home"    class="block">Home</a></li>
        <li><a href="#onsale"  class="block">On Sale</a></li>
        <li><a href="#gifting" class="block">Gifting</a></li>
        <li><a href="#custom"  class="block">Custom</a></li>
        <li><a href="#contact" class="block">Contact</a></li>
        <li class="flex items-center space-x-4 pt-2">
          <el-icon><ShoppingCart/></el-icon>
          <el-icon><Search/></el-icon>
          <button @click="toggleTheme">{{ isDark ? '🌙' : '☀️' }}</button>
        </li>
      </ul>
    </nav>
  </header>
    <section id="home" class="pt-3 ">
    </section>

    <div class="container mx-auto px-2 sm:px-4 lg:px-8 pt-36">
      <img
        :src="onsale"
        alt="On Sale Banner"
        class="w-full h-auto object-cover rounded"
      />
    </div>
    
    <section id="onsale" class="bg-white dark:bg-gray-900 ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Slogan -->
    <section class="text-start">
      <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-300 tracking-wide animate-pulse my-11">
    #LangkahNyaman Untuk Semua Aktivitasmu
  </h2>
    </section>

    <!-- Judul + Deskripsi -->
    <h3 class="text-3xl sm:text-4xl font-bold text-black mt-4 mb-4">
    On Sale
  </h3>
    <!-- Grid kategori -->
<div class="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center items-center mb-10">
  <div
    v-for="section in categories"
    :key="section.name"
    @click="toggle(section.name)"
    class="flex flex-col items-center text-center cursor-pointer group transition duration-300"
  >
    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-100 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
      <img :src="section.iconUrl" alt="" class="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
    </div>
    <span
      class="mt-2 text-sm sm:text-base font-medium transition-all"
      :class="isOpen(section.name) ? 'text-amber-600 font-bold' : 'text-gray-600 dark:text-gray-300'"
    >
      {{ section.name }}
    </span>
  </div>
</div>

    <!-- Subkategori -->
    <div v-for="section in categories" :key="section.name" v-show="isOpen(section.name)" class="mb-6 border border-yellow-300 rounded-lg">
      <div class="w-full px-4 py-2 font-semibold text-left bg-yellow-100 rounded-t-lg text-gray-700 dark:text-gray-300">
        Subkategori: {{ section.name }}
      </div>
      <ul class="px-4 py-2 bg-white text-sm sm:text-base space-y-1 text-gray-600 dark:text-gray-300">
        <li
          v-for="item in section.items"
          :key="item"
          class="cursor-pointer hover:text-yellow-600"
          @click="selectedCategory = item"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Produk dari kategori -->

    <TransitionGroup
      v-if="filteredProducts.length > 0"
      name="list"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.title"
        class="border border-gray-300 rounded-xl p-4 bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white hover:shadow-xl"
      >
        <div
          v-if="product.discountPrice"
          class="absolute top-2 left-2 bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded"
        >
          Save {{ Math.round((1 - product.discountPrice / product.price) * 100) }}%
        </div>
        <img :src="product.img" alt="" class="w-full h-48 object-contain mb-4" />
        <h2 class="font-semibold text-lg">{{ product.title }}</h2>
        <div class="mt-2">
          <span v-if="product.discountPrice" class="text-red-500 font-bold">
            $ {{ product.discountPrice.toFixed(2) }} USD
          </span>
          <span v-if="product.discountPrice" class="line-through text-gray-400 ml-2">
            $ {{ product.price.toFixed(2) }}
          </span>
          <span v-else class="text-gray-800 font-semibold">
            $ {{ product.price.toFixed(2) }} USD
          </span>
        </div>
      </div>
    </TransitionGroup>

    <p v-if="selectedCategory && filteredProducts.length === 0" class="text-center text-gray-500">Belum ada produk untuk kategori ini.</p>

    <!-- Best Price -->
    <h1 class="text-center font-mono text-2xl mt-10 mb-4">Best Price</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in bestProducts"
        :key="product.title"
        class="border border-gray-300 rounded-xl p-4 bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white hover:shadow-xl"
      >
        <div
          v-if="product.discountPrice"
          class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
        >
          Save {{ Math.round((1 - product.discountPrice / product.price) * 100) }}%
        </div>
        <img :src="product.img" alt="" class="w-full h-48 object-contain mb-4" />
        <h2 class="font-semibold text-lg">{{ product.title }}</h2>
        <div class="mt-2">
          <span v-if="product.discountPrice" class="text-red-500 font-bold">
            $ {{ product.discountPrice.toFixed(2) }} USD
          </span>
          <span v-if="product.discountPrice" class="line-through text-gray-400 ml-2">
            $ {{ product.price.toFixed(2) }}
          </span>
          <span v-else class="text-gray-800 font-semibold">
            $ {{ product.price.toFixed(2) }} USD
          </span>
        </div>
      </div>
    </div>

  </div>
</section>

    <section id="gifting" class="py-16 bg-white dark:bg-gray-900 dark:text-white">

  <div class="container mx-auto px-6 md:px-16">
    <h2 class="text-3xl font-bold text-center text-yellow-700 p-3">Gifting Ideas 🎁</h2>
    <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-justify">
      Bingung cari kado atau hampers? Kami sediakan pilihan produk eksklusif dan bundle cantik 
      untuk berbagai momen spesial seperti ulang tahun, lebaran, atau hadiah spontan penuh cinta.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-20">
      <div
        v-for="gift in giftingProducts"
        :key="gift.title"
        class="border border-gray-300 rounded-xl p-4 relative bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white hover:shadow-xl transition-all">
        <div
          v-if="gift.discountPrice"
          class="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
          Save {{ Math.round((1 - gift.discountPrice / gift.price) * 100) }}%
        </div>
        <img :src="gift.img" alt="" class="w-full h-48 object-contain mb-4" />
        <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ gift.title }}</h3>
        <p class="text-sm text-gray-700 mb-2">{{ gift.description }}</p>
        <div class="mt-2">
          <span v-if="gift.discountPrice" class="text-red-500 font-bold">
            $ {{ gift.discountPrice.toFixed(2) }} USD
          </span>
          <span v-if="gift.discountPrice" class="line-through text-gray-400 ml-2">
            $ {{ gift.price.toFixed(2) }}
          </span>
          <span v-else class="text-gray-800 font-semibold">
            $ {{ gift.price.toFixed(2) }} USD
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<div>
    <!-- Custom Section Trigger -->
    <section id="custom" class="py-8 bg-white dark:bg-gray-900 dark:text-white">
      <div class="md:px-16 text-center">
        <h2 class="text-3xl font-bold text-yellow-700 p-3">Custom Kaos Kaki</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-5 text-justify">
          Mau bikin kaos kaki pakai desain sendiri? Kami sediakan layanan custom mulai dari 25 lusin! Cocok untuk komunitas, perusahaan, atau brand kamu sendiri.
        </p>
        <button @click="showCustomForm = true"
          class="px-6 py-3 rounded-xl shadow hover:brightness-110 transition text-yellow-700 font-extrabold 
          bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white"> Ajukan Custom Sekarang
        </button>
      </div>

      <!-- Dialog Form -->
      <el-dialog
      v-model="showCustomForm"
      title="Formulir Custom Kaos Kaki"
      width="600px"
      center :before-close="handleBeforeClose">
      <el-form :model="custom" label-width="160px" label-position="top">

        <!-- Jenis Kaos Kaki -->
        <el-form-item label="Jenis Kaos Kaki" >
          <el-select v-model="custom.type" placeholder="Pilih jenis">
            <el-option-group label="Muslimah">
              <el-option label="Original" value="Original" />
              <el-option label="Jempol" value="Jempol" />
              <el-option label="Wudhu" value="Wudhu" />
              <el-option label="Wudhu Jempol" value="Wudhu Jempol" />
            </el-option-group>
            <el-option-group label="School">
              <el-option label="School Putih" value="School Putih" />
              <el-option label="School Putih Hitam" value="School Putih Hitam" />
            </el-option-group>
            <el-option-group label="Sport">
              <el-option label="Sport Basic" value="Sport Basic" />
              <el-option label="Sport Terry" value="Sport Terry" />
            </el-option-group>
            <el-option label="Mensocks" value="Mensocks" />
            <el-option label="Kids Socks" value="Kids Socks" />
            <el-option-group label="Printing">
            <el-option label="Printing" value="Printing" />
            </el-option-group>
          </el-select>
           <el-form-item v-if="currentImage" label="Preview">
  <img :src="currentImage" alt="Preview Gambar" class="w-32 h-32 object-contain mx-auto border rounded" />
</el-form-item>
<!-- Jumlah Order -->
</el-form-item>
        <!-- Bahan -->
        <el-form-item label="Bahan">
          <el-select v-model="custom.material" placeholder="Pilih bahan">
            <el-option label="Cotton" value="Cotton" />
            <el-option label="Nylon" value="Nylon" />
            <el-option label="Cotton Rich" value="Cotton Rich" />
            <el-option label="Polyester" value="Polyester" />
          </el-select>
          
        </el-form-item>

        <!-- Ukuran -->
        <el-form-item label="Ukuran">
          <el-checkbox-group v-model="custom.sizes">
            <el-checkbox label="S" />
            <el-checkbox label="M" />
            <el-checkbox label="L" />
            <el-checkbox label="XL" />
          </el-checkbox-group>
          <div class="text-sm text-gray-600 mt-1 p-4">Catatan: Kids Socks & Sport ada ukuran khusus</div>
        </el-form-item>

        <!-- Label -->
        <el-form-item label="Pilihan Label">
          <el-select v-model="custom.label" placeholder="Pilih jenis label">
            <el-option label="Label Pinggang (Kanik Basic Kalkir)" value="Pinggang" />
            <el-option label="Label Tembak (Kaya School)" value="Tembak" />
            <el-option label="Label Kupu-Kupu (Kanik Basic Ori)" value="Kupu-Kupu" />
            <el-option label="Label Ikat Gantung (Anti Hilang)" value="Ikat Gantung" />
          </el-select>
        </el-form-item>
<el-form-item v-if="custom.type" label="Jumlah Order (lusin)">
  <el-input-number
    v-model="custom.quantity"
    :min="custom.type === 'Printing' ? 5 : 25"
    :step="1"
    controls-position="right"
    class="w-full"
  />
  <p class="text-xs text-gray-500 mt-1 ml-3">
    Minimal order {{ custom.type === 'Printing' ? '5 lusin per gambar' : '25 lusin' }}
  </p>
</el-form-item>

        <!-- Catatan Tambahan -->
        <el-form-item label="Catatan Tambahan">
          <el-input
            v-model="custom.note"
            type="textarea"
            :rows="3"
            placeholder="Contoh: Logo kanan-kiri berbeda, warna pastel, dsb."
          />
        </el-form-item>

        <!-- Upload untuk Printing -->
        <el-form-item label="Upload Gambar untuk Printing (jika jenis Printing)" v-if="custom.type === 'Printing'">
          <el-upload
            class="upload-demo"
            drag
            action="#"
            :http-request="fakeUpload"
            :show-file-list="false"
            accept=".png,.jpg,.jpeg"
            :before-upload="beforeUpload"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Tarik file ke sini atau <em>klik untuk unggah gambar printing</em>
            </div>
          </el-upload>
        </el-form-item>

        <!-- Tombol Aksi -->
        <el-form-item>
          <button
            type="button"
            @click="submitCustom"
            class="px-4 py-2 rounded font-extrabold text-yellow-700 bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white hover:brightness-110"
          >
            Kirim Permintaan
          </button>
          <button
            type="button"
            @click="confirmCancel"
            class="ml-4 px-4 py-2 rounded font-extrabold text-yellow-700 bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white"
          >
            Batal
          </button>
        </el-form-item>

        <p v-if="formterisi" class="text-blue-500 mt-2 font-semibold text-center">{{ formterisi }}</p>
      </el-form>
    </el-dialog>
    </section>
    
  </div>
  <section id="contact" class="py-16 bg-white dark:bg-gray-900 dark:text-white">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center text-yellow-700 p-3">Hubungi Kami</h2>

    <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-justify">
      Jangan ragu untuk menghubungi tim kami. Kami siap membantu segala kebutuhan custom, kerja sama, dan pertanyaan seputar produk Kanik.
    </p>

    <!-- GRID 2 KOLOM: Form kiri, Peta kanan -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      
      <!-- FORMULIR + INFO – order 1 di semua layar -->
      <div class="space-y-2 order-1">
        <!-- Tentang Kami -->
        <div>
          <h3 class="text-2xl font-bold text-yellow-700 mb-2">Tentang Kami</h3>
          <p class="text-gray-600 dark:text-gray-300 dark:text-gray-300leading-relaxed">
            Kanik adalah brand lokal penyedia kaos kaki muslimah dan inovatif. Kami telah bekerja sama dengan berbagai komunitas dan perusahaan.
          </p>
        </div>

        <!-- Partner -->
        <div>
          <h4 class="text-2xl font-bold text-yellow-700 mb-3">Partner Kami</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img :src="iconkatalog" alt="Partner 1" class="h-12 object-contain" />
            <img :src="iconkatalog" alt="Partner 2" class="h-12 object-contain" />
            <img :src="iconkatalog" alt="Partner 3" class="h-12 object-contain" />
          </div>
        </div>

        <!-- Kontak -->
        <div>
          <h4 class="text-2xl font-bold text-yellow-700 mb-2">Kontak</h4>
          <p class="text-gray-600 dark:text-gray-300">Email: info@kanik.id</p>
          <p class="text-gray-600 dark:text-gray-300">WhatsApp: +62 812-3456-7890</p>
        </div>

        <!-- Form Kontak -->
        <div class="pt-6 border-t border-gray-300">
          <h4 class="text-2xl font-bold text-yellow-700 mb-4">Formulir Pesan</h4>
          <el-form :model="contactForm" label-width="120px" label-position="top">
            <el-form-item label="Nama">
              <el-input v-model="contactForm.name" placeholder="Nama lengkap Anda" />
            </el-form-item>

            <el-form-item label="Email">
              <el-input v-model="contactForm.email" placeholder="Alamat email aktif" />
            </el-form-item>

            <el-form-item label="Pesan">
              <el-input
                type="textarea"
                v-model="contactForm.message"
                :rows="4"
                placeholder="Tulis pesan Anda di sini"
              />
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitContact"
                class="bg-yellow-700 hover:bg-yellow-800 text-white font-bold"
              >
                Kirim Pesan
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- PETA – order 2 di semua layar agar peta di bawah di mobile -->
      <div class="space-y-2.5 w-full order-2">
        <h4 class="text-2xl font-bold text-yellow-700">Lokasi Toko</h4>
        <p class="text-gray-600 dark:text-gray-300">
          Jl. Saturnus Raya No.11A, Manjahlega, Kec. Rancasari, Kota Bandung, Jawa Barat 40286
        </p>
        <div class="w-full h-[500px] md:h-[608px] rounded-lg overflow-hidden shadow-lg p-2">
          <iframe
            class="w-full h-full"
            frameborder="0"
            style="border:0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.946964060671!2d107.68038767499417!3d-6.896502667468802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e92e9457f629%3A0xc315cf56ed7a40e9!2sJl.%20Saturnus%20Raya%20No.11A%2C%20Manjahlega%2C%20Kec.%20Rancasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040286!5e0!3m2!1sid!2sid!4v1716265823001!5m2!1sid!2sid"
          ></iframe>
        </div>
      </div>

    </div>
  </div>
</section>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { logologin, logodash, onsale, best1, best2, best3, 
        iconkatalog, schoolputih, schoolhitam, schoolhitput,
        original, mensok, kidsa, jempolmisty, kismis } 
from '../assets';

import { ShoppingCart, Search } from '@element-plus/icons-vue';

// Menyimpan kategori yang aktif (satu saja)
const openedCategory = ref(null);
const selectedCategory = ref(null);

// Saat kategori diklik
const toggle = (name) => {
  if (openedCategory.value === name) {
    openedCategory.value = null;
    selectedCategory.value = null;
  } else {
    openedCategory.value = name;
    const section = categories.find((s) => s.name === name);
    if (section && section.items.length > 0) {
      selectedCategory.value = section.items[0];
    }
  }
};

// Untuk mengetahui kategori mana yang sedang aktif
const isOpen = (name) => openedCategory.value === name;

// Data kategori
const categories = [
  {
    name: 'Basic',
    iconUrl: iconkatalog,
    items: [
      'School hitam putih', 'School putih', 'School hitam', 'Mensak',
      'Misty jempol', 'Kidsa', 'Origininal', 'Jempol', 'Wudhu',
      'Jempol telapak misty', 'Kanik kismis',
    ],
  },
  {
    name: 'Infinity',
    iconUrl: iconkatalog,
    items: ['All motif', 'Rilex sandal', 'Flat shoes', 'Balet socks'],
  },
  {
    name: 'Innovate',
    iconUrl: iconkatalog,
    items: ['Anti licin', 'Wupol', 'Saqeena socks'],
  },
  {
    name: 'Complement',
    iconUrl: iconkatalog,
    items: [
      'Inner pants basic', 'Inner pants wupol', 'Legging pants',
      'Flat shoes jempol emoji series',
    ],
  },
];

// Daftar produk per subkategori
const productByCategory = {
  'School hitam putih': [
    { title: 'School hitam putih',
     img: schoolhitput, 
     price: 21.00,
     discountPrice: 15.83,
     description: 'Pilihan premium dengan balutan box mewah dan pita satin, sangat cocok untuk surprise.', },
  ],
  'School putih': [
    { title: 'School putih', img: schoolputih, price: 19.00, discountPrice: 14.00 },
  ],
  'School hitam': [
    { title: 'School hitam', img: schoolhitam, price: 18.49 },
  ],
  'Mensak': [
    { title: 'Mensak', img: mensok, price: 22.00, discountPrice: 17.00 },
  ],
  'Misty jempol': [
    { title: 'Misty jempol', img: jempolmisty, price: 23.50 },
  ],
  'Kidsa': [
    { title: 'Kidsa', img: kidsa, price: 20.00, discountPrice: 16.00 },
  ],
  'Origininal': [
    { title: 'Original', img: original, price: 25.49 },
  ],
  'Jempol': [
    { title: 'Jempol', img: jempolmisty, price: 24.00 },
  ],
  'Wudhu': [
    { title: 'Kaos kaki wanita wudhu jempol', img: best3, price: 26.00 },
  ],
  'Jempol telapak misty': [
    { title: 'Jempol telapak misty', img: best1, price: 22.99 },
  ],
  'Kanik kismis': [
    { title: 'Kanik kismis', img: kismis, price: 19.99, discountPrice: 13.99 },
  ],
  'All motif': [
    { title: 'All motif', img: best1, price: 21.00 },
  ],
  'Rilex sandal': [
    { title: 'Rilex sandal', img: best2, price: 15.00 },
  ],
  'Flat shoes': [
    { title: 'Flat shoes', img: best3, price: 17.00 },
  ],
  'Balet socks': [
    { title: 'Balet socks', img: best1, price: 18.00 },
  ],
  'Anti licin': [
    { title: 'Anti licin', img: best2, price: 16.50 },
  ],
  'Wupol': [
    { title: 'Wupol', img: best3, price: 19.00 },
  ],
  'Saqeena socks': [
    { title: 'Saqeena socks', img: best1, price: 20.00 },
  ],
  'Inner pants basic': [
    { title: 'Inner pants basic', img: best2, price: 22.00 },
  ],
  'Inner pants wupol': [
    { title: 'Inner pants wupol', img: best3, price: 23.00 },
  ],
  'Legging pants': [
    { title: 'Legging pants', img: best1, price: 24.00 },
  ],
  'Flat shoes jempol emoji series': [
    { title: 'Flat shoes jempol emoji series', img: best2, price: 25.00 },
  ],
};

// Produk ditampilkan saat subkategori dipilih
const filteredProducts = computed(() => {
  if (!openedCategory.value) return [];
  const section = categories.find((s) => s.name === openedCategory.value);
  if (!section) return [];

  return section.items.flatMap((item) => productByCategory[item] || []);
});

// Produk best seller yang ditampilkan terpisah
const bestProducts = [
  productByCategory['Kanik kismis'][0],
  productByCategory['Wudhu'][0],
  productByCategory['School hitam putih'][0],
];

const giftingProducts = [
  {
    title: 'Gifting Set - Soft Socks Bundle',
    img: best1,
    price: 29.99,
    discountPrice: 24.99,
    description: '3 pasang kaos kaki lembut dalam kotak kado eksklusif, cocok untuk sahabat dan keluarga.',
  },
  {
    title: 'Luxury Gift Box - Elegance Edition',
    img: best2,
    price: 39.99,
    description: 'Pilihan premium dengan balutan box mewah dan pita satin, sangat cocok untuk surprise.',
  },
  {
    title: 'Hampers Lebaran Spesial',
    img: best3,
    price: 49.00,
    discountPrice: 42.00,
    description: 'Isi: kaos kaki, inner pants, kartu ucapan – dikemas rapi, siap kirim!',
  },
];

import { ElMessage, ElMessageBox } from 'element-plus';

const showCustomForm = ref(false);
const formterisi = ref('');

const defaultCustom = () => ({
  type: '',
  material: '',
  sizes: [],
  label: '',
  note: '',
  file: null,
  quantity: null, // akan diset otomatis lewat watcher
});



const resetForm = () => {
  custom.value = defaultCustom();
  formterisi.value = '';
};

const beforeUpload = (file) => {
  const isImage = file.type === 'image/png' || file.type === 'image/jpeg';
  if (!isImage) {
    ElMessage.error('Format harus PNG atau JPG');
    return false;
  }
  custom.value.file = file;
  return false;
};

const fakeUpload = () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

const submitCustom = () => {
  if (!custom.value.type || !custom.value.material || custom.value.sizes.length === 0) {
    formterisi.value = 'Mohon lengkapi semua kolom wajib.';
    return;
  }
  formterisi.value = 'Permintaan custom berhasil dikirim!';
  console.log('Data custom:', custom.value);
  setTimeout(() => {
    showCustomForm.value = false;
    resetForm();
  }, 1500);
};

const custom = ref({
  type: '',
  material: '',
  sizes: [],
  label: '',
  note: '',
  file: null,
  quantity: null
});

// Baru setelah custom dideklarasikan, kamu bikin watch
watch(
  () => custom.value.type,
  (newType) => {
    if (newType === 'Printing') {
      custom.value.quantity = 5;
    } else if (newType) {
      custom.value.quantity = 25;
    }
  }
);


const minQty = computed(() => (custom.value.type === 'Printing' ? 5 : 25));

const increaseQty = () => {
  custom.value.qty++;
};
const decreaseQty = () => {
  if (custom.value.qty > minQty.value) custom.value.qty--;
};


const confirmCancel = () => {
  ElMessageBox.confirm(
    'Yakin ingin membatalkan pengisian form? Data yang sudah diisi akan hilang.',
    'Konfirmasi Batal',
    {
      confirmButtonText: 'Ya, Batalkan',
      cancelButtonText: 'Kembali',
      type: 'warning',
    }
  ).then(() => {
    resetForm();
    showCustomForm.value = false;
  });
};

const handleBeforeClose = (done) => {
  ElMessageBox.confirm(
    'Yakin ingin menutup form? Data yang sudah diisi akan hilang.',
    'Konfirmasi',
    {
      confirmButtonText: 'Ya, Tutup',
      cancelButtonText: 'Kembali',
      type: 'warning',
    }
  )
    .then(() => {
      done(); // Tutup dialog
      resetForm();
    })
    .catch(() => {
      // Jangan lakukan apapun jika user batal
    });
};

const contactForm = ref({
  name: '',
  email: '',
  message: '',
});

const submitContact = () => {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
    ElMessage.error('Mohon lengkapi semua kolom.');
    return;
  }
  ElMessage.success('Pesan Anda telah dikirim!');
  contactForm.value = { name: '', email: '', message: '' };
};

const jenisKaosKakiImages = {
  'Original': original,
  'Jempol': jempolmisty,
  'Wudhu': best3,
  'Wudhu Jempol': best3,
  'School Putih': schoolputih,
  'School Putih Hitam': schoolhitput,
  'Sport Basic': best1,
  'Sport Terry': best2,
  'Mensocks': mensok,
  'Kids Socks': kidsa,
  'Printing': best3,
};

const currentImage = computed(() => {
  return jenisKaosKakiImages[custom.value.type] || '';
});

const menuOpen = ref(false)

import { onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

</script>


<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.el-upload {
  width: 100%;
}
.el-upload__text {
  font-size: 14px;
  color: #606266;
  margin-top: 8px;
}

.icon-large {
  font-size: 25px;
  color: black;
}

</style>
