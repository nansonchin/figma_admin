<template>
    <div class="section-flex">
        <div>
            <SideMenu/>
        </div>
        <div class="component-section">
            <TopMenu :tabs="tabs" :title="title">
                <template v-slot:1 >
                    <Category/>
                </template>
            </TopMenu>
        </div>
    </div>
    
</template>

<script setup>
import TopMenu from '@/views/header/topmenu.vue'
import Category from "@/views/page/PageDesign/Category/category.vue"
import SideMenu from '@/views/header/sidemenu.vue'
</script>
<script>

export default {
    data(){
        return{
            title:"Category",
            tabs:[
                {
                    title:'Category 1', name:'1',
                },
                {
                    title:'Category 2', name:'2',
                },
            ]
        } 
    }
}
</script>