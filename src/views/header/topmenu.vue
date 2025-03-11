<template>
    <div class="top-menu-container">
        <div class="top-menu-title-container">
            <div class="top-menu-title-text bold text-24">
                {{title}}
            </div>
            <div class="top-menu-date">
                <div class="menu-date">
                    {{timestamp}}
                </div>
            </div>
        </div>
        <div class="top-menu-tab-container">
            <div class ="top-tab-container" style="margin-bottom: 20px">
                <el-button size="small" @click="addTab(editableTabsValue)" class="add-tab-icon"> + </el-button>
                <div class="w-100percent">
                    <el-tabs
                        v-model="editableTabsValue"
                        type="card"
                        class="demo-tabs"
                        closable
                        @tab-remove="removeTab"
                    >
                        <el-tab-pane
                        v-for="item in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                        >
                        <!-- <slot :name="item.name"></slot> -->
                        <slot :name="item.name" :content="item.content"></slot>

                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script setup>

</script>

<script>
export default {
    props: {
      tabs: Array,
      title: String,
      addAdminPasswordTab: Function,
      addAdminTab: Boolean,
    },
    data(){
        return{
            tabIndex:2,
            editableTabsValue : this.tabs.length > 0? this.tabs[0].name:'',
            editableTabs:[...this.tabs],
            timestamp:'',
        }
    },methods:{
        getDateNow() {
            const today = new Date();
            this.timestamp = today.toLocaleString('en-US', 
            { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        },
        addTab(targetName){
            this.tabIndex++;
            const newTabName = this.tabIndex.toString();
            this.editableTabs.push({
                title: 'New Tab ' + this.tabIndex,
                name: newTabName,
                content: 'New Tab content ' + this.tabIndex,
            });
            this.$emit("update-tab-content", newTabName, `New Tab ${this.tabIndex} content`);
            this.editableTabsValue = newTabName;
            console.log('Updated EditableTabsValue:', this.editableTabsValue);
            console.log('Tab Content:', this.editableTabs);
        },
        removeTab(targetName) {
            const index = this.editableTabs.findIndex(tab => tab.name === targetName);
            let activeName = this.editableTabsValue;

            if (index !== -1) {
                if (activeName === targetName) {
                    const nextTab = this.editableTabs[index + 1] || this.editableTabs[index - 1];
                    activeName = nextTab ? nextTab.name : "";
                }
                this.editableTabs.splice(index, 1);
            }

            this.editableTabsValue = activeName;
            this.$emit("remove-tab-content", targetName);
        }
    },
    computed: {
       
    },created() {
        console.log("editableTabsValue "+this.editableTabsValue)
        this.getDateNow()
    },
}
</script>