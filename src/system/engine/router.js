import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/dashboard.vue"
import Login from "@/views/login/index.vue"
import Menu from "@/views/header/sidemenu.vue"
import TopMenu from "@/views/header/topmenu.vue"
import Product from "@/views/page/Tablayout/Product/Product_layout.vue"
import Category from "@/views/page/Tablayout/Category/Category_layout.vue"

const routes = [
    { path: '/', component: Dashboard, name: 'Homepage' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/menu', component: Menu, name: 'menu' },
    { path: '/topmenu', component: TopMenu, name: 'topmenu' },
    { path: '/product', component: Product, name: 'product' },
    { path: '/category', component: Category, name: 'category' },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router