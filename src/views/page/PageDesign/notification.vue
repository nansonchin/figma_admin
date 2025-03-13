<template>
    <div class="inbox-section">
        <div class="inbox-white">
            
        </div>
        <el-row :gutter="20" v-loading="orderLoading">
            <el-col :sm="24" :md="24" :lg="24">
                <div class="container">
                    <div class="product-layout-section">
                        <div class="product-grid-list">
                            <img :src="list_icon_act" class="grid-list cursor-pointer"/>
                        </div>
                        <div class="create-delete-section">
                            <div class="icon-container-create cursor-pointer">
                                <i class="fa-solid fa-plus cd-icon"></i>
                            </div>
                            <div class="icon-container-delete cursor-pointer">
                                <i class="fa-solid fa-trash cd-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="advertisement-container">
                        <div class="advertisement">
                            <img :src="ads_image" class="ad-image"/>
                        </div>
                    </div>
                    <div class="filter-section">
                        <el-row :gutter="20">
                            <el-col :sm="24" :md="18" :lg="18">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-date-picker
                                        v-model="selectedDate"
                                        type="date"
                                        placeholder="Select Date"
                                        @change="filterNotifications"
                                        />
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="sortOrder" placeholder="Sort by" @change="sortNotifications">
                                            <template #suffix-icon>
                                                <i class="fa-solid fa-caret-down"></i>

                                            </template>
                                            <el-option label="Latest" value="latest" />
                                            <el-option label="Oldest" value="oldest" />
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="selectedCategory" placeholder="Select Category" @change="filterNotifications">
                                            <template #suffix-icon>
                                                <i class="fa-solid fa-caret-down"></i>
                                            </template>
                                        <el-option v-for="cat in categories" :key="cat" :label="cat" :value="cat" />
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-input v-model="searchQuery" placeholder="Search..." @input="filterNotifications" />
                                    </el-col>
                                </el-row>
                                
                            </el-col>
                           
                        </el-row>
                    </div>
                    <div class="list-table">
                            <el-table class="cursor-pointer" :data="tableData" style="width: 100%" max-height="250" :row-class-name="tableRowClass" >
                            <el-table-column fixed prop="date" label="" width="150" class="inbox-table"/>
                            <el-table-column fixed prop="project" label="" width="180" class="inbox-table"/>
                            <el-table-column fixed prop="desc" label="" width="450" class="inbox-table"/>
                            <el-table-column fixed prop="category" label="" width="150"class="inbox-table" />
                            <el-table-column fixed prop="name" label="" width="250" class="inbox-table"> 
                                <template #default="scope">
                                    <div class="name-container">
                                        <div class="message-image-container">
                                            <img :src="scope.row.image" alt="User Image" class="name-image" />
                                        </div>
                                        <span>{{ scope.row.name }}</span>
                                    </div>
                                </template>                
                            </el-table-column>
                            <el-table-column fixed="right" label="" min-width="100" class="inbox-table">
                            <template #default="scope">
                                <el-button
                                link
                                type="primary"
                                size="small"
                                @click.prevent=""
                                >
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                </el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                        <div class="pagination-container">
                            <div class="pagination-show-entities">
                                <div class="pagination-section">
                                    <div class="pagination-info">
                                        <span>Show</span>
                                        <el-select v-model="pageSize" @change="handleSizeChange" class="page-size-select">
                                            <el-option v-for="size in pageSizes" :key="size" :label="size" :value="size" />
                                        </el-select>
                                        <span>of {{ totalProducts }} product(s)</span>
                                    </div>

                                    <el-pagination
                                    v-model:current-page="currentPage"
                                    :page-size="pageSize"
                                    :total="totalProducts"
                                    layout="prev, pager, next"
                                    @current-change="handlePageChange"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>  
    
</template>

<script setup>

</script>

<script>
export default {
    data(){
        return{
            ads_image:'src/assets/img/image/004.jpg',
            totalProducts:1000,
            selectedDate:'',
            selectedCategory:'',
            selectedQuery:'',
            sortOrder:'',
            tableData:[
                {
                    date:'12/25',
                    project:'Project SRC/1234',
                    desc:'Regarding to the Last project that we have meeting ...',
                    category:'Nothing',
                    image:'src/assets/img/image/met.jpg',
                    name:'Met1234',
                    unread:true,
                },
                {
                    date:'12/25',
                    project:'Project SRC/1234',
                    desc:'Regarding to the Last project that we have meeting ...',
                    category:'Nothing',
                    image:'src/assets/img/image/met.jpg',
                    name:'Met1234',
                    unread:true,
                },
                {
                    date:'12/25',
                    project:'Project SRC/1234',
                    desc:'Regarding to the Last project that we have meeting ...',
                    category:'Nothing',
                    image:'src/assets/img/image/met.jpg',
                    name:'Met1234',
                    unread:false,
                },
            ],
            list_icon_act:'src/assets/img/icon/list_active.png',
            postForm:{  
             
            },
        }
    },methods:{
        filterNotificaitons(){
            
        },
        tableRowClass({row}) {
            return row.unread ? 'unread' : 'read';
        }
    },
    computed: {
       categories(){
        return [...new Set(this.tableData.map((n)=> n.category))]
       }
    },created() {
        
    },
}
</script>
