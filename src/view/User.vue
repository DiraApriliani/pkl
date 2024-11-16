<template>
    <div>
        <div class="bg-gray-100 w-full">
    <div class=" shadow-md py-2 bg-white bg">
                <!-- Navbar start -->
        <div class="max-w-full flex justify-between">
            <img class="w-15 h-[45px]":src="logo" >
                <div>
                    <button class="px-4">
                        <img class="h-8 w-5" :src="notification" >
                    </button>
                <button>
                    <img class="h-8 w-9 rounded-full pr-1 mt-2" :src="avatar" alt="Avatar">
                </button>
             </div>
        </div>
    </div>
                <!-- Navbar end -->

    <!-- Dashboard start -->
    <div class="py-4 w-full justify-center flex ">
    <section class="w-full pb-9 mt-0 mx-4 my-4 bg-white rounded-md">
        <div class="flex px-1 py-2 ">
            <img class="mt-1 -mr-2 w-11 h-5" :src="mdi">
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
    
    <el-icon class="mr-2 mb-2" @click="showDatePicker = !showDatePicker">
      <MoreFilled />
    </el-icon>

    <el-date-picker
      v-if="showDatePicker"
      v-model="selectedDate"
      type="date"
      placeholder="Pilih tanggal"
      @blur="showDatePicker = false"
    />
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
                    <img class="ml-4 mt-1 h-6.5" :src="gmail">
                    <h1 class="font-bold flex justify-end mr-3 -m-3 text-lg">2</h1>
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
        <div class="mx-3 gap-5 flex flex-col md:flex-row ">
            <div class="bg-[#F2F6F9] h-auto w-full rounded-xl">
                <table class="min-w-full ">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 text-left text-xs font-xs">Web / App Name</th>
                            <th class="px-8 py-3 text-left text-xs font-xs">Report Title</th>
                            <th class="text-center pl-8 py-3 text-xs font-xs">Status</th>
                            <th class="px-3 py-3 text-end text-xs font-xs">Action</th>
                        </tr>
                    </thead>
                    
                        <tr class="border-t">
                            <td class="px-3 text-[10px]">Web Skoring (Diskors)</td>
                            <td class="px-8 text-[10px]">Auto Refresh</td>
                            <td class="px-1 text-[10px]">
                                <div class="text-center font-semibold mx-auto -mr-2 w-[90px] h-[18px] border border-[#1677FF] text-[#1677FF]  bg-[#E6F4FF] rounded-[3px]">Pending Review</div>
                            </td>
                            <td class="flex justify-end px-3 py-2 text-[10px]">
                                <img class="w-[35px] h-[32px] " :src="Button">
                            </td>
                        </tr>
                        <tr v-for="(item, index) in tableData" :key="index" class="hover:bg-gray-100 border-t">
          <td class="py-2 px-4 text-[10px]">{{ item.Name }}</td>
          <td class="py-2 px-8 text-[10px]">{{ item.Contents }}</td>
          <td class="py-2 px-1 text-[10px]">
            <div class="text-center font-semibold mx-auto -mr-2 w-[90px] h-[18px] border border-[#1677FF] text-[#1677FF] bg-[#E6F4FF] rounded-[3px]">
              {{ item.Status }}
            </div>
          </td>
          <td class="flex justify-end px-3 py-2 text-[10px] ">
            <img
              class="w-[35px] h-[32px] cursor-pointer"
              :src="Button"
              @click="handleAction(item)"
              alt="Action Button"
            />
          </td>
        </tr>
                    </table>
                    
                    
                </div>
                
                <div class="flex -my-1.5">    

