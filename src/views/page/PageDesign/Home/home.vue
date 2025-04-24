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
                                <div class="dougnut">
                                    <canvas ref="doughnutCanvas"></canvas>
                                </div>
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
        <el-row :gutter="20" v-loading="orderLoading">
            <el-col :sm="24" :md="24" :lg="24">
                <div class="graph-border-container">
                    <div class="setting-title d-flex justify-spacebetween align-items-center">
                        <div class="user-setting text-24 bold">
                            Graph
                        </div>
                        <div class="user-setting text-14" style="color:#5F5F5F">
                            Product Name
                        </div>
                    </div>
                    <div class="chart-selection d-flex gap-20">
                        <div class="name-label cursor-pointer" 
                        v-for="(tab,index) in graph_labels" :key="tab.value" :class="{'name-label-active':tab.isActive}"
                        @click="activeGraphLabel(index)"
                        >
                        {{tab.name}}
                        </div>
                    </div>
                    <div id="apex-chart-candle" class="apex-chart-candle"></div>
                </div>
            </el-col>
           
        </el-row>

    </div>  


</template>

<script setup>
import { data } from 'jquery';


</script>

<script>
import { Chart } from 'chart.js/auto'
import ApexCharts from 'apexcharts'
import dayjs from 'dayjs'
export default {
    components:{
        apexchart: ApexCharts
    },
    ref:['doughnutCanvas'],
    data(){
        return{
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
            graph_labels:[
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
                    percentage:'55%',
                    percentage_value:55,
                    value:'chart2',
                    color:'#1F94FF',
                },
                {
                    name:'Chart Name',
                    percentage:'35%',
                    percentage_value:35,
                    value:'chart3',
                    color:'#FF928A',
                },
                {
                    name:'Chart Name',
                    percentage:'5%',
                    percentage_value:5,
                    value:'chart4',
                    color:'#7086FD',
                },
                {
                    name:'Chart Name',
                    percentage:'15%',
                    percentage_value:15,
                    value:'chart5',
                    color:'#F5B763',
                },
            ],
            apexSeries: [{
                name: 'candle',
                data: [
                { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
                { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] }
                ]
            }],
            candleStick_options : {
                series: [{
                name: 'candle',
                data: [
                    {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33]
                    },
                    {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11]
                    },
                    {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65]
                    },
                    {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24]
                    },
                    {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47]
                    },
                    {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31]
                    },
                    {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02]
                    },
                    {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02]
                    },
                    {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01]
                    },
                    {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02]
                    },
                ]
                }],
                chart: {
                height: 350,
                type: 'candlestick',
                },
                title: {
                text: 'CandleStick Chart - Category X-axis',
                align: 'left'
                },
                annotations: {
                xaxis: [
                    {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                        fontSize: '12px',
                        color: '#fff',
                        background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                    }
                ]
                },
                tooltip: {
                enabled: true,
                },
                xaxis: {
                type: 'category',
                labels: {
                    formatter: function(val) {
                    return dayjs(val).format('MMM DD HH:mm')
                    }
                }
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            }

        }
    },methods:{
        activeLabel(index){
                this.labels.forEach(tab=>tab.isActive=false)
                this.labels[index].isActive=true;
        },
        activeGraphLabel(index){
                this.graph_labels.forEach(tab=>tab.isActive=false)
                this.graph_labels[index].isActive=true;
        },
        renderDoughnut(){
            const ctx = this.$refs.doughnutCanvas.getContext('2d')
            new Chart(ctx,{
                type:'doughnut',
                data:{
                    labels:this.circle_chart_data.map(item=>item.name),
                    datasets:[{
                        // label:'My First Dataset',
                        data:this.circle_chart_data.map(item=>item.percentage_value),
                        backgroundColor:this.circle_chart_data.map(item=>item.color),
                        hoverOffset:4
                    }]
                },
                options:{
                    responsive:true,
                    maintainAspectRatio:false,
                    cutout:'50%',
                }
            })
           
        },
        renderCandleChart(){
            const chart = new ApexCharts(
                document.querySelector("#apex-chart-candle"),
                this.candleStick_options
            );
            chart.render();
        }
    },
    computed: {
     
    },created() {

    },mounted(){
        this.renderDoughnut()
        this.renderCandleChart()
    }
}
</script>
