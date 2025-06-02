<template>
    <div class="flex justify-center items-center bg-yellow-600 min-h-screen p-4">

  <!-- Form Login -->
  <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-[850px] overflow-hidden">
    <div class="p-6 md:w-1/2 flex flex-col justify-center">
      <img class="mx-auto w-[150px] md:w-[170px]" :src="logologin" />
        <h1 class="mt-6 text-start text-[23px] font-semibold">Login</h1>
        <p class="text-start text-[12px]">Masukkan Email dan Password untuk login.</p>
        <el-input class="mt-4" v-model="email" type="text" placeholder="Email"
        clearable :class="{ 'border-red-500': email && !isEmailValid }"/>
          <el-input class="mt-4" v-model="password" type="password" placeholder="Password" show-password />
          <div class="flex items-center mt-1">
          <el-checkbox v-model="checked1" size="large" class="mb-1" />
          <p class="text-[12px] ml-2 font-semibold">Remember me</p>
        </div>
          <button @click="login" :disabled="loadingApiLogin"
          class="mt-2 w-full bg-yellow-600 text-white py-2 rounded-md font-semibold text-center flex items-center justify-center"
          :class="{ 'opacity-50 cursor-not-allowed': loadingApiLogin }">
          <span v-if="!loadingApiLogin">Login</span>
          <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </button>
        <div class="text-center mt-3">
          <p class="text-xs">Belum memiliki akun?
            <span class="text-blue-500 cursor-pointer" @click="registrasi">Registrasi</span>
          </p>
        </div>
        </div>      
        <div class="hidden md:block md:w-1/2">
        <img class="w-full h-full object-cover" :src="welcome" alt="Welcome Image" />
      </div>
      </div>  
    </div>
  </template>
  
  <script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { logologin, welcome } from '../assets';
import Swal from 'sweetalert2';

//fungsi panggil api
const options = ref([]);
const loadingApi = ref(true);
const error = ref('');

const apiUrl = "https://b8ae-36-72-54-195.ngrok-free.app/api/master-app";

const fetchOptions = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json'
      }
    });
    options.value = response.data.data;
  } catch (err) {
    error.value = 'Data tidak ada';
    console.error(err);
  } finally {
    loadingApi.value = false;
  }
};
onMounted(() => {
  fetchOptions();
});

//fungsi dialog halaman login
const tambahBug = ref(false);
const tambahRequest = ref(false);

const closeDialog = () => {
  form.email=''
  form.appId=''
  form.reportTitle=''
  fileListReq.value = [];
  fileListBug.value = [];
  tambahBug.value = false
  tambahRequest.value = false
} 

//fungsi uploud gambar
const fileListBug = ref([]);
const fileListReq = ref([]);
const dialogForm = ref(false);
const previewImage = ref('');

const riviewGambar = (file) => {
  previewImage.value = file.url || file.raw ? URL.createObjectURL(file.raw) : '';
  dialogForm.value = true;
};

//fungsi dialog form
const form = reactive({
  email: '',
  appId: '',
  reportTitle: '',
  fileListBug:''
});
const submitData = () => {
  console.log('Data:', form.email, form.appId, form.reportTitle);
  // console.log('Up Files:', fileListBug.value, fileListReq.value);
};
  
//fungsi login
const email = ref("");
const password = ref("");
const loadingApiLogin = ref(false);
const router = useRouter();
const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));

const login = async () => {
  if (!email.value || !password.value) {
    Swal.fire("Isi Username dan Password");
    return;
  }
  loadingApiLogin.value = true;
  try {
    const response = await axios.post("https://b8ae-36-72-54-195.ngrok-free.app/api/login", {
      email: email.value,
      password: password.value,
    }, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json'
      }
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    Swal.fire("Login berhasil!");
    router.push("/User");
  } catch (error) {
    Swal.fire("Login gagal: " + (error.response?.data?.message || "Terjadi kesalahan"));
  } finally {
    loadingApiLogin.value = false;
  }
};

const registrasi = async () => {
  router.push("/registrasi")
};
</script>

<style lang="css">
.border-red-500 {
  border: 5px solid red !important;
  border-radius: var(--rounded-xs, 6px);
}

</style>