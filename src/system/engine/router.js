import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/dashboard.vue"
import Login from "@/views/login/index.vue"

const routes = [
    { path: '/', component: Dashboard, name: 'Homepage' },
    { path: '/login', component: Login, name: 'Login' },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router