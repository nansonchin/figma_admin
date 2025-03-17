import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/dashboard.vue"
import Login from "@/views/login/index.vue"
import Menu from "@/views/header/sidemenu.vue"
import TopMenu from "@/views/header/topmenu.vue"
import Product from "@/views/page/Tablayout/Product/Product_layout.vue"
// import Category from "@/views/page/Tablayout/Category/Category_layout.vue"
import Setting from "@/views/page/Tablayout/Setting/Setting_layout.vue"
import ChangeAdmin from "@/views/page/PageDesign/Setting/change_admin_password.vue"
import backup from "@/views/page/PageDesign/Setting/back_up.vue"
import importFile from "@/views/page/PageDesign/Setting/import.vue"
import sessionTime from "@/views/page/PageDesign/Setting/session_time.vue"
import enable2fa from "@/views/page/PageDesign/Setting/enable_2fa.vue"
import inbox from "@/views/page/PageDesign/Notification/inbox_message.vue"
import notification from "@/views/page/PageDesign/Notification/notification.vue"
import news from "@/views/page/PageDesign/Notification/news.vue"
import users from "@/views/page/PageDesign/User/user.vue"
import category from "@/views/page/PageDesign/Category/category.vue"
import payment from "@/views/page/PageDesign/Payment/payment.vue"

const routes = [
    { path: '/', component: Dashboard, name: 'Homepage' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/menu', component: Menu, name: 'menu' },
    { path: '/topmenu', component: TopMenu, name: 'topmenu' },
    { path: '/product', component: Product, name: 'product' },
    { path: '/category', component: category, name: 'category' },
    { path: '/setting', component: Setting, name: 'setting' },
    { path: '/changeAdmin', component: ChangeAdmin, name: 'changeAdmin' },
    { path: '/backup', component: backup, name: 'backup' },
    { path: '/import', component: importFile, name: 'import' },
    { path: '/enable2fa', component: enable2fa, name: 'enable2fa' },
    { path: '/inbox', component: inbox, name: 'inbox' },
    { path: '/notification', component: notification, name: 'notification' },
    { path: '/news', component: news, name: 'news' },
    { path: '/users', component: users, name: 'users' },
    { path: '/payment', component: payment, name: 'payment' },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router