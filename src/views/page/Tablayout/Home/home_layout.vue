<template>
    <div class="section-flex">
        <div>
            <SideMenu
               :activeIndex="activeIndex" @change="onMenuChange"
            />
        </div>
        <div class="component-section">
            <TopMenu :tabs="tabs" :title="title">
                <template v-slot:1 >
                    <Home/>
                </template>
     
                <template v-for="(content, tabName) in tabContents" v-slot:[tabName]>
                    {{ content }}
                </template>
            </TopMenu>
        </div>
    </div>
    
</template>

<script setup>
import TopMenu from '@/views/header/topmenu.vue'
import Home from "@/views/page/PageDesign/Home/home.vue"
import SideMenu from '@/views/header/sidemenu.vue'
</script>
<script>

export default {
    data(){
        return{
            title:"Home Page",
            tabs:[
                {
                    title:'Home', name:'1',
                },
              
            ],   
            tabContents: {},
            routes: {
                '0': '/home',
                '1': '/product',
                '2': '/payment',
                '3': '/category',
                '4': '/analysis',
                '5': '/member',
                '6': '/notification',
                '7': '/user-role',
                '8': '/setting'
            },
            activeIndex: '0',
        } 
    },methods:{
        onMenuChange(newIndex) {
            // Called when SideMenu emits a change.
            this.activeIndex = newIndex;
            const route = this.routes[newIndex];
            if (route) {
                this.$router.push(route);
            }
            console.log('active Index'+this.activeIndex)
        },
        routeToIndex(path) {
            // Safely check the routes mapping.
            if (!this.routes) return '0';
            const found = Object.entries(this.routes).find(([id, p]) => p === path);
            return found ? found[0] : '0';
        },
    },watch:{
        '$route.path'(newPath) {
            this.activeIndex = this.routeToIndex(newPath);
        }
    },created(){
        this.activeIndex = this.routeToIndex(this.$route.path)
    }
}
</script>