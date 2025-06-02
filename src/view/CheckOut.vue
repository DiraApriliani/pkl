<!-- CheckoutPage.vue -->
<template>
  <div class="max-w-4xl mx-auto p-4 space-y-6">
    <!-- Alamat Pengiriman -->
    <section class="bg-white p-4 rounded-xl shadow">
      <h2 class="text-lg font-semibold mb-2">Alamat Pengiriman</h2>
      <div class="text-sm">
        <p class="font-medium">Budi Santoso</p>
        <p>Jl. Mawar No. 10, Jakarta</p>
        <p>0812-3456-7890</p>
        <button class="text-blue-600 text-sm mt-2 hover:underline">Ubah Alamat</button>
      </div>
    </section>

    <!-- Daftar Produk -->
    <section class="bg-white p-4 rounded-xl shadow">
      <h2 class="text-lg font-semibold mb-2">Produk Dipesan</h2>
      <div v-for="item in cartItems" :key="item.id" class="flex items-center gap-4 py-2 border-b last:border-none">
        <img :src="item.image" alt="" class="w-16 h-16 object-cover rounded" />
        <div class="flex-1">
          <p class="font-medium">{{ item.name }}</p>
          <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
        </div>
        <div class="font-semibold text-right">Rp {{ item.price * item.quantity }}</div>
      </div>
    </section>

    <!-- Pengiriman -->
    <section class="bg-white p-4 rounded-xl shadow">
      <h2 class="text-lg font-semibold mb-2">Pengiriman</h2>
      <select class="input">
        <option>JNE - Reguler (2-3 hari)</option>
        <option>SiCepat - Best (1-2 hari)</option>
        <option>J&T - Ekspress</option>
      </select>
    </section>

    <!-- Metode Pembayaran -->
    <section class="bg-white p-4 rounded-xl shadow">
      <h2 class="text-lg font-semibold mb-2">Metode Pembayaran</h2>
      <select class="input">
        <option>Transfer Bank (BCA)</option>
        <option>COD (Bayar di Tempat)</option>
        <option>ShopeePay / QRIS</option>
      </select>
    </section>

    <!-- Ringkasan & Bayar -->
    <section class="bg-white p-4 rounded-xl shadow">
      <div class="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>Rp {{ subtotal }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Ongkir</span>
        <span>Rp {{ shipping }}</span>
      </div>
      <hr />
      <div class="flex justify-between font-semibold text-lg mt-2">
        <span>Total</span>
        <span>Rp {{ total }}</span>
      </div>
      <button class="mt-4 w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
        Buat Pesanan
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cartItems = ref([
  {
    id: 1,
    name: 'Kaos Oversize Hitam',
    quantity: 2,
    price: 75000,
    image: 'https://via.placeholder.com/80'
  },
  {
    id: 2,
    name: 'Celana Cargo Cream',
    quantity: 1,
    price: 125000,
    image: 'https://via.placeholder.com/80'
  }
])

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const shipping = ref(15000)

const total = computed(() => subtotal.value + shipping.value)
</script>

<style scoped>
.input {
  @apply w-full border rounded-lg px-4 py-2 text-sm;
}
</style>
