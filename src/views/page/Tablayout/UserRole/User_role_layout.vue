<template>
    <div class="section-flex">
        <div>
            <SideMenu
               :activeIndex="activeIndex" @change="onMenuChange"
            />
        </div>
        <div class="component-section">
            <TopMenu 
            ref="topMenu"
            :tabs="tabs" :title="title"
            >
                <template v-slot:1 >
                    <UserRole />
                </template>
                <template v-for="(content, tabName) in tabContents" v-slot:[tabName]>
                    <component v-if="typeof content === 'object' && content !== null && content !== undefined && content !== ''"
                        :is="content" />
                    <div v-else>{{content}}</div>
                </template>
            </TopMenu>
        </div>
    </div>
    
</template>

<script setup>
import TopMenu from '@/views/header/topmenu.vue'
import UserRole from '@/views/page/PageDesign/UserRole/user.vue'
import SideMenu from '@/views/header/sidemenu.vue'
import { defineAsyncComponent } from 'vue';
</script>
<script>

export default {
    data(){
        return{
            title:"User Role",
            tabs:[
                {
                    title:'Tab 1', name:'1',
                },
            ],
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
            tabContents: {},
            activeIndex: '7',

        }
    },
    methods:{
        onMenuChange(newIndex) {
            // Called when SideMenu emits a change.
            this.activeIndex = newIndex;
            const route = this.routes[newIndex];
            if (route) {
                this.$router.push(route);
            }
            console.log(this.activeIndex)
        },
        routeToIndex(path) {
            // Safely check the routes mapping.
            if (!this.routes) return '0';
            const found = Object.entries(this.routes).find(([id, p]) => p === path);
            return found ? found[0] : '0';
        },
    },watch: {
        
    },
}
</script>