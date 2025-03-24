<template>
    <div class="">
      <!-- Tabel -->
      <div class="bg-[#F2F6F9] h-auto w-full rounded-xl">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-3 py-3 text-left text-xs">Web / App Name</th>
              <th class="px-8 py-3 text-left text-xs">Report Title</th>
              <th class="text-center pr-10 py-3 text-xs">Status</th>
              <th class="pr-6 py-3 text-end text-xs">Action</th>
              <th class="px-3 text-lg">
                <div class="w-[28px] h-[30px] mr-4 bg-slate-200 text-center my-3 rounded-md font-bold cursor-pointer"
                     @click="openFormDialog()"> + </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in reports" :key="index" class="hover:bg-gray-100 border-t">
              <td class="px-3 text-[10px]">{{ getAppName(item.app_id) }}</td>
              <td class="px-8 text-[10px]">{{ item.report_title }}</td>
              <td class="px-1 text-[10px]">
                <Status :status="item.status_label" />
              </td>
              <td class="flex justify-end px-3 py-2 text-[10px]">
                <button class="bg-[#FF9934] text-white px-4 py-1 rounded" @click="openDetailDialog(item)">
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Dialog Detail -->
      <el-dialog v-model="iniDialogDetail" width="500px" class="text-center font-bold">
        <h1 class="flex justify-center mb-4">Detail Report</h1>
        <div v-if="selectedReport">
          <p class="text-start">App Name: {{ getAppName(selectedReport.app_id) }}</p>
          <p class="text-start">Report Title: {{ selectedReport.report_title }}</p>
          <p class="text-start">Detail Report: {{ selectedReport.detail_report }}</p>
          <p v-if="selectedReport.file_report" class="text-start">File Report:
            <img :src="tampilGambar(selectedReport.file_report)" alt="Report Image" class="mt-2 max-h-32 cursor-pointer"
                 @click="riviewGambar(selectedReport.file_report)" />
          </p>
        </div>
      </el-dialog>
  
      <!-- Image Preview Dialog -->
      <el-dialog v-model="isImagePreviewVisible" width="600px">
        <el-image :src="imagePreviewUrl" fit="contain" />
      </el-dialog>
  
      <!-- Dialog Form Tambah Data -->
      <el-dialog v-model="dialogTambahData" width="500px" class="text-center font-bold">
        <h1 class="flex justify-center mb-4">Feature Request</h1>
        <el-form :model="form">
          <el-form-item label="Web/App Name" label-width="146px">
            <el-select v-model="form.appId" placeholder="Pilih Web/App">
              <el-option v-for="item in options" :key="item.id" :label="item.app_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="Report Title" label-width="146px">
            <el-input v-model="form.report_title" />
          </el-form-item>
          <el-form-item label="Detail Report" label-width="146px">
            <el-input v-model="form.detail_report" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-upload 
              class="upload-demo"
              action=""
              accept=".jpg,.jpeg,.png"
              :auto-upload="false"
              :on-change="handleFileUpload"
              :on-preview="riviewGambar"
              :on-remove="hapusGambar"
              :before-upload="validationGambar"
            >  
              <el-button color="#FF9934">
                <h1 class="text-white">Tambah Gambar</h1>
              </el-button>
              <template #tip>
        <div class="el-upload__tip">
          Hanya file dengan format jpg/png dan ukuran kurang dari 500KB yang dapat diunggah.
        </div>
      </template>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer">
          <el-button @click="dialogTambahData= false">Cancel</el-button>
          <el-button color="#FF9934" @click="submitData">
            <h1 class="text-white">Submit</h1>
          </el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  // import { ref, reactive, onMounted } from 'vue';
  // import axios from 'axios';
  // import { ElMessage } from 'element-plus';
  // import Status from './Status.vue';
  
  // const dialogTambahData = ref(false);
  // const iniDialogDetail = ref(false);
  // const selectedReport = ref(null);
  // const reports = ref([]);
  // const options = ref([]);
  // const isImagePreviewVisible = ref(false); 
  // const imagePreviewUrl = ref(''); 
  
  // const form = reactive({
  //   appId: '',
  //   report_title: '',
  //   detail_report: '',
  //   file_report: null,
  //   file_preview: null,
  // });
  
  // // const closeDialog = () => {
  // //   form.appId=''
  // //   form.report_title=''
  // //   form.detail_report=''
  // //   form.file_report=[];
  
  // // } 
  
  // onMounted(() => {
  //   loadReports();
  //   fetchOptions();
  // });
  
  // async function loadReports() {
  //   try {
  //     const response = await axios.get("http://192.168.110.184:8000/api/bug-reports", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'ngrok-skip-browser-warning': 'true',
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     reports.value = response.data.data;
  //   } catch (error) {
  //     console.error('Error fetching reports:', error);
  //   }
  // }
  
  // async function fetchOptions() {
  //   try {
  //     const response = await axios.get("http://192.168.110.184:8000/api/master-app", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'ngrok-skip-browser-warning': 'true',
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     options.value = response.data.data;
  //   } catch (err) {
  //     console.error('Error fetching options:', err);
  //   }
  // }
  
  // const getAppName = (appId) => {
  //   const app = options.value.find((item) => item.id === appId);
  //   return app ? app.app_name : 'Unknown';
  // };
  
  // const tampilGambar = (file) => {
  //   if (!file) return ''; 
  //   return file.startsWith('http') ? file : `http://192.168.110.184:8000/storage/${file}`;
  // };
  
  // function openDetailDialog(report) {
  //   selectedReport.value = report;
  //   iniDialogDetail.value = true;
  // }
  
  // function openFormDialog() {
  //   Object.assign(form, {
  //     appId: '',
  //     report_title: '',
  //     detail_report: '',
  //     file_report: null,
  //     file_preview: null,
  //   });
  //   dialogTambahData.value = true;
  // }
  
  // const handleFileUpload = (file) => {
  //   form.file_report = file.raw;
  //   form.file_preview = URL.createObjectURL(file.raw);
  // };
  
  // const riviewGambar = (file) => {
  //   imagePreviewUrl.value = file.url || file.raw ? URL.createObjectURL(file.raw) : '';
  //   isImagePreviewVisible.value = true; 
  // };
  
  // const hapusGambar = (file) => {
  //   fileList.value = fileList.value.filter(item => item.uid !== file.uid);
  // };
  
  // const validationGambar = (file) => {
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   const isLt500KB = file.size / 1024 < 500;
    
  //   if (!isJpgOrPng) {
  //     ElMessage.error('Hanya file JPG/PNG yang diperbolehkan!');
  //     return false;
  //   }
  //   if (!isLt500KB) {
  //     ElMessage.error('Ukuran file harus kurang dari 500KB!');
  //     return false;
  //   }
  //   return true;
  // };
  
  // const submitData = async () => {
  //   if (!form.appId || !form.report_title || !form.detail_report || !form.file_report) {
  //     ElMessage.error('Semua field harus diisi!');
  //     return;
  //   }
  
  //   const formData = new FormData();
  //   formData.append('app_id', form.appId);
  //   formData.append('report_title', form.report_title);
  //   formData.append('detail_report', form.detail_report);
  //   formData.append('file_report', form.file_report);
  
  //   try {
  //     const response = await axios.post("http://192.168.110.184:8000/api/bug-reports", formData, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'Content-Type': 'multipart/form-data',
  //         'ngrok-skip-browser-warning': 'true',
  //       },
  //     });
  //     reports.value.unshift(response.data.data);
  //     ElMessage.success('Laporan berhasil ditambahkan!');
  //     dialogTambahData.value = false;
  //   } catch (error) {
  //     ElMessage.error('Terjadi kesalahan.');
  //   }
  // };
  </script>