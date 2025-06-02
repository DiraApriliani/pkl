import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';  // tambah ini

const app = createApp(App);
const pinia = createPinia();          // tambah ini

app.use(router);
app.use(ElementPlus);
app.use(pinia);                      // pasang Pinia di sini
app.mount('#app');

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); 
  if (to.path === '/user' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
