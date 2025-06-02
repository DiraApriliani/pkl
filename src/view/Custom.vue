<template>
  <div>
    <section id="custom" class="bg-white dark:bg-gray-900 dark:text-white py-16">
      <div class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-4">Custom Kaos Kaki</h2>
        <p class="sm:text-xl font-serif text-gray-600 dark:text-gray-300 max-w- mx-auto mb-6 text-justify">
          Mau bikin kaos kaki pakai desain sendiri? Kami sediakan layanan custom mulai dari 25 lusin! Cocok untuk komunitas, perusahaan, atau brand kamu sendiri.
        </p>
        <HeroBanner class="mb-10" />

        <!-- Form langsung tampil di bawah gambar tanpa tombol -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 mx-auto max-w-3xl text-left">
          <h3 class="text-2xl font-bold text-yellow-700 mb-6 text-center">Formulir Custom Kaos Kaki</h3>
          <el-form :model="custom" label-width="160px" label-position="top">
            <el-form-item label="Jenis Kaos Kaki">
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
            </el-form-item>

            <el-form-item v-if="currentImage" label="Preview">
              <img :src="currentImage" alt="Preview Gambar" class="w-32 h-32 object-contain mx-auto border rounded" />
            </el-form-item>

            <el-form-item label="Bahan">
              <el-select v-model="custom.material" placeholder="Pilih bahan">
                <el-option label="Cotton" value="Cotton" />
                <el-option label="Nylon" value="Nylon" />
                <el-option label="Cotton Rich" value="Cotton Rich" />
                <el-option label="Polyester" value="Polyester" />
              </el-select>
            </el-form-item>

            <el-form-item label="Ukuran">
              <el-checkbox-group v-model="custom.sizes">
                <el-checkbox label="S" />
                <el-checkbox label="M" />
                <el-checkbox label="L" />
                <el-checkbox label="XL" />
              </el-checkbox-group>
              <div class="text-sm text-gray-600 mt-1 p-3.5">Catatan: Kids Socks & Sport ada ukuran khusus</div>
            </el-form-item>

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

            <el-form-item label="Catatan Tambahan">
              <el-input
                v-model="custom.note"
                type="textarea"
                :rows="3"
                placeholder="Contoh: Logo kanan-kiri berbeda, warna pastel, dsb."
              />
            </el-form-item>

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

            <el-form-item class="text-center">
              <button
                type="button"
                @click="submitCustom"
                class="px-4 py-2 rounded font-extrabold text-yellow-700 bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white hover:brightness-110"
              >
                Kirim Permintaan
              </button>
              <button
  type="button"
  @click="cancelCustom"
  class="ml-4 px-4 py-2 rounded font-extrabold text-yellow-700 bg-gradient-to-b from-[#d4ba9f] via-[#d3c7b7] to-white"
>
  Reset
</button>
            </el-form-item>
            <p v-if="formterisi" class="text-blue-500 mt-2 font-semibold text-center">{{ formterisi }}</p>
          </el-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { ElMessage } from 'element-plus';
import HeroBanner from '../components/HeroBanner.vue'

const formterisi = ref('');

const defaultCustom = () => ({
  type: '',
  material: '',
  sizes: [],
  label: '',
  note: '',
  file: null,
  quantity: null,
});

const custom = ref(defaultCustom());

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
    resetForm();
  }, 1500);
};

// Batal tanpa konfirmasi
const cancelCustom = () => {
  resetForm();
};

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
</script>


<style lang="scss" scoped>

</style>