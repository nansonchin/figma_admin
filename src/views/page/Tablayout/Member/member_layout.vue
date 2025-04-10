<template>
    <div class="section-flex">
        <div>
            <SideMenu
               :activeIndex="activeIndex" @change="onMenuChange"
            />
        </div>
        <div class="component-section">
            <TopMenu 
            :tabs="tabs" :title="title"
            @update-tab-content="updateTabContent"
            @remove-tab-content="removeTabContent"
            >
                <template v-slot:1 >
                    <Member/>
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
import Member from '@/views/page/PageDesign/Member/member.vue'
import SideMenu from '@/views/header/sidemenu.vue'
</script>

<script>

export default {
    data(){
        return{
            title:"Payment",
            tabs:[
                {
                    title:'Tab 1', name:'1',
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
            activeIndex: '5',
        }
    },
    methods:{
        updateTabContent(tabName, content) {
            this.tabContents[tabName]= content
        },
        removeTabContent(tabName) {
            this.tabContents[tabName]

        },
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
    },watch:{
        '$route.path'(newPath) {
            this.activeIndex = this.routeToIndex(newPath);
        }
    },created(){
        this.activeIndex = this.routeToIndex(this.$route.path)
    }
}
</script>