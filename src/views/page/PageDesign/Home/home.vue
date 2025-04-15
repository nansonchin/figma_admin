<template>
    <div class="product-section">
        <div class="inbox-white">
            
        </div>
        <el-row :gutter="20" v-loading="orderLoading">
            <el-col :sm="24" :md="18" :lg="18">
                <div class="home-border h-100-percentage">
                    <div class="top-porpular-section">
                        <div class="setting-title d-flex justify-spacebetween align-items-center">
                            <div class="user-setting text-24 bold">
                                Chart
                            </div>
                        </div>
                        <div class="chart-selection d-flex gap-20">
                            <div class="name-label cursor-pointer" 
                            v-for="(tab,index) in labels" :key="tab.value" :class="{'name-label-active':tab.isActive}"
                            @click="activeLabel(index)"
                            >
                            {{tab.name}}
                            </div>
                        </div>
                        <div class="chart-data-container d-flex justify-spacebetween align-items-center gap-20 ">
                            <div class="chart-data flex-1">
                                <div class="chart-detail d-flex align-items-center" v-for="(data,index) in circle_chart_data">
                                    <div class="chart-color" :style="{'background-color':data.color}">

                                    </div>
                                    <div class="chart-name text-18 flex-2">
                                        {{data.name}}
                                    </div>
                                    <div class="chart-percentage text-18 flex-1">
                                        {{data.percentage}}
                                    </div>
                                </div>
                            </div>
                            <div class="chart-circle flex-2">

                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :sm="24" :md="6" :lg="6">
                <div class="home-border h-100-percentage">
                    <div class="top-porpular-section">
                        <div class="setting-title d-flex justify-spacebetween align-items-center">
                            <div class="user-setting text-24 bold">
                               Top Porpular
                            </div>
                            <div class="user-setting text-14" style="color:#5F5F5F">
                                Last month
                            </div>
                        </div>
                        <div class="top-product-section">
                            <div class="top-product-each-container d-flex justify-spacebetween align-items-center" v-for="(item,index) in tableData">
                                <div class="index flex-1">
                                    {{index+1}}
                                </div>
                                <div class="itemName flex-3 d-flex align-items-center" style="gap: 1.25rem;">
                                    <div class="itemImg">
                                        <img :src="item.image" class="top-product-image"/>
                                    </div>
                                    <div class="itemName-text text-20">
                                        {{item.name}}
                                    </div>
                                </div>
                                <div class="item-percentage flex-1" >
                                    <div class="item-big text-20 bold" :style="{color:item.is_red? '#F20000':'#0D9C00'}">
                                        {{ item.percentage }}
                                    </div>
                                    <div class="item-small text-14" :style="{color:item.is_red? '#FA0000':'#1A9900'}">
                                        {{ item.price }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="home-banner-bottom">

                        </div>
                    </div>
                   
                </div>
            </el-col>
        </el-row>
    </div>  


</template>

<script setup>
import { data } from 'jquery';


</script>

<script>
export default {
    data(){
        return{
            circle_chart_data:[
                {
                    name:'Chart Name',
                    percentage:'25%',
                    percentage_value:25,
                    value:'chart1',
                    color:'#C8E8FF',
                },
                {
                    name:'Chart Name',
                    percentage:'25%',
                    percentage_value:25,
                    value:'chart2',
                    color:'#1F94FF',
                },
                {
                    name:'Chart Name',
                    percentage:'25%',
                    percentage_value:25,
                    value:'chart3',
                    color:'#FF928A',
                },
                {
                    name:'Chart Name',
                    percentage:'25%',
                    percentage_value:25,
                    value:'chart4',
                    color:'#7086FD',
                },
                {
                    name:'Chart Name',
                    percentage:'25%',
                    percentage_value:25,
                    value:'chart5',
                    color:'#F5B763',
                },
            ],
            labels:[
                {
                    name:'All',
                    value:'all',
                    isActive:true,
                },
                {
                    name:'Last Month',
                    value:'month',
                    isActive:false,
                },
                {
                    name:'Last Week',
                    value:'week',
                    isActive:false,
                },
            ],
            tableData:[
                {
                    id:"12345",
                    image:'src/assets/img/image/ichka.jpg',
                    name:'Item Name',
                    is_red:false,
                    percentage:'+ 35%',
                    price:'+ 12600.00'
                },
                {
                    id:"12346",
                    image:'src/assets/img/image/ichka.jpg',
                    name:'Item Name',
                    is_red:true,
                    percentage:'- 35%',
                    price:'- 12600.00'
                },
                {
                    id:"12347",
                    image:'src/assets/img/image/ichka.jpg',
                    name:'Item Name',
                    is_red:true,
                    percentage:'- 135%',
                    price:'- 132600.00'
                },
                {
                    id:"1238",
                    image:'src/assets/img/image/ichka.jpg',
                    name:'Item Name',
                    is_red:true,
                    percentage:'- 15%',
                    price:'- 1300.00'
                    
                },
                {
                    id:"1239",
                    image:'src/assets/img/image/ichka.jpg',
                    name:'Item Name',
                    is_red:true,
                    percentage:'- 15%',
                    price:'- 13200.00'
                    
                },
                {
                    id:"1240",
                    image:'src/assets/img/image/ichka.jpg',
                    name:'Item Name',
                    is_red:false,
                    percentage:' 15%',
                    price:' 21300.00'
                    
                },
            ],
            list_icon_act:'src/assets/img/icon/list_active.png',
            postForm:{  
                member_name:'',
                password:'',
                email:'',
                data_joined:'',
            },
            right_dialog:false,
            center_dialog:false,
            showPassword :false,
        }
    },methods:{
       activeLabel(index){
            this.labels.forEach(tab=>tab.isActive=false)
            this.labels[index].isActive=true;
       }
    },
    computed: {
     
    },created() {

    },
}
</script>