<img class="px-3 -mt-0 -ml-1 w-9 h-3.5 block lg:hidden" :src="note">
<h1 class="text-sm -mt-0.5 -ml-1 font-semibold  block lg:hidden md:hidden">Feature Request</h1>
</div>

                    <div class="bg-[#F2F6F9] h-auto w-full rounded-xl  ">
                
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 text-left text-xs font-xs">Web / App Name</th>
                            <th class="px-8 py-3 text-left text-xs font-xs">Report Title</th>
                            <th class="pl-8 py-3 text-center text-xs font-xs">Status</th>
                            <th class="px-3 py-3 text-end text-xs font-xs">Action</th>
                        </tr>
                    </thead>
                    
                        <tr class="border-t">
                            <td class="px-3 py-4 text-[10px]">Web Skoring (Diskors)</td>
                            <td class="px-8 py-4 text-[10px]">Auto Refresh</td>
                            <td class=" px-1 py-4 text-[10px]">
                                <div class="text-center font-semibold mx-auto -mr-2 w-[90px] h-[18px] border border-[#1677FF] text-[#1677FF]  bg-[#E6F4FF] rounded-[3px]">Pending Review</div>
                            </td>
                            <td class="flex justify-end px-3 py-2 text-[10px]">
                                <img class="w-[35px] h-[32px] " :src="Button">
                            </td>
                        </tr>
                    
                        <tr v-for="(item, index) in tableData" :key="index" class="hover:bg-gray-100 border-t">
          <td class="py-2 px-4 text-[10px]">{{ item.Name }}</td>
          <td class="py-2 px-8 text-[10px]">{{ item.Contents }}</td>
          <td class="py-2 px-1 text-[10px]">
            <div class="text-center font-semibold mx-auto -mr-2 w-[90px] h-[18px] border border-[#1677FF] text-[#1677FF] bg-[#E6F4FF] rounded-[3px]">
              {{ item.Status }}
            </div>
          </td>
          <td class="flex justify-end px-3 py-2 text-[10px]">
            <img
              class="w-[35px] h-[32px] cursor-pointer"
              :src="Button"
              @click="handleAction(item)"
              alt="Action Button"
            />
          </td>
        </tr>
                </table>
            </div>
        </div>
        <!-- Report End -->

        <!-- Feedback Start -->
        <div class="flex px-4 py-2 ">
            <img class="mt-1 -mr-2 w-5 h-5" :src="gmail">
        <h1 class="py-1 px-3 text-sm font-semibold">General Feedback List</h1>
        </div>
        <!-- Card 3 -->
    <div class="mx-3 ">
        <div class="bg-[#F2F6F9] h-auto w-full rounded-xl">
            <table class="min-w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 text-left text-xs font-xs">Feedback</th>
                            <th class="pr-40 py-3 text-end text-xs font-xs">Action</th>
                        </tr>
                    </thead>
                    
                        <tr class="border">
                            <td class="px-3  text-[10px]">
                                <h1 class="text-[11px] font-semibold"> Tema Baru Untuk Dashboard </h1> 
                                <h1 class="text-[#18181A]">Sepertinya lebih bagus jika bagian Dashboard mendapatkan peningkatan dari segi tampilan</h1>
                            </td>
                            <td class="flex justify-end px-36 py-2  text-[10px]">
                                <h1 class="text-[13px] px-3 text-[#475569]">Lihat</h1>
                                <img class="w-[16px] h-[14px] mt-1" :src="back">
                            </td>
                        </tr>
                        <tr class="">
                            <td class="px-3 text-[10px]">
                                <h1 class="text-[11px] font-semibold">Sistem Rating</h1> 
                                <h1 class="text-[#18181A]">Tingkatkan sistem teknis untuk pemberian rating webapp</h1>
                                
                            </td>
                            <td class="flex justify-end px-36 py-2  text-[10px]">
                                <h1 class="text-[13px] px-3 text-[#475569]">Lihat</h1>
                                <img class="w-[16px] h-[14px] mt-1" :src="back">
                            </td>
                        </tr>
                        
   
                </table>

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
<div class="flex justify-end items-center text-xs w-full h-5 bg-pink-50">@2023 Nexamedia Pratama</div>


</div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'


import { avatar, notification, logo, mdi, mdi2, gmail, note, Button, back } from "../assets"
import { Setting, MoreFilled } from '@element-plus/icons-vue'
import { ElDatePicker } from 'element-plus';


const showDatePicker = ref(false);
const selectedDate = ref(null);

const tableData = ref([])


const table = async () => {
  try {
    const response = await axios.get('https://api.restful-api.dev/objects?id=3&id=5&id=7')
    const comments = response.data

   
    tableData.value = comments.map(comment => ({
      id: comment.id || 'Unknown Id',
      Name: comment.name || 'Unknown Name',
      Contents: comment.contents || 'No Title',
      Status: 'Pending Review',  
      Action: 'View'  
    }))
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message)
  }
}

onMounted(() => {
  table()
})


const handleAction = (item) => {
  alert(`${item.id}. ${item.Name}`);
}



</script> 


<style lang="scss" scoped>

</style>