<template>
    <div class="section-flex">
        <div>
            <SideMenu/>
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
            tabContents: {},

        }
    },
    methods:{
        
    },watch: {
        
    },
}
</script>