<template>
  <div>
      <div class="bg-gray-100 w-full">
  <div class=" shadow-md py-2 bg-white bg">

  <!-- Navbar start -->
      <div class="max-w-full flex justify-between">
          <img class="w-15 h-[45px]":src="logo" >
              <div>
                  <button class="px-4" >
                      <img class="h-8 w-5" :src="notification"  >
                  </button>
                  <el-popover placement="bottom" :width="200" trigger="manual" v-model:visible="profil">
  <h1 class="text-center font-semibold">Profil</h1>
  <div v-if="loading" class="text-center text-gray-500">Memuat...</div>
  <div v-else-if="error" class="text-[#FF9934] text-center">{{ errorProfil }}</div>
  <div v-else>
    <h1 class="text-center font-semibold text-lg">{{ user.email }}</h1>
    <p class="text-center text-sm font-semibold">{{ user.no_hp }}</p>
  </div>
  <div class="text-center mt-2">
    <button @click="logout" class="px-3 py-1 bg-[#FF9934] text-white rounded-md">Logout</button>
  </div>
  <template #reference>
    <button @click="openPopover">
      <img class="h-8 w-9 rounded-full pr-1 mt-2" :src="avatar" alt="Avatar">
    </button>
  </template>
</el-popover>
           </div>
      </div>
  </div>
  <!-- Navbar end -->

  <!-- Dashboard start -->
  <div class="py-4 w-full justify-center flex">
  <section class="w-full pb-9 mt-0 mx-4 my-4 bg-white rounded-md">
      <div class="flex px-1 py-2">
          <img class
          ="mt-1 -mr-2 w-11 h-5" :src="mdi">
      <h1 class="py-1 text-sm font-semibold">Dashboard</h1>
      </div>
      <!-- Card 1 -->
      <div class="flex flex-col md:flex-row gap-5 mx-3 ">
          <div class="flex items-center bg-[#F2F6F9] w-full h-20 p-4 rounded-lg">
  <div class="flex flex-col">
      <span class="font-semibold text-xl">Feedback Summary</span>
      <span class="text-xs text-gray-500">Januari 2024</span>
  </div>
  <div class="w-40 h-16 bg-[#FFF8E6] ml-auto rounded-lg">
      <div class="flex justify-end mt-2">
      <h1 class="text-xs font-semibold mr-auto ml-3">Submited Feedback</h1>
      <div>
  <div>
  <el-icon class="mr-2 mb-2" >
    <MoreFilled />
  </el-icon>
</div>
</div>
      </div>
      <h1 class="font-bold flex justify-end mr-2 text-lg ">6</h1>
  </div>
</div>    
<div class="flex flex-col md:flex-row">
              <div class="border border-r-slate-200 bg-[#F2F6F9] h-20 w-full md:w-72 rounded-t-lg md:rounded-l-lg md:rounded-none">
                  <div class="flex">
                      <h1 class="font-semibold mr-3 mt-2 text-xs ml-auto">Submited Bug Report</h1>
                  </div>   
                  <img class="ml-4 mt-1" :src="mdi2">
                  <h1 class="font-bold flex justify-end mr-3 -m-4 text-lg">2</h1>
              </div>       
              <div class="border border-r-slate-200 bg-[#F2F6F9] h-20 w-full md:w-72">
                  <div class="flex">
                      <h1 class="font-semibold mr-3 mt-2 text-xs ml-auto">Submited Feature Request</h1>
                  </div>
                  <img class="ml-5 mt-2.5" :src="note">
                  <h1 class="font-bold flex justify-end mr-3 -m-2 text-lg">2</h1>
              </div>
              <div class="border border-r-slate-200 bg-[#F2F6F9] h-20 w-full md:w-72 rounded-b-lg md:rounded-r-lg md:rounded-none">
                  <div class="flex">
                      <h1 class="font-semibold mr-3 mt-2 text-xs ml-auto">Submited General Feedback</h1>
                  </div>
                  <img class="ml-3.5 mt-1.5 " :src="gmail">
                  <h1 class="font-bold flex justify-end mr-3 -m-2 text-lg">2</h1>
              </div>
          </div>
      </div> 
      <!-- Dashboard End -->
      
      <!-- Report Start -->
        <div class="flex">
          <div class="flex px-1 py-2 ">
              <img class="px-3 mt-1 w-11 h-5" :src="mdi2">
              <h1 class="text-sm py-1 -mx-2 font-semibold">Bug Report</h1>
          </div>
          <div class="flex mx-auto pl-14  ">    
              <img class="px-3 mt-4 w-9 h-3.5  hidden md:block" :src="note">
              <h1 class="text-sm mt-1.5 py-2 font-semibold pl-0  hidden md:block ">Feature Request</h1>
          </div>
      </div>
      <!-- Card 2 -->
      <div class="mx-3 my-2 grid gap-5 grid-cols-1 md:grid-cols-2">
  <div class="bg-[#F2F6F9] rounded-xl p-4">
    <Bug />
  </div>

  <div class="order-1 md:order-none">
    <div class="flex items-center gap-2 mb-3 md:hidden">    
      <img class="h-auto w-3 mx-1 " :src="note"> 
      <h1 class="text-sm font-semibold ">
        Feature Request
      </h1>
    </div>
    <div class="bg-[#F2F6F9] rounded-xl p-4">
      <Request />
    </div>
  </div>
