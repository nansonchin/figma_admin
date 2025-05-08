import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from '@/system/engine/router.js'
import element from 'element-plus'
import i18n from './system/language/index.js'
// import Chart from 'chart.js/auto';
import 'swiper/css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'element-plus/dist/index.css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// css
import '@/assets/fonts/font-awesome/style.css'
import '@/assets/fonts/google-font/RubikGlitch-Regular.ttf'
import '@/assets/css/main.css'
import '@/assets/css/color.css'
import '@/assets/css/login.css'
import '@/assets/css/responsive.css'
import '@/assets/css/sidemenu.css'
import '@/assets/css/topmenu.css'
import '@/assets/css/product.css'
import '@/assets/css/setting.css'
import '@/assets/css/admin_password.css'
import '@/assets/css/back_up.css'
import '@/assets/css/import.css'
import '@/assets/css/session_time.css'
import '@/assets/css/enable2fa.css'
import '@/assets/css/inbox.css'
import '@/assets/css/news.css'
import '@/assets/css/user.css'
import '@/assets/css/category.css'
import '@/assets/css/payment.css'
import '@/assets/css/home.css'


const app = createApp(App)
app.use(i18n)
app.use(BootstrapVue3)
app.use(router)
app.use(element)
// app.use(Chart)
app.mount('#app')