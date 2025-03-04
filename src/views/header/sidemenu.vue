<template>
    <div class="side-menu-container">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
            <div class="sidemenu-text-collapse-container">
                <div class="sidemenu-logo-container" v-if="!isCollapse">
                    <img :src="icon_logo" class="sidemenu-logo"/>
                </div>
                <div class="sidemenu-collapse-container">
                    <img :src="icon_collapse" 
                        @click="isCollapse=!isCollapse" 
                        class="collapse-menu-icon cursor-pointer"
                        :class="{'rotate-180': isCollapse}"/>
                </div>
            </div>

            <!-- Render Menu with Functional Section -->
            <template v-for="(item, index) in modifiedMenu" :key="index">
                <!-- Functional Heading before Notification -->
                <div v-if="item.isHeader && !isCollapse" class="function-name">
                    {{ item.name }}
                </div>
                <div v-else="item.isHeader && isCollapse" class="name-collapse">
                    
                </div>

                <!-- Menu Items -->
                <el-menu-item v-else :index="item.index"
                    @click="handleChangedIndex(item.index)">
                    <el-icon>
                        <img :src="activeIndex == item.index ? icon_white[item.originalIndex].icon : item.icon"
                            class="sidemenu-icon"/>
                    </el-icon>
                    <template #title>
                        <span>{{ item.name }}</span>
                        <!-- <div v-if="item.name === 'Notification' && icon_red_notification" class="notification-badge">
                            <div class="notification-value">3</div>
                        </div> -->
                        
                    </template>
                    
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script setup>
// import { ref } from 'vue'
import { Navigation, Pagination, A11y, Autoplay, EffectFade, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
let modules = [Navigation, Pagination, A11y, Autoplay, EffectFade, EffectCoverflow]
let swiper_options = {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
    spaceBetween:30,
	loop: true,
	speed: 1000,
}
let slides = 3

// const isCollapse = ref(true)
// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
// }
</script>

<script>
export default {
    data(){
        return{
            activeIndex:"1",
            isCollapse:true,
            postForm:{
                input_username:'',
                input_password:'',
                stay_login:false,
                email:'',
                phone_number:'',
                message:'',
            },
            isRedMessage:true,
            icon_red_notification:'src/assets/img/menu_icon/b_notification_message.png',
            icon_black: [
                {   icon: 'src/assets/img/menu_icon/b_home.png',
                    name:'Home',
                },
                {   icon: 'src/assets/img/menu_icon/b_product.png',
                    name:'Product',
                },
                {   icon: 'src/assets/img/menu_icon/b_pay.png',
                    name:'Payment',
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_category.png',
                    name:'Category', 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_analysis.png',
                    name:'Analysis', 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_member.png',
                    name:'Member' 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_notification.png',
                    name:'Notification', 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_user_role.png',
                    name:'User Role', 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_setting.png',
                    name:'Setting',
                },
                
            ],
            icon_white:[
                { icon: 'src/assets/img/menu_icon/w_home.png' },
                { icon: 'src/assets/img/menu_icon/w_product.png' },
                { icon: 'src/assets/img/menu_icon/w_pay.png' },
                { icon: 'src/assets/img/menu_icon/w_category.png' },
                { icon: 'src/assets/img/menu_icon/w_analysis.png' },
                { icon: 'src/assets/img/menu_icon/w_user.png' },
                { icon: 'src/assets/img/menu_icon/w_notification.png' },
                { icon: 'src/assets/img/menu_icon/w_user_role.png' },
                { icon: 'src/assets/img/menu_icon/w_setting.png' },
            ],
            icon_black_2:[
                { 
                    icon: 'src/assets/img/menu_icon/b_notification.png',
                    name:'Notification', 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_user_role.png',
                    name:'User Role', 
                },
                { 
                    icon: 'src/assets/img/menu_icon/b_setting.png',
                    name:'Setting',
                },
            ],
            icon_white_2:[
                { icon: 'src/assets/img/menu_icon/w_notification.png' },
                { icon: 'src/assets/img/menu_icon/w_user_role.png' },
                { icon: 'src/assets/img/menu_icon/w_setting.png' },
            ],
            icon_collapse:'src/assets/img/menu_icon/collapse.png',
            icon_logo:'src/assets/img/menu_icon/small_title.png'
        }
    },methods:{
        handleChangedIndex(index){
            this.activeIndex=index
        },
    },
    computed: {
        modifiedMenu() {
            let newMenu = [];
            let inserted = false;
            let indexOffset = 0;

            newMenu.push({name:"Functional",isHeader:true});
            
            this.icon_black.forEach((item, originalIndex) => {
                if (item.name === "Notification" && this.isRedMessage) {
                    item = { ...item, icon: this.icon_red_notification };
                }
                
                if (!inserted && item.name === "Notification") {
                    newMenu.push({ name: "Setting", isHeader: true });
                    inserted = true;
                    indexOffset++; // Increase offset for indexes after the header
                }
                newMenu.push({ ...item, index: (originalIndex + 1 + indexOffset).toString(), originalIndex });
            });
            console.log(newMenu);
            console.log(this.isCollapse);
            return newMenu;
        }
    },
}
</script>