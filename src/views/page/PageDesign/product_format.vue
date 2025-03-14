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
                <div class="product-item-section" v-for="item in 5" @click="">
                    <div class="grid-product-img-container">
                        <img :src="product_img" class="product-img"/>
                    </div>
                    <div class="product-desc-container">
                        <div class="product-name">
                            Product Name
                        </div>
                        <div class="product-desc">
                            Description
                        </div>
                        <div class="product-flex">
                            <div class="product-price color-primary bold">
                                1,257.00
                            </div>
                            <div class="product-quantity">
                                1.5k Left
                            </div>
                        </div>
                        <div class="product-fav-container">
                            <div class="product-fav">
                                1.5k Fav
                            </div>
                            <div class="product-fav-icon">
                                <i class="fa-solid fa-heart fav-icon"></i>
                            </div>
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
                        <el-table-column fixed prop="image" label="Product Image" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="name-container">
                                    <div class="message-image-container">
                                        <img :src="scope.row.image" alt="Product Image" class="list-product-image" />
                                    </div>
                                </div>
                            </template>    
                        </el-table-column>
                        <el-table-column fixed prop="product_name" label="Product Name" width="180" class="inbox-table"/>
                        <el-table-column fixed prop="image" label="Product Image" width="250" class="inbox-table">
                            <template #default="scope">
                                <div class="view-desc-container color-primary">
                                    View Description
                                </div>
                            </template>    
                        </el-table-column>
                        <el-table-column fixed prop="price" label="Price" width="180" class="inbox-table"/>
                        <el-table-column fixed prop="quantity" label="Quantity" width="180" class="inbox-table"/>
                        <el-table-column fixed prop="fav" label="Favourite" width="180" class="inbox-table"/>
                
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
    <el-dialog v-model="right_dialog" title="Member Details" width="50%" class="right-dialog">
        <div class="dialog-content">
            <div class="right-dialog-product-image">
                <img :src="product_img" class="right-dialog-product-image"/>
            </div>
        <el-divider />

        <div class="right-dialog-text-container">
            <div class="right-dialog-product-name text-18">
                Product Name
            </div>
            <div class="right-dialog-product-name text-18 right-description">
                Description
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Created Date:
                </div>
                <div class="right-data text-18">
                    12/25/2025
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Quantity
                </div>
                <div class="right-data text-18">
                    1.5k Left
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Favourite
                </div>
                <div class="right-data text-18">
                    1.5k
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Ranking
                </div>
                <div class="right-data text-18 color-primary">
                    Top 1
                </div>
            </div>
            <div class="right-field flex-column">
                <div class="right-text text-18 ">
                    Slide Image
                </div>
                <div class="right-slide-image-container">
                    <img class="right-slide-image"/>
                </div>
            </div>
            <div class="right-field flex-column">
                <div class="right-text text-18 ">
                    Category
                </div>
                <div class="right-slide-image-container flex wrap gap-20">
                    <div class="category-container" v-for="item in category">
                        {{item}}
                    </div>
                </div>
            </div>
            <div class="right-field ">
                <div class="right-text text-18 bold">
                    Discount
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Discount Percentage
                </div>
                <div class="right-data text-18">
                    30%
                </div>
            </div>
            <div class="right-field flex-column">
                <div class="right-text text-18 ">
                    Discount Date
                </div>
                <div class="right-slide-image-container flex justify-spacebetween">
                    <div class="text-16">23/12/2025</div>
                    <div class="text-16">till</div>
                    <div class="text-16">23/12/2025</div>
                </div>
            </div>
        </div>
       <div class="center-dialog-button">
            <div class="login-button-container">
                <el-button type="primary" class="cancel-button text-18">Cancel</el-button>
            </div>
            <div class="login-button-container">
                <el-button type="primary" class="login-button text-18" @click="toogleCenterDialog">Edit</el-button>
            </div>
        </div>
        </div>
    </el-dialog>
    <el-dialog v-model="center_dialog" title="Edit Product" width="50%" class="center-dialog-title">
        <div class="dialog-content">
            <div class="avatar-profile-container">
                <div class="member-image-text text-16">
                    Product Image
                </div>
                <img :src="product_img" class="edit-product-image"/>
                
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field">
                    <div class="login-field-text text-18 ">
                        Product name:
                    </div>
                    <el-input
                        class="login-input text-24"
                        v-model="postForm.product_name"
                        style="width: 100%"
                        placeholder="Enter your username"
                        clearable
                        :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                    />
                </div>
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field">
                    <div class="login-field-text text-18 ">
                        Description:
                    </div>
                    <el-input
                        class="login-input text-24"
                        v-model="postForm.product_desc"
                        style="width: 100%"
                        placeholder="Enter your password"
                        clearable
                        :type="showPassword ? 'text' : 'password'"
                        :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                    >
                        <template #suffix>
                            <i
                            class="cursor-pointer icon-hover text-18"
                            :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                            @click="toogleShowPassword"
                            ></i>
                        </template>
                    </el-input>
                </div>
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field">
                    <div class="login-field-text text-18 ">
                        Gmail:
                    </div>
                    <el-input
                        class="login-input text-24"
                        v-model="postForm.email"
                        style="width: 100%"
                        placeholder="Enter your gmail"
                        clearable
                        :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                    />
                </div>
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field">
                    <div class="login-field-text text-18 ">
                        Date Joined:
                    </div>
                    <el-date-picker
                        v-model="postForm.data_joined"
                        type="date"
                        placeholder="Pick a date"
                        :default-value="new Date(2010, 9, 1)"
                        class="date-picker-dialog"
                    />
                </div>
            </div>

        <!-- <el-divider /> -->

        <!-- <el-descriptions :column="1" border>
            <el-descriptions-item label="Username">User12345</el-descriptions-item>
            <el-descriptions-item label="Password">******** <el-icon><el-icon-eye /></el-icon></el-descriptions-item>
            <el-descriptions-item label="Email">Abc@Gmail.com</el-descriptions-item>
            <el-descriptions-item label="Product Purchased">
            <el-link type="primary">3,257 Product(s)</el-link>
            </el-descriptions-item>
            <el-descriptions-item label="Date Created">25/12/2025</el-descriptions-item>
        </el-descriptions> -->

        <div class="center-dialog-button">
            <div class="login-button-container">
                <el-button type="primary" class="cancel-button text-18">Cancel</el-button>
            </div>
            <div class="login-button-container">
                <el-button type="primary" class="login-button text-18">Save</el-button>
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
                product_name:'',
                input_password:'',
                stay_login:false,
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
                    product_name:'Product Name',
                    product_desc:'Product Name',
                    price:'1,258.00',
                    quantity:'1.5k',
                    fav:'1.2k Fav'
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
