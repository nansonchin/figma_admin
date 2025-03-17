<template>
    <div class="product-section">
        <div class="product-layout-section">
            <div class="product-grid-list">
                <!-- <img :src="grid_selected? grid_icon_act:grid_icon_unact" class="grid-list cursor-pointer" @click="grid_selected=true"/>
                <img :src="grid_selected? list_icon_unact:list_icon_act" class="grid-list cursor-pointer" @click="grid_selected=false"/> -->
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

        <div class="list-view-product-section" v-if="!grid_selected">
            <div class="list-table">
                <el-table class="cursor-pointer" :data="list_data" style="width: 100%" min-height="100%" height="100%" :row-class-name="tableRowClass"  @click="toogleRightDialog">
                        <el-table-column fixed prop="index" label="No" width="80" class="inbox-table">
                            <template #default="scope">
                                {{ scope.$index+1 }}
                            </template>
                        </el-table-column>
                        <el-table-column fixed prop="name" label="Username" width="450" class="inbox-table"> 
                                <template #default="scope">
                                    <div class="name-container">
                                        <div class="message-image-container">
                                            <img :src="scope.row.image" alt="User Image" class="name-image" />
                                        </div>
                                        <span>{{ scope.row.username }}</span>
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
            <div class="right-dialog-username flex gap-20 align-item-center">
                <div class="right-dialog-product-image">
                    <img :src="product_img" class="right-dialog-username"/>
                </div>
                <div class="right-dialog-name text-20">
                    Username
                </div>
            </div>
        <el-divider />

        <div class="right-dialog-text-container">
            <div class="right-field">
                <div class="right-text text-18 ">
                    Payment Id:
                </div>
                <div class="right-data text-18">
                    1234567
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Payment Method:
                </div>
                <div class="right-data text-18">
                    FPX Transfer
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Date
                </div>
                <div class="right-data text-18">
                    23/12
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 ">
                    Status
                </div>
                <div class="right-data text-18 color-primary">
                    <el-select v-model="sortOrder" placeholder="Sort by" @change="sortNotifications" class="center-dialog-category">
                        <template #suffix-icon>
                            <i class="fa-solid fa-caret-down"></i>
                        </template>
                        <el-option label="Latest" value="latest" />
                        <el-option label="Oldest" value="oldest" />
                    </el-select>
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 bold">
                    Product Purchase
                </div>
            </div>
            <div class="right-field">
                <div class="right-dialog-product-image flex-2">
                    <img :src="product_img" class="right-dialog-username"/>
                </div>
                <div class="right-text text-18 flex-1 flex-column justify-spacebetween">
                    <div class="right-text-title color-primary">
                        Product Name 1
                    </div>
                    <div class="right-text-title">
                        Quantity : 2
                    </div>
                </div>
                <div class="right-dialog-product-text text-20 bold flex-2 flex">
                    1,239.00
                </div>
            </div>
            <el-divider />
            <div class="dialog-input-textfield">
                <div class="login-each-field flex justify-spacebetween">
                    <div class="login-field-text text-18 ">
                        Total Price:
                    </div>
                    <div class="total-price-amount-container">
                        <div class="total-price-amount bold text-20">
                            122,300.00
                        </div>
                        <div class="total-profit-container flex gap-20">
                            <div class="text-20 ">
                                Quantity: 14
                            </div>
                            <!-- <div class="total-profit-icon">
                                <i class="fa-regular fa-circle-info"></i>
                            </div> -->
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
                <el-button type="primary" class="login-button text-18" @click="toogleCenterDialog">Edit</el-button>
            </div>
        </div>
        </div>
    </el-dialog>
    <el-dialog v-model="center_dialog" title="Edit User Payment" width="50%" class="center-dialog-title">
        <div class="dialog-content">
            <div class="dialog-input-textfield">
                <div class="login-each-field">
                    <div class="login-field-text text-18 ">
                        Username:
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
            <div class="flex justify-spacebetween gap-20">
                <div class="dialog-input-textfield w-100percent">
                    <div class="login-each-field">
                        <div class="login-field-text text-18 ">
                            Description:
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
                <div class="dialog-input-textfield w-100percent">
                    <div class="login-each-field">
                        <div class="login-field-text text-18 ">
                            Pay Date:
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
            </div>
            
            
            <div class="dialog-input-textfield w-50percent">
                <div class="login-each-field ">
                    <div class="login-field-text text-18 ">
                        Category:
                    </div>
                    <el-select v-model="sortOrder" placeholder="Sort by" @change="sortNotifications" class="center-dialog-category">
                        <template #suffix-icon>
                            <i class="fa-solid fa-caret-down"></i>

                        </template>
                        <el-option label="Latest" value="latest" />
                        <el-option label="Oldest" value="oldest" />
                    </el-select>
                </div>
            </div>
            
            <div class="flex justify-spacebetween gap-20">
                <div class="dialog-input-textfield w-100percent">
                    <div class="login-each-field">
                        <div class="login-field-text text-18 ">
                            Product:
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
                <div class="dialog-input-textfield w-100percent">
                    <div class="login-each-field">
                        <div class="login-field-text text-18 ">
                            Quantity:
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
            </div>
            <div class="dialog-payment-product-window">
                <div class="dialog-product-window-height">
                    <div class="product-design flex justify-spacebetween">
                        <div class="product-design-image-container flex-1">
                            <img :src="product_img" class="product_payment-img"/>
                        </div>
                        <div class="product-design-decsription flex-3">
                            <div class="product-design-name-container flex justify-spacebetween m-auto">
                                <div class="product-design-name">
                                    Product Name
                                </div>
                                <div class="product-design-icon">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="product-design-name-container flex justify-spacebetween">
                                <div class="product-design-name">
                                    Quantity 14
                                </div>
                                <div class="product-design-icon text-20 bold">
                                    122,300.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-divider />

            <div class="dialog-input-textfield">
                <div class="login-each-field flex justify-spacebetween">
                    <div class="login-field-text text-18 ">
                        Total Price:
                    </div>
                    <div class="total-price-amount-container">
                        <div class="total-price-amount bold text-20">
                            122,300.00
                        </div>
                        <div class="total-profit-container flex gap-20">
                            <div class="text-20 ">
                                Quantity: 14
                            </div>
                            <!-- <div class="total-profit-icon">
                                <i class="fa-regular fa-circle-info"></i>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            
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
            grid_selected:false,
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
                    image:'src/assets/img/image/met.jpg',
                    username:'Username',
                    product_desc:'Product Name',
                    payment_id:'12345678',
                    date:'25/12',
                    status:'Pending'
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
