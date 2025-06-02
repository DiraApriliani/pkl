<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
     <aside class="w-64 bg-yellow-700 text-white p-4 flex flex-col">
      <h1 class="text-2xl font-bold mb-6">KANIK Admin</h1>
      <nav class="space-y-2">
        <a href="#dashboard" @click.prevent="currentTab = 'dashboard'" class="block hover:bg-yellow-600 p-2 rounded">Dashboard</a>
        <a href="#produk" @click.prevent="currentTab = 'produk'" class="block hover:bg-yellow-600 p-2 rounded">Produk</a>
        <a href="#kategori" @click.prevent="currentTab = 'kategori'" class="block hover:bg-yellow-600 p-2 rounded">Kategori</a>
        <a href="#custom" @click.prevent="currentTab = 'custom'" class="block hover:bg-yellow-600 p-2 rounded">Custom Order</a>
        <a href="#kontak" @click.prevent="currentTab = 'kontak'" class="block hover:bg-yellow-600 p-2 rounded">Pesan Masuk</a>
      </nav>
    </aside>


    <!-- Konten -->
    <div class="flex-1 flex flex-col">
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-700">Halaman Admin</h2>
        <button class="text-sm text-red-600 hover:underline">Logout</button>
      </header>

      <main class="p-6 overflow-y-auto space-y-16">
        <!-- Dashboard -->
        <section v-if="currentTab === 'dashboard'">
          <h1 class="text-3xl font-bold text-yellow-700 mb-6">Dashboard</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white shadow rounded p-4 text-center">
              <h2 class="text-sm text-gray-600 font-medium mb-2">Custom Hari Ini</h2>
              <p class="text-3xl font-bold text-yellow-700">2</p>
            </div>
            <div class="bg-white shadow rounded p-4 text-center">
              <h2 class="text-sm text-gray-600 font-medium mb-2">Pesan Masuk</h2>
              <p class="text-3xl font-bold text-yellow-700">8</p>
            </div>
            <div class="bg-white shadow rounded p-4 text-center">
              <h2 class="text-sm text-gray-600 font-medium mb-2">Total Produk</h2>
              <p class="text-3xl font-bold text-yellow-700">124</p>
            </div>
            <div class="bg-white shadow rounded p-4 text-center">
              <h2 class="text-sm text-gray-600 font-medium mb-2">Kategori</h2>
              <p class="text-3xl font-bold text-yellow-700">4</p>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white shadow rounded p-4">
              <h3 class="text-lg font-semibold mb-4">Grafik Order Custom / Bulan</h3>
              <div class="text-gray-400 text-sm italic text-center py-12">
                [Grafik akan ditampilkan di sini]
              </div>
            </div>
            <div class="bg-white shadow rounded p-4">
              <h3 class="text-lg font-semibold mb-4">Kategori Terlaris</h3>
              <div class="text-gray-400 text-sm italic text-center py-12">
                [Pie Chart akan ditampilkan di sini]
              </div>
            </div>
          </div>
          <div class="mt-8 bg-white shadow rounded p-4">
            <h3 class="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
            <ul class="divide-y">
              <li class="py-2 text-sm text-gray-700">+ Order custom dari Andi (Sport Basic)</li>
              <li class="py-2 text-sm text-gray-700">+ Pesan baru dari Nisa</li>
              <li class="py-2 text-sm text-gray-700">+ Produk "School Hitam Putih" ditambahkan</li>
            </ul>
          </div>
        </section>

        <!-- Produk -->
        <section v-if="currentTab === 'produk'">
          <h2 class="text-2xl font-semibold text-yellow-700 mb-4">Produk</h2>

          <!-- Dialog Tambah Produk hanya dirender saat tab aktif -->
          <template v-if="currentTab === 'produk'">
            <el-dialog v-model="showForm" title="Tambah Produk" width="500px" center>
              <el-form label-position="top" label-width="120px" class="mb-4">
                <el-form-item label="Nama Produk">
                  <el-input v-model="form.nama" placeholder="Masukkan nama produk" />
                </el-form-item>

                <el-form-item label="Kategori">
                  <el-select v-model="form.kategori" placeholder="Pilih kategori">
                    <el-option label="Basic" value="Basic" />
                    <el-option label="Infinity" value="Infinity" />
                    <el-option label="Complement" value="Complement" />
                  </el-select>
                </el-form-item>

                <el-form-item label="Harga">
                  <el-input v-model="form.harga" placeholder="Contoh: 25000" />
                </el-form-item>

                <el-form-item label="Diskon">
                  <el-input v-model="form.diskon" placeholder="Kosongkan jika tidak ada" />
                </el-form-item>

                <el-form-item label="Upload Gambar Produk">
                  <el-upload
                    class="upload-demo"
                    drag
                    action="#"
                    :http-request="handleUpload"
                    :show-file-list="false"
                    accept="image/*"
                    :before-upload="beforeUpload"
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Seret gambar ke sini atau <em>klik untuk unggah</em></div>
                  </el-upload>
                  <img v-if="previewUrl" :src="previewUrl" alt="Preview" class="w-32 mt-4 rounded border" />
                </el-form-item>
              </el-form>
              <template #footer>
                <el-button @click="showForm = false">Batal</el-button>
                <el-button type="primary" @click="submitProduk">Simpan</el-button>
              </template>
            </el-dialog>
          </template>

          <!-- Tabel Produk -->
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white shadow rounded">
              <thead>
                <tr class="bg-yellow-100 text-left">
                  <th class="px-6 py-3">Nama Produk</th>
                  <th class="px-6 py-3">Kategori</th>
                  <th class="px-6 py-3">Harga</th>
                  <th class="px-6 py-3">Diskon</th>
                  <th class="px-6 py-3">Gambar</th>
                  <th class="px-10 py-3">Aksi</th>
                  <th class="px-10 py-3">
            <el-button type="primary" @click="showForm = true">+ Tambah Produk</el-button></th>
                </tr>
              </thead>
              <tbody>

                <tr class="border-b" v-for="(item, index) in dummyProduk" :key="index">
                  <td class="px-6 py-4">{{ item.nama }}</td>
                  <td class="px-6 py-4">{{ item.kategori }}</td>
                  <td class="px-6 py-4">Rp {{ item.harga }}</td>
                  <td class="px-6 py-4" v-if="item.diskon">Rp {{ item.diskon }}</td>
                  <td class="px-6 py-4" v-else>-</td>
                  <td class="px-6 py-4">
                    <img :src="item.gambar" class="w-20 h-20 object-cover rounded" />
                  </td>
                  <td class="px-6 py-4 space-x-2">
                    <button class="text-blue-600 hover:underline">Edit</button>
                    <button class="text-red-600 hover:underline">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
           

          </div>
        </section>
 <section v-if="currentTab === 'kategori'">
          <h2 class="text-2xl font-semibold text-yellow-700 mb-4">Kategori Produk</h2>

          <!-- Form Tambah Kategori -->
          <div class="bg-white shadow rounded p-4 mb-6 max-w-md">
            <h3 class="text-lg font-medium mb-3">Tambah Kategori Baru</h3>
            <div class="flex gap-2">
              <input
                v-model="kategoriBaru"
                type="text"
                placeholder="Contoh: Premium"
                class="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                @click="tambahKategori"
                class="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Tambah
              </button>
            </div>
          </div>

          <!-- List Kategori -->
          <div class="bg-white shadow rounded p-4">
            <h3 class="text-lg font-medium mb-3">Daftar Kategori</h3>
            <ul class="divide-y">
              <li
                v-for="(kategori, index) in daftarKategori"
                :key="index"
                class="flex justify-between items-center py-2"
              >
                <span class="text-gray-800">{{ kategori }}</span>
                <button
                  @click="hapusKategori(index)"
                  class="text-sm text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </li>
            </ul>
          </div>
        </section>
