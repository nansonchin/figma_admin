<template>
    <div class="section-flex">
        <div>
            <SideMenu/>
        </div>
        <div class="component-section">
            <TopMenu 
            ref="topMenu"
            :tabs="tabs" :title="title"
            @update-tab-content="updateTabContent"
            @remove-tab-content="removeTabContent"
            >
                <template v-slot:1 >
                    <Setting @open-admin-password="addAdminPasswordTab"/>
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
import AdminPassword from '@/views/page/PageDesign/change_admin_password.vue';
import SideMenu from '@/views/header/sidemenu.vue'
import { defineAsyncComponent } from 'vue';
</script>

<script>

export default {
    data(){
        return{
            title:"Setting",
            tabs:[
                {
                    title:'Tab 1', name:'1',
                },
                {
                    title:'Tab 2', name:'2',
                },
            ],
            tabContents: {},
            addAdminTab:false,
        }
    },
    methods:{
        addAdminPasswordTab() {
            const tabName = 'Admin Password'; // Unique tab name

                // Check if the tab already exists
                if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({
                    title: 'Admin Password',
                    name: tabName
                });

                    this.updateTabContent(tabName, 'Change Admin Password');
                }
                console.log('TabContent'+JSON.stringify(this.tabContents, null, 2))
                this.addAdminTab=true;
        },
        updateTabContent(tabName, content) {
            this.tabContents[tabName]= content
        },
        removeTabContent(tabName) {
            delete this.tabContents[tabName];
            this.tabContents[tabName]

        },
    },watch: {
        addAdminTab(newValue) {
            if (newValue) {
                this.$refs.topMenu.addTab(this.tabs.length > 0? this.tabs[0].name:'');
                this.addAdminTab = false; 
            }
        }
    },
}
</script>