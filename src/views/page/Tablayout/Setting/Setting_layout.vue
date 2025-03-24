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
                    <Setting 
                    @open-admin-password="addAdminPasswordTab"
                    @open-2fa="add2FaTab"
                    @open-session="addSessionTime"
                    @open-import="addImportTab"
                    @open-backup="addBackTab"
                    />
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
import Admin2FA from '@/views/page/PageDesign/Setting/enable_2fa.vue';
import SessionTime from '@/views/page/PageDesign/Setting/session_time.vue';
import ImportFile from '@/views/page/PageDesign/Setting/import.vue';
import BackUp from '@/views/page/PageDesign/Setting/back_up.vue';
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
            ],
            tabContents: {},
            addAdminTab:false,
            add2Fa:false,
            addTime:false,
            addImport:false,
            addBackup:false,
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
        add2FaTab(){
            const tabName = 'Enable 2FA';

            if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({ title: 'Enable 2FA', name: tabName });
                this.updateTabContent(tabName, 'Enable 2FA');
            }

            console.log('Tabs:', this.tabs);
            console.log('TabContent:', JSON.stringify(this.tabContents, null, 2));
            console.log('TabContent Tabname:', JSON.stringify(this.tabContents[tabName], null, 2));

            this.add2Fa = true;
        },
        addSessionTime(){
            const tabName = 'Session Time';

            if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({ title: 'Session Time', name: tabName });
                this.updateTabContent(tabName, 'Session Time');
            }

            console.log('Tabs:', this.tabs);
            console.log('TabContent:', JSON.stringify(this.tabContents, null, 2));
            console.log('TabContent Tabname:', JSON.stringify(this.tabContents[tabName], null, 2));

            this.addTime = true;
        },
        addImportTab(){
            const tabName = 'Import Data';

            if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({ title: 'Import Data', name: tabName });
                this.updateTabContent(tabName, 'Import Data');
            }

            console.log('Tabs:', this.tabs);
            console.log('TabContent:', JSON.stringify(this.tabContents, null, 2));
            console.log('TabContent Tabname:', JSON.stringify(this.tabContents[tabName], null, 2));

            this.addImport = true;
        },
        addBackTab(){
            const tabName = 'Backup Data';

            if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({ title: 'Backup Data', name: tabName });
                this.updateTabContent(tabName, 'Backup Data');
            }

            console.log('Tabs:', this.tabs);
            console.log('TabContent:', JSON.stringify(this.tabContents, null, 2));
            console.log('TabContent Tabname:', JSON.stringify(this.tabContents[tabName], null, 2));

            this.addBackup = true;
        },
        updateTabContent(tabName, content) {
            //stuck
            if (this.addAdminTab) {
                this.tabContents[tabName] = AdminPassword
                this.addAdminTab=false
            } else if (this.add2Fa) {
                this.tabContents[tabName] = Admin2FA
                this.addAdminTab=false
            } else if (this.addTime) {
                this.tabContents[tabName] = SessionTime
                this.addTime=false
            } else if (this.addImport) {
                this.tabContents[tabName] = ImportFile
                this.addImport=false
            } else if (this.addBackup) {
                this.tabContents[tabName] = BackUp
                this.addBackup=false
            } 
            else {
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
        },
        add2Fa(newValue) {
            if (newValue) {
                this.$refs.topMenu.addTab(this.tabs.length > 0? this.tabs[0].name:'');
                this.add2Fa = false; 
            }
        },
        addTime(newValue) {
            if (newValue) {
                this.$refs.topMenu.addTab(this.tabs.length > 0? this.tabs[0].name:'');
                this.addTime = false; 
            }
        },
        addImport(newValue) {
            if (newValue) {
                this.$refs.topMenu.addTab(this.tabs.length > 0? this.tabs[0].name:'');
                this.addImport = false; 
            }
        },
        addBackup(newValue) {
            if (newValue) {
                this.$refs.topMenu.addTab(this.tabs.length > 0? this.tabs[0].name:'');
                this.addBackup = false; 
            }
        }
    },
}
</script>