<section v-if="currentTab === 'custom'">
  <h2 class="text-2xl font-semibold text-yellow-700 mb-4">Data Custom Order</h2>

  <div class="bg-white shadow rounded p-4 overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="bg-yellow-100 text-gray-700">
          <th class="p-2">Nama</th>
          <th class="p-2">Jenis</th>
          <th class="p-2">Bahan</th>
          <th class="p-2">Ukuran</th>
          <th class="p-2">Label</th>
          <th class="p-2">Jumlah</th>
          <th class="p-2">Catatan</th>
          <th class="p-2">Gambar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in daftarCustom" :key="i" class="border-t hover:bg-gray-50">
          <td class="p-2">{{ item.nama }}</td>
          <td class="p-2">{{ item.jenis }}</td>
          <td class="p-2">{{ item.bahan }}</td>
          <td class="p-2">{{ item.ukuran.join(', ') }}</td>
          <td class="p-2">{{ item.label }}</td>
          <td class="p-2">{{ item.jumlah }} lusin</td>
          <td class="p-2 text-gray-700 italic">{{ item.catatan || '-' }}</td>
          <td class="p-2">
            <img v-if="item.jenis === 'Printing' && item.gambar" :src="item.gambar" class="w-16 h-16 object-cover rounded border" />
            <span v-else class="text-gray-400 italic">-</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section v-if="currentTab === 'kontak'">
  <h2 class="text-2xl font-semibold text-yellow-700 mb-4">Pesan Masuk</h2>

  <div class="bg-white shadow rounded p-4 overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="bg-yellow-100 text-gray-700">
          <th class="p-2">Nama</th>
          <th class="p-2">Email</th>
          <th class="p-2">Pesan</th>
          <th class="p-2">Tanggal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(msg, i) in daftarPesan" :key="i" class="border-t hover:bg-gray-50">
          <td class="p-2">{{ msg.nama }}</td>
          <td class="p-2">{{ msg.email }}</td>
          <td class="p-2 text-gray-700 italic">{{ msg.pesan }}</td>
          <td class="p-2">{{ msg.tanggal }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

        <!-- Bagian lain tetap -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { best1 } from '../assets'

const currentTab = ref('dashboard')

if (window.location.hash) {
  const tab = window.location.hash.replace('#', '')
  if (['dashboard', 'produk', 'kategori', 'custom', 'kontak'].includes(tab)) {
    currentTab.value = tab
  }
}

watch(currentTab, (val) => {
  window.location.hash = val
  if (val !== 'produk') {
    showForm.value = false
  }
})

const showForm = ref(false)
const previewUrl = ref('')

const form = ref({
  nama: '',
  kategori: '',
  harga: '',
  diskon: '',
  gambar: null
})

const dummyProduk = ref([])

function beforeUpload(file) {
  const isImage = file.type.startsWith('image/')
  if (!isImage) {
    ElMessage.error('File harus berupa gambar!')
    return false
  }
  form.value.gambar = file
  previewUrl.value = URL.createObjectURL(file)
  return false
}

function handleUpload() {
  return new Promise((resolve) => setTimeout(resolve, 500))
}

function submitProduk() {
  if (!form.value.nama || !form.value.kategori || !form.value.harga) {
    ElMessage.error('Lengkapi semua data!')
    return
  }
  dummyProduk.value.push({
    nama: form.value.nama,
    kategori: form.value.kategori,
    harga: form.value.harga,
    diskon: form.value.diskon,
    gambar: previewUrl.value || 'https://via.placeholder.com/80'
  })
  ElMessage.success('Produk ditambahkan!')
  form.value = { nama: '', kategori: '', harga: '', diskon: '', gambar: null }
  previewUrl.value = ''
  showForm.value = false
}

const daftarKategori = ref(['Basic', 'Infinity', 'Complement'])
const kategoriBaru = ref('')

function tambahKategori() {
  if (!kategoriBaru.value.trim()) {
    ElMessage.error('Nama kategori tidak boleh kosong')
    return
  }
  daftarKategori.value.push(kategoriBaru.value.trim())
  ElMessage.success('Kategori ditambahkan!')
  kategoriBaru.value = ''
}

function hapusKategori(index) {
  daftarKategori.value.splice(index, 1)
  ElMessage.success('Kategori dihapus!')
}
const daftarCustom = ref([
  {
    nama: 'Andi',
    jenis: 'Printing',
    bahan: 'Katun',
    ukuran: ['M', 'L'],
    label: 'Brand Sendiri',
    jumlah: 50,
    catatan: 'Warna sesuai logo komunitas',
    gambar: best1
  },
  {
    nama: 'Nisa',
    jenis: 'Wudhu',
    bahan: 'Spandek',
    ukuran: ['S', 'M'],
    label: 'Polos',
    jumlah: 30,
    catatan: '',
    gambar: null
  }
])

const daftarPesan = ref([
  {
    nama: 'Alya',
    email: 'alya@mail.com',
    pesan: 'Saya ingin tanya soal harga kaos kaki custom',
    tanggal: '2025-05-26'
  },
  {
    nama: 'Fahmi',
    email: 'fahmi@gmail.com',
    pesan: 'Apakah tersedia ukuran anak-anak?',
    tanggal: '2025-05-25'
  }
])

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
