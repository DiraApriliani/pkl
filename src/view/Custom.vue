<template>
  <section id="custom" class="w-full h-[80vh] flex flex-col justify-center items-center text-center px-4 py-10 rounded-xl">
    <h3 class="text-3xl sm:text-4xl font-bold text-[#9d6727] mb-4">
      Layanan Custom Segera Hadir 🎨🧦
    </h3>

    <p class="text-justify text-base sm:text-lg font-serif text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Kami sedang menyempurnakan fitur custom kaos kaki agar pengalamanmu lebih mudah dan menyenangkan. 
      Nantikan kehadirannya dalam waktu dekat!
    </p>

    <p class="text-sm text-gray-500 italic mt-6">
      Follow kami di Instagram untuk kabar peluncuran resminya.
    </p>
  </section>
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