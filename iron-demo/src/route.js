// route.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'
import User from './views/User.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: () => import('./views/About.vue') },
    { path: "/user/:userId", component: User },
    { path: '/day3_weather', component: () => import('./views/day3_weather.vue') },
    { path: '/day4_covid19', component: () => import('./views/day4_covid19.vue') },
  ],
});