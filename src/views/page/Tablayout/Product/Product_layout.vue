<template>
    <div class="section-flex">
        <div>
            <SideMenu
               :active-index="activeIndex" @change="onMenuChange"
            />
        </div>
        <div class="component-section">
            <TopMenu 
            :tabs="tabs" :title="title"
            @update-tab-content="updateTabContent"
            @remove-tab-content="removeTabContent"
            >
                <template v-slot:1 >
                    <ProductLayout />
                </template>
                <template v-slot:2 >
                    Tab Product 2
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
import ProductLayout from '@/views/page/PageDesign/Product/product_format.vue'
import SideMenu from '@/views/header/sidemenu.vue'
</script>

<script>

export default {
    data(){
        return{
            title:"Product",
            tabs:[
                {
                    title:'Tab 1', name:'1',
                },
                {
                    title:'Tab 2', name:'2',
                },
                {
                    title:'Tab 3', name:'3',
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
            activeIndex: '1',
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