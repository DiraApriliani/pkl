<template>
  <div class="flex justify-center items-center bg-yellow-600 min-h-screen p-4">

    <!-- Form Register -->
    <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-[850px] overflow-hidden">
      <div class="p-6 md:w-1/2 flex flex-col justify-center">
        <img class="mx-auto w-[150px] md:w-[170px]" :src="logologin" />
        <h1 class="mt-6 text-start text-[23px] font-semibold">Registrasi</h1>
        <h1 class="text-start text-[12px]">Lengkapi data berikut untuk mendaftarkan akun.</h1>
        <el-input
    class="mt-4"
    v-model="email"
    type="text"
    placeholder="Email"
    clearable
    :class="{ 'border-red-500': email && !isEmailValid }"
  />
  <p v-if="email && !isEmailValid" class="text-red-500 text-sm mt-1"></p>
        <el-input class="mt-4" v-model="no_hp" type="number" placeholder="No Telepon" />
        <el-input class="mt-4" v-model="password" type="password" placeholder="Password" show-password />
        <button
          class="mt-3 w-full bg-yellow-600 text-white py-2 rounded-md font-semibold text-center flex items-center justify-center"
          :class="{ 'opacity-50 cursor-not-allowed': loadingApiRegister }"
          :disabled="loadingApiRegister"
          @click="register"
        >
          <span v-if="!loadingApiRegister">Registrasi</span>
          <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:block md:w-1/2">
        <img class="w-full h-full object-cover" :src="welcome" alt="Welcome Image" />
      </div>
    </div>  
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { logologin, welcome } from '../assets';
import Swal from 'sweetalert2';


// fungsi regis
const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
const email = ref("");
const no_hp = ref("");
const password = ref("");
const loadingApiRegister = ref(false);
const router = useRouter();

const register = async () => {
  if (!email.value || !no_hp.value || !password.value) {
    Swal.fire("Isi semua!");
    return;
  }
  loadingApiRegister.value = true;
  try {
    const response = await axios.post("https://b8ae-36-72-54-195.ngrok-free.app/api/register", {
      email: email.value,
      no_hp: no_hp.value,  
      password: password.value,
    });
    Swal.fire("Registrasi berhasil: " + response.data.message);
    router.push("/login"); 
  } catch (error) {
    Swal.fire("Registrasi gagal: " + (error.response?.data?.message || "Terjadi kesalahan"));
  } finally {
    loadingApiRegister.value = false;
  }
};
</script>

<style lang="css">
.border-red-350 {
  border: 5px solid red !important;
  border-radius: var(--rounded-xs, 6px);
}

</style>