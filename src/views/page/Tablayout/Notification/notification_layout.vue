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
                    <Notificaiton />
                </template>
                <template v-slot:2 >
                    <Message />
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
import Notificaiton from '@/views/page/PageDesign/Notification/notification.vue'
import Message from '@/views/page/PageDesign/Notification/inbox_message.vue'
import SideMenu from '@/views/header/sidemenu.vue'
</script>

<script>

export default {
    data(){
        return{
            title:"Notification",
            tabs:[
                {
                    title:'Notification', name:'1',
                },
                {
                    title:'Message Inbox', name:'2',
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