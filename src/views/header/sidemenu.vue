<template>
    <div class="side-menu-container">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @select="$emit('change',$event)"
        >
            <div class="menu-content">
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
                <div v-if="!isCollapse" class="function-name">
                    Functional {{ param_Index }}
                </div>
                <div v-else="item.isHeader && isCollapse" class="name-collapse">
                    
                </div>
                <el-menu-item :index="'0'">
                    <img :src="activeIndex === '0' ? icon_white[0].icon : icon_black[0].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[0].name}}</template>
                </el-menu-item>
                <el-menu-item :index="'1'">
                    <img :src="activeIndex === '1' ? icon_white[1].icon : icon_black[1].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[1].name}}</template>
                </el-menu-item>
                <el-menu-item :index="'2'">
                    <img :src="activeIndex === '2' ? icon_white[2].icon : icon_black[2].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[2].name}}</template>
                </el-menu-item>
                <el-menu-item :index="'3'">
                    <img :src="activeIndex === '3' ? icon_white[3].icon : icon_black[3].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[3].name}}</template>
                </el-menu-item>
                <el-menu-item :index="'4'">
                    <img :src="activeIndex === '4' ? icon_white[4].icon : icon_black[4].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[4].name}}</template>
                </el-menu-item>
                <el-menu-item :index="'5'">
                    <img :src="activeIndex === '5' ? icon_white[5].icon : icon_black[5].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[5].name}}</template>
                </el-menu-item>
                            
                <div v-if="!isCollapse" class="function-name">
                    Setting
                </div>
                <div v-else="item.isHeader && isCollapse" class="name-collapse">
                    
                </div>

                <el-menu-item :index="'6'">
                    <img :src="activeIndex === '6' ? icon_white[6].icon :isRedMessage? icon_red_notification : icon_black[6].icon" class="sidemenu-icon"/>
                    <template #title>
                        {{icon_black[6].name}}
                        <!-- <div v-if="icon_red_notification" class="notification-badge">
                            <div class="notification-value">3</div>
                        </div> -->
                    </template>
                </el-menu-item>  
                <el-menu-item :index="'7'">
                    <img :src="activeIndex === '7' ? icon_white[7].icon : icon_black[7].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[7].name}}</template>
                </el-menu-item>
                <el-menu-item :index="'8'">
                    <img :src="activeIndex === '8' ? icon_white[8].icon : icon_black[8].icon" class="sidemenu-icon"/>
                    <template #title>{{icon_black[8].name}}</template>
                    <!-- <template #title>{{icon_black[8].name}}</template> -->
                </el-menu-item>
            </div>
            
            <div class="user-info-container" @click="logOut()">
                <div class="user-icon-container" v-if="!isCollapse">
                   <img :src="user_icon" class="user-icon"/>
                </div>
                <span v-if="!isCollapse" class="username">username</span>
                <img :src="logout_icon" class="logout-icon"/>
            </div>
        </el-menu>
   
    </div>
</template>

<script setup>

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

</script>

<script>
export default {
    name:'SideMenu',
    props:{
        activeIndex:{
            type:String,
            required:true,
        }
    },
    data(){
        return{
            isCollapse:true,
            postForm:{
                input_username:'',
                input_password:'',
                stay_login:false,
                email:'',
                phone_number:'',
                message:'',
            },
            param_Index:this.activeIndex,
            user_icon:'',
            logout_icon:'src/assets/img/menu_icon/logout.png',
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
            // this.activeIndex=index
            // // index is not string inside the array thats why
            // // console.log(activeIndex === '8')
            // const route=this.routes[parseInt(index)]
            // // console.log("Route " + route)
            // if(route){
            //     this.$router.push(route);
            // }
        },
        logOut(){
            this.$router.push("/")
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

 <!-- Render Menu with Functional Section
 <template v-for="(item, index) in modifiedMenu" :key="index">
    Functional Heading before Notification
    <div v-if="item.isHeader && !isCollapse" class="function-name">
        {{ item.name }}
    </div>
    <div v-else="item.isHeader && isCollapse" class="name-collapse">
        
    </div>

    Menu Items
    <el-menu-item v-else :index="item.index"
        @click="handleChangedIndex(item.index)">
        <el-icon>
            <img :src="activeIndex == item.index ? icon_white[item.originalIndex].icon : item.icon"
                class="sidemenu-icon"/>
        </el-icon>
        <template #title>
            <span>{{ item.name }}</span>
            <div v-if="item.name === 'Notification' && icon_red_notification" class="notification-badge">
                <div class="notification-value">3</div>
            </div>
            
        </template>
        
    </el-menu-item>
</template> -->