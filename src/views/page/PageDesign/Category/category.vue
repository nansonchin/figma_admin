<template>
    <div class="product-section">
        <div class="product-layout-section">
            <div class="product-grid-list">
                <img :src="grid_selected? grid_icon_act:grid_icon_unact" class="grid-list cursor-pointer" @click="grid_selected=true"/>
                <img :src="grid_selected? list_icon_unact:list_icon_act" class="grid-list cursor-pointer" @click="grid_selected=false"/>
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
        <div class="grid-view-product-container" v-if="grid_selected">
            <div class="grid-view-product-section">
                <div class="product-item-section cursor-pointer" v-for="item in 5" @click="toogleRightDialog">
                    <div class="grid-product-img-container">
                        <img :src="product_img" class="product-img"/>
                    </div>
                    <div class="product-desc-container">
                        <div class="category-product-tag">
                            <div class=" flex wrap gap-20">
                                <div class="category-container" v-for="item in category">
                                    {{item}}
                                </div>
                            </div>
                        </div>
                        <div class="product-name">
                            Category Name
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="list-view-product-section" v-if="!grid_selected">
            <div class="list-table">
                <el-table class="cursor-pointer" :data="list_data" style="width: 100%" min-height="100%" height="100%" :row-class-name="tableRowClass"  @click="toogleRightDialog">
                        <el-table-column fixed prop="index" label="No" width="80" class="inbox-table">
                            <template #default="scope">
                                {{ scope.$index+1 }}
                            </template>
                        </el-table-column>
                        <el-table-column fixed prop="image" label="Category Image" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="name-container">
                                    <div class="message-image-container">
                                        <img :src="scope.row.image" alt="Category Image" class="list-product-image" />
                                    </div>
                                </div>
                            </template>    
                        </el-table-column>
                        <el-table-column fixed prop="category_name" label="Categroy Name" width="180" class="inbox-table"/>
                        <el-table-column fixed prop="seo_meta" label="Seo Meta" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="switch-icon">
                                    <el-switch />
                                </div>
                            </template>    
                        </el-table-column>
                        <el-table-column fixed prop="seo_meta" label="Meta Title" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="switch-icon">
                                    <el-switch />
                                </div>
                            </template>    
                        </el-table-column>
                        <el-table-column fixed prop="seo_meta" label="Meta Search" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="switch-icon">
                                    <el-switch />
                                </div>
                            </template>    
                        </el-table-column>
                        <el-table-column fixed prop="seo_meta" label="Product On" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="switch-icon">
                                    <el-switch />
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
    </div>
    <el-dialog v-model="right_dialog" title="Category Details" width="50%" class="right-dialog">
        <div class="dialog-content">
            <div class="right-dialog-product-image">
                <img :src="product_img" class="right-dialog-product-image"/>
            </div>
        <el-divider />

        <div class="right-dialog-text-container">
            <div class="right-dialog-product-name text-18">
                Category Name
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field flex justify-spacebetween">
                    <div class="login-field-text text-18 ">
                        Seo Meta
                    </div>
                    <div class="total-price-amount-container">
                        <div class="switch-icon">
                            <el-switch v-model="postForm.enable_fa" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field flex justify-spacebetween">
                    <div class="login-field-text text-18 ">
                        Meta Title
                    </div>
                    <div class="total-price-amount-container">
                        <div class="switch-icon">
                            <el-switch v-model="postForm.enable_fa" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field flex justify-spacebetween">
                    <div class="login-field-text text-18 ">
                        Meta Search
                    </div>
                    <div class="total-price-amount-container">
                        <div class="switch-icon">
                            <el-switch v-model="postForm.enable_fa" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field flex justify-spacebetween">
                    <div class="login-field-text text-18 ">
                        Product On
                    </div>
                    <div class="total-price-amount-container">
                        <div class="switch-icon">
                            <el-switch v-model="postForm.enable_fa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div class="center-dialog-button">
            <div class="login-button-container">
                <el-button type="primary" class="cancel-button text-18">Cancel</el-button>
            </div>
            <div class="login-button-container">
                <el-button type="primary" class="login-button text-18" @click="">Save</el-button>
            </div>
        </div>
        </div>
    </el-dialog>
   
</template>

<script setup>

</script>

<script>
export default {
    data(){
        return{
            right_dialog:false,
            center_dialog:false,
            totalProducts:1000,
            product_img:'src/assets/img/image/product.png',
            grid_selected:true,
            list_icon_act:'src/assets/img/icon/list_active.png',
            list_icon_unact:'src/assets/img/icon/list_unactive.png',
            grid_icon_act:'src/assets/img/icon/grid_active.png',
            grid_icon_unact:'src/assets/img/icon/grid_unactive.png',
            postForm:{
                category_name:'',
                seo_meta:false,
                meta_title:false,
                email:'',
                phone_number:'',
                message:'',
            },
            category:[
                'Category12345',
                'Category',
                'Category None',
                'Category Fashion',
                'Category Gaming Section',
            ],
            list_data:[
                {
                    image:'src/assets/img/image/product.png',
                    category_name:'Category Name',
                    seo_meta:false,
                    meta_title:false,
                    meta_search:false,
                    product_on:false,
                }
            ]
        }
    },methods:{
        toogleCenterDialog(){
            this.center_dialog=true;
        },
        toogleRightDialog(){
            this.right_dialog=true
        },
    },
    computed: {
       
    },created() {

    },
}
</script>
