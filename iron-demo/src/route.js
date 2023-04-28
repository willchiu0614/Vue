// route.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'
import User from './views/User.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: "/user/:userId", component: User },
    { path: '/about', component: () => import('./views/About.vue') },
    
  ],
});