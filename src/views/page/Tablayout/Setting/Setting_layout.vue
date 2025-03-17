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
import Setting from '@/views/page/PageDesign/Setting/setting_format.vue'
import AdminPassword from '@/views/page/PageDesign/Setting/change_admin_password.vue';
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
            const tabName = 'Change Admin Password';

            if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({ title: 'Change Admin Password', name: tabName });
                this.updateTabContent(tabName, 'Change Admin Password');
            }

            console.log('Tabs:', this.tabs);
            console.log('TabContent:', JSON.stringify(this.tabContents, null, 2));
            console.log('TabContent Tabname:', JSON.stringify(this.tabContents[tabName], null, 2));

            this.addAdminTab = true;

        },
        updateTabContent(tabName, content) {
            //stuck
            if (this.addAdminTab) {
                this.tabContents[tabName] = AdminPassword;
                this.addAdminTab=false
            } else {
                this.tabContents[tabName]= content

            }
            console.log('Updated TabContents:', JSON.stringify(this.tabContents, null, 2));
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