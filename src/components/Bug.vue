<template>
  <div>
    <!-- Tabel -->
    <div class="bg-[#F2F6F9] h-auto w-full rounded-xl">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-3 py-3 text-left text-xs">Web / App Name</th>
            <th class="px-8 py-3 text-left text-xs">Report Title</th>
            <th class="text-center pr-7 py-3 text-xs">Status</th>
            <th class="pr-6 py-3 text-end text-xs">Action</th>
            <th class="px-3 text-lg">
              <div class="w-[28px] h-[30px] mr-4 bg-slate-200 text-center my-3 rounded-md font-bold cursor-pointer"
                   @click="openFormDialog()"> + </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in bugReports" :key="report.id" class="hover:bg-gray-100 border-t">
            <td class="px-3 text-[10px]">{{ report.app_name }}</td>
            <td class="px-8 text-[10px]">{{ report.report_title }}</td>
            <td class="pl-3 text-[10px]">{{ report.status_label || 'Not available' }}</td>
            <td class="flex justify-end px-3 py-2 text-[10px]">
              <button class="bg-[#FF9934] text-white px-4 py-1 rounded" @click="showDetail(report)">
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Dialog Detail -->
    <el-dialog v-model="detail" title="Detail Bug Report" width="500px">
      <div>
        <p><strong>App Name:</strong> {{ selectedGetReport.app_name }}</p>
        <p><strong>Status Label:</strong> {{ selectedGetReport.status_label || 'Not available' }}</p>
        <p><strong>Report Title:</strong> {{ selectedGetReport.report_title }}</p>
        <p><strong>Detail Report:</strong> {{ selectedGetReport.detail_report }}</p>
        <div v-if="selectedGetReport.file_report">
          <p><strong>File Report:</strong></p>
          <img :src="getImageUrl(selectedGetReport.file_report)" 
            class="w-full h-auto mt-2 cursor-pointer"
            @click="previewGambar(getImageUrl(selectedGetReport.file_report))"/>
        </div>
      </div>
    </el-dialog>

    <!-- Dialog Tambah Data -->
    <el-dialog v-model="dialogTambahData" width="500px" class="text-center font-bold">
      <h1 class="flex justify-center mb-4">Bug Report</h1>
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
            accept=".jpg,.jpeg,.png"
            :auto-upload="false"
            :on-change="handleFileUpload"
            :on-preview="riviewGambar"
          >  
          <el-button color="#FF9934">
              <h1 class="text-white">Tambah Gambar</h1>
            </el-button>
            <template #tip>
      <div class="el-upload__tip">
        Hanya file dengan format jpg/png dan ukuran kurang dari 500KB yang dapat diunggah.
      </div>
      <el-dialog v-model="dialogRiviewGambar" title="Preview Gambar" width="50%" >
    <img v-if="previewImage" :src="previewImage" class="w-full" alt="Preview" /> 
    <template #footer>
      <el-button @click="dialogRiviewGambar = false">Tutup</el-button>
    </template>
  </el-dialog>
    </template>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="dialogTambahData = false">Cancel</el-button>
        <el-button color="#FF9934" @click="submitData">
          <h1 class="text-white">Submit</h1>
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const bugReports = ref([]);
const options = ref([]);
const form = reactive({
  appId: '',
  report_title: '',
  detail_report: '',
  file_report: null,
});

//get list app di tabel
const fetchBugReports = async () => {
  try {
    const response = await axios.get("http://192.168.110.184:8000/api/bug-reports/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
      },
    });
    bugReports.value = response.data.data;
  } catch (error) {
    console.error("Gagal mengambil data bug reports:", error);
  }
};

//get list app di dialog
const fetchOptions = async () => {
  try {
    const response = await axios.get("http://192.168.110.184:8000/api/master-app", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
      },
    });
    options.value = response.data.data;
  } catch (err) {
    console.error('Error fetching options:', err);
  }
};

onMounted(() => {
  fetchBugReports();
  fetchOptions();
});

//tambah data
const dialogTambahData = ref(false);
const openFormDialog = () => {
  Object.assign(form, { appId: '', report_title: '', detail_report: '', file_report: ''});
  dialogTambahData.value = true;
};

//detail bug report
const selectedGetReport = ref({});
const detail = ref(false);
const showDetail = (report) => {
  selectedGetReport.value = report;
  detail.value = true;
};

//up gambar
const handleFileUpload = (file) => {
  form.file_report = file.raw;
};

const dialogRiviewGambar = ref(false);
const previewImage = ref('');
const riviewGambar = (file) => {
  previewImage.value = file.url || file.raw ? URL.createObjectURL(file.raw) : '';
  dialogRiviewGambar.value = true;
};

//get url gambar
const getImageUrl = (filePath) => {
  if (!filePath) return "";

  if (filePath instanceof File) {
    return URL.createObjectURL(filePath);
  }

  if (filePath.startsWith("http://localhost")) {
    return filePath.replace("http://localhost:8000", "http://192.168.110.184:8000");
  }
  return filePath.includes("http") ? filePath : `http://192.168.110.184:8000/storage/${filePath}`;
};

//kirim data ke api
const submitData = async () => {
  if (!form.appId || !form.report_title || !form.detail_report || !form.file_report) {
    ElMessage.error('Semua field harus diisi!');
    return;
  }
  const formData = new FormData();
  formData.append('app_id', form.appId);
  formData.append('report_title', form.report_title);
  formData.append('detail_report', form.detail_report);
  formData.append('file_report', form.file_report);
  try {
    await axios.post("http://192.168.110.184:8000/api/bug-reports", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
        'ngrok-skip-browser-warning': 'true',
      },
    });

    dialogTambahData.value = false;
    ElMessage.success('Laporan berhasil ditambahkan!');
    await fetchBugReports(); 
  } catch (error) {
    ElMessage.error('Terjadi kesalahan.');
  }
};
</script>