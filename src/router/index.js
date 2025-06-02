// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../view/Home.vue"),
  },
  {
    path: "/onsale",
    name: "Onsale",
    component: () => import("../view/Onsale.vue"),
  },
  {
    path: "/gift",
    name: "Gift",
    component: () => import("../view/Gift.vue"),
  },
  {
    path: "/custom",
    name: "Custom",
    component: () => import("../view/Custom.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/Login.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../view/Admin.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/registrasi",
    name: "Registrasi",
    component: () => import("../view/Registrasi.vue"),
  },
  {
    path: "/kategori/:slug", // gunakan param dinamis
    name: "Kategori",
    component: () => import("../view/Kategori.vue"), // pastikan nama file sesuai
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router;
