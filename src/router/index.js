import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login", 
  },
  {
    path: "/login",
    name: "Login",
    component: defineAsyncComponent(() => import("../view/Login.vue")),
  },
  {
    path: "/user",
    name: "User",
    component: defineAsyncComponent(() => import("../view/User.vue")),
    meta: { requiresAuth: true }, 
  },
  {
    path: "/registrasi",
    name: "Registrasi",
    component: defineAsyncComponent(() => import("../view/Registrasi.vue")),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token"); 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); 
  } else {
    next(); 
  }
});

export default router;
