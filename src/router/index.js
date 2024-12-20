import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: defineAsyncComponent(() => import('../view/Login.vue')),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: defineAsyncComponent(() => import('../view/Dashboard.vue')),
  },
  {
    path: '/user',
    name: 'User',
    component: defineAsyncComponent(() => import('../view/User.vue')),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router