<template>
    <div class="top-menu-container">
        <div class="top-menu-title-container">
            <div class="top-menu-title-text bold text-24">
                Title name
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
                <div>
                    <el-tabs
                        v-model="editableTabsValue"
                        type="card"
                        class="demo-tabs"
                        closable
                        @tab-remove="removeTab(editableTabsValue)"
                    >
                        <el-tab-pane
                        v-for="item in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                        >
                        {{ item.content }}
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
    data(){
        return{
            tabIndex:2,
            editableTabsValue : '2',
            editableTabs:[
              {
                title:'Tab 1',
                name: '1',
                content:'Tab 1 content',
              },
              {
                title:'Tab 2',
                name: '2',
                content:'Tab 2 content',
              }
            ],
            postForm:{
                input_username:'',
                input_password:'',
                stay_login:false,
                email:'',
                phone_number:'',
                message:'',
            },
            timestamp:'',
        }
    },methods:{
        getDateNow() {
            const today = new Date();
            this.timestamp = today.toLocaleString('en-US', 
            { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        },
        addTab(targetName){
          const newTabName = this.tabIndex ++
          this.editableTabs.push({
            title: 'New Tab ' + this.tabIndex,
            name: newTabName,
            content: 'New Tab content ' + this.tabIndex,
          })
          console.log(this.tabIndex)
          this.editableTabsValue = newTabName
        },
        removeTab(targetName){
          const tabs = this.editableTabs
          let activeName = this.editableTabsValue

          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }

          this.editableTabsValue = activeName
          this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
        }
    },
    computed: {
       
    },created() {
        this.getDateNow()
        console.log(this.editableTabs)
    },
}
</script>