</div>
      <!-- Report End -->

      <!-- Feedback Start -->
      <div class="flex px-4 py-2 ">
          <img class="mt-1 -mr-2 w-5 h-5" :src="listapp">
      <h1 class="py-1 px-3 text-sm font-semibold">List Aplikasi</h1>
      </div>
      <!-- Card 3 -->
  <div class="mx-3 ">
      <div class="bg-[#F2F6F9] h-auto w-full rounded-xl" v-loading="loading">
          <table class="w-full text-[12px]">
    <thead>
      <tr>
        <th class="text-start pl-3">Id</th>
        <th class="text-center w-full pl-40 py-3 text-xs">Web / App Name</th>
        <th class="pr-40 py-3 text-end text-xs font-xs">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="error">
        <td colspan="3" class="text-center text-red-500">{{ error }}</td>
      </tr>
      <tr v-for="app in apps" :key="app.id" class="border-t">
        <td class="text-[10px]">
          <h1 class="text-[12px] pl-3 font-semibold my-2">{{ app.id }}</h1>
        </td>
        <td class="text-center pl-40 text-[12px]">{{ app.app_name }}</td>
        <td class="flex justify-end pr-36 text-[10px]">
          <div @click="fetchAppsId(app.id)" class="py-8 mr-1" >
            <button class="bg-[#FF9934] text-white px-4 py-1 rounded" @click="showAppDetail(app)">
                Detail
              </button>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
  <el-dialog 
    v-model="dialogDetail" 
    width="30%" 
    :before-close="() => dialogDetail = false"
  >
    <h1 class="font-bold text-center my-2">Detail Aplikasi</h1>
    <p class="font-semibold">ID : {{ selectedApp.id }}</p>
    <p class="font-semibold">App Name : {{ selectedApp.app_name }}</p>
    <p class="font-semibold">Deskripsi Aplikasi : {{ selectedApp.deskripsi_aplikasi }}</p>
    <p class="font-semibold">Created : {{ selectedApp.created_at }}</p>

    <template #footer>
      <el-button @click="dialogDetail = false">Tutup</el-button>
    </template>
  </el-dialog>
  </div>
  <div>     
  </div>
      <!-- Feedback End -->
      </div>
      <div class="flex justify-end pt-5">
          <h1 class="mr-4 mt-1 text-[#475569]"><</h1>
          <h1 class="text-[12px] text-[#475569] mt-2 mr-4">Previous</h1>
          <h1 class="mr-4 text-[13px] text-[#475569] mt-2">1</h1>
          <h1 class="h-8 w-8 text-center mt-0.5 text-[#475569] text-[13px] grid place-items-center border border-[#ACBDCE] mr-4 ">2</h1>
          <h1 class="text-[13px] mt-2 text-[#475569]">3</h1>
          <el-icon class="ml-5 mr-5 mt-2"><MoreFilled /></el-icon>
          <h1 class="mr-4 text-[12px] mt-2 text-[#475569]">Next</h1>
          <h1 class="mr-12 mt-1 text-[#475569]">></h1>
      </div>      
  </section>
</div>
</div>
<div class="flex justify-end items-center pr-3 text-xs w-full h-5 bg-pink-50">@2023 Nexamedia Pratama</div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Bug from '../components/Bug.vue'
import Request from '../components/Request.vue'
import { avatar, notification, logo, mdi, mdi2, listapp, note, gmail } from "../assets"
import { MoreFilled } from '@element-plus/icons-vue'


//ambil data 
const apps = ref([]);      
const loading = ref(true);
const error = ref('');
const apiUrl = "https://b8ae-36-72-54-195.ngrok-free.app/api/master-app"; 

const fetchApps = async () => {
try {
  const response = await axios.get(apiUrl, {
    headers: {
      'ngrok-skip-browser-warning': 'true',
      'Content-Type': 'application/json',
    },
  });
  apps.value = response.data.data;
} catch (err) {
  error.value = 'Gagal mengambil data!';
  console.error(err);
} finally {
  loading.value = false;
}
};
onMounted(() => {
fetchApps();
});

//lihat detail
const dialogDetail = ref(false); 
const selectedApp = ref({});
const showAppDetail = (app) => {
selectedApp.value = app;       
dialogDetail.value = true;    
};
const fetchAppsId = async (id) => {
try {
  const response = await axios.get(`${apiUrl}/${id}`, {
    headers: {
      'ngrok-skip-browser-warning': 'true',
      'Content-Type': 'application/json',
    },
  });
  selectedApp.value = response.data.data;
  dialogDetail.value = true;
} catch (err) {
  error.value = 'Gagal mengambil detail aplikasi!';
  console.error(err);
}
};

// //fungsi profil
const profil = ref(false);
const openPopover = () => {
profil.value = true;
fetchProfil();
};
const user = ref({ email: "", no_hp: "" });

onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});

//fungsi logout
const logout = () => {
localStorage.removeItem("token");
window.location.href = "/login"; 
};

</script>

<style lang="scss" scoped>


</style>