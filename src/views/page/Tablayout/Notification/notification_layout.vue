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
            @update-tab-content="updateTabContent"
            @remove-tab-content="removeTabContent"
            >
                <template v-slot:1 >
                    <Notificaiton 
                    @open-message="addMessageInbox"
                    />
                </template>
                <template v-slot:2 >
                    <Message 
                    @open-message="addMessageInbox"
                    />
                </template>
     
                <template v-for="(content, tabName) in tabContents" v-slot:[tabName]>
                    <component :is="content.component" v-bind="content.props" />
                </template>
            </TopMenu>
        </div>
    </div>
    
</template>
<script setup>
import TopMenu from '@/views/header/topmenu.vue'
import Notificaiton from '@/views/page/PageDesign/Notification/notification.vue'
import Message from '@/views/page/PageDesign/Notification/inbox_message.vue'
import Inbox from '@/views/page/PageDesign/Notification/news.vue'
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
            activeIndex: '6',
            addMessage:false,
        }
    },
    methods:{
        addMessageInbox(message){
            // message is an object with { id, title }
            const tabName = `Message-${message.id}`;
            // Optionally add to static tabs if you want them listed (or let TopMenu handle dynamic tabs solely via slot)
            if (!this.tabs.some(tab => tab.name === tabName)) {
                this.tabs.push({ title: message.title, name: tabName });
            }
            // Update the tab content for this unique message tab
            this.updateTabContent(tabName, message.id);
            // Call TopMenu's addTab with the unique tabName and custom title (with ellipsis styling)
            if (this.$refs.topMenu && this.$refs.topMenu.addTab) {
                this.$refs.topMenu.addTab(tabName, message.title);
            }
            // Optionally set active tab if TopMenu supports it
            if (this.$refs.topMenu && this.$refs.topMenu.setActiveTab) {
                this.$refs.topMenu.setActiveTab(tabName);
            }
            // this.addMessage = true;
        },
        updateTabContent(tabName, messageIdOrContent) {
           if(typeof messageIdOrContent === 'string' || typeof messageIdOrContent === 'number'){
            this.tabContents[tabName]={
                component:Inbox,
                props:{
                    selectedMessageId:messageIdOrContent
                }
            }
           }else{
             this.tabContents[tabName]=messageIdOrContent
           }
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
        
    },
    watch:{
        addMessage(newValue) {
            if (newValue) {
                // this.$refs.topMenu.addTab(this.tabs.length > 0? this.tabs[0].name:'');
                this.$refs.topMenu.addTab("Message");
                this.addMessage = false; 
            }
        },
        '$route.path'(newPath) {
            this.activeIndex = this.routeToIndex(newPath);
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