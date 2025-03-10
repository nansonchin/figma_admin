<template>
    <div class="section-flex">
        <div>
            <SideMenu/>
        </div>
        <div class="component-section">
            <TopMenu 
            :tabs="tabs" :title="title"
            @update-tab-content="updateTabContent"
            @remove-tab-content="removeTabContent"
            
            >
                <template v-slot:1 >
                    <Setting />
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
import Setting from '@/views/page/PageDesign/setting_format.vue'
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
            ],
            tabContents: {},
        }
    },
    methods:{
        updateTabContent(tabName, content) {
            this.tabContents[tabName]= content
        },
        removeTabContent(tabName) {
            this.tabContents[tabName]

        }
    }
}
</script>