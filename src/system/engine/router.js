import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/dashboard.vue"
import Home from "@/views/page/PageDesign/Home/home.vue"
import Login from "@/views/login/index.vue"
import Menu from "@/views/header/sidemenu.vue"
import TopMenu from "@/views/header/topmenu.vue"
import Product from "@/views/page/Tablayout/Product/Product_layout.vue"
import Category from "@/views/page/Tablayout/Category/Category_layout.vue"
import Setting from "@/views/page/Tablayout/Setting/Setting_layout.vue"
import UserRole from "@/views/page/Tablayout/UserRole/User_role_layout.vue"
import Member from "@/views/page/Tablayout/Member/member_layout.vue"
import Payment from "@/views/page/Tablayout/Payment/payment_layout.vue"
import Notification from "@/views/page/Tablayout/Notification/notification_layout.vue"
import MessageContent from "@/views/page/PageDesign/Notification/news.vue"

// import inbox from "@/views/page/PageDesign/Notification/inbox_message.vue"
// import notification from "@/views/page/PageDesign/Notification/notification.vue"
// import news from "@/views/page/PageDesign/Notification/news.vue"

const routes = [
    { path: '/', component: Login, name: 'Login' },
    { path: '/home', component: Home, name: 'Home' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/menu', component: Menu, name: 'menu' },
    { path: '/topmenu', component: TopMenu, name: 'topmenu' },
    { path: '/product', component: Product, name: 'product' },
    { path: '/category', component: Category, name: 'category' },
    { path: '/setting', component: Setting, name: 'setting' },
    { path: '/user-role', component: UserRole, name: 'user-role' },
    { path: '/member', component: Member, name: 'memeber' },
    { path: '/notification', component: Notification, name: 'notification' },
        {
            path:'/notification/:id',component:MessageContent,name: 'message-content', props:true
        },
    // { path: '/news', component: news, name: 'news' },
    // { path: '/users', component: users, name: 'users' },
    { path: '/payment', component: Payment, name: 'payment' },
   
]

const router = createRouter({ history: createWebHistory(), routes })
export default router