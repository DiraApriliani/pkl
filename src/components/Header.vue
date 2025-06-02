<template>
  <header class="fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-900 shadow">
    <div class="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
      <!-- Logo -->
      <a href="#home" class="flex-shrink-0">
        <img :src="logologin" alt="Logo" class="w-32 sm:w-36 md:w-40 lg:w-48 h-auto" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center space-x-8">
        <router-link
      to="/dashboard"
      class="nav-link"
      exact-active-class="active-link"
    >
      Home
    </router-link>

        <router-link
          to="/onsale"
          class="nav-link"
          exact-active-class="active-link"
        >
          On Sale
        </router-link>

        <router-link
          to="/gift"
          class="nav-link"
          exact-active-class="active-link"
        >
          Gifting
        </router-link>

        <router-link
          to="/custom"
          class="nav-link"
          exact-active-class="active-link"
        >
          Custom
        </router-link>

        <el-icon class="icon-large"><ShoppingCart /></el-icon>
        <el-icon class="icon-large"><Search /></el-icon>
        <button @click="toggleTheme" class="text-xl">
          {{ isDark ? '🌙' : '☀️' }}
        </button>
      </nav>

      <!-- Mobile nav toggle -->
      <button @click="menuOpen = !menuOpen" class="lg:hidden text-gray-800 dark:text-white">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </div>

    <!-- Mobile nav -->
    <nav v-show="menuOpen" class="lg:hidden bg-white dark:bg-gray-900 shadow-md">
      <ul class="flex flex-col space-y-2 p-4">
        <li>
          <router-link to="/" class="block" exact-active-class="active-link">Home</router-link>
        </li>
        <li>
          <router-link to="/onsale" class="block" exact-active-class="active-link">On Sale</router-link>
        </li>
        <li>
          <router-link to="/gift" class="block" exact-active-class="active-link">Gifting</router-link>
        </li>
        <li>
          <router-link to="/custom" class="block" exact-active-class="active-link">Custom</router-link>
        </li>
        <li class="flex items-center space-x-4 pt-2">
          <el-icon><ShoppingCart /></el-icon>
          <el-icon><Search /></el-icon>
          <button @click="toggleTheme">{{ isDark ? '🌙' : '☀️' }}</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ShoppingCart, Search } from '@element-plus/icons-vue'
import { logologin } from '../assets' // pastikan path ini benar

const menuOpen = ref(false)
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.btn-primary {
  @apply px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition;
}
.nav-link {
  position: relative;
  color: #4B5563; /* gray-600 */
  font-size: 1.25rem; /* text-xl */
  padding-bottom: 0.5rem; /* pb-2 */
  transition: color 0.3s;
  text-decoration: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background-color: #D97706; /* yellow-600 */
  transition: width 0.3s ease-in-out;
  pointer-events: none;
}

.nav-link:hover {
  color: #D97706;
}

.nav-link:hover::after {
  width: 100%;
}

.active-link {
  color: #D97706 !important;
}

.active-link::after {
  width: 100% !important;
}

.active-link:hover::after {
  width: 100% !important;
}
</style>
