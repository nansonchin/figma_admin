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
                    <!-- <div class="advertisement-container">
                        <div class="advertisement">
                            <img :src="ads_image" class="ad-image"/>
                        </div>
                    </div> -->
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
                        <el-table class="cursor-pointer" :data="tableData" style="width: 100%" max-height="250" :row-class-name="tableRowClass"  @click="toogleRightDialog()">
                                <el-table-column fixed prop="index" label="No" width="80" class="inbox-table">
                                    <template #default="scope">
                                        {{ scope.$index+1 }}
                                    </template>
                                </el-table-column>
                                <el-table-column fixed prop="name" label="Username" width="250" class="inbox-table">
                                    <template #default="scope">
                                        <div class="name-container">
                                            <div class="message-image-container">
                                                <img :src="scope.row.image" alt="User Image" class="name-image" />
                                            </div>
                                            <span>{{ scope.row.name }}</span>
                                        </div>
                                    </template>    
                                </el-table-column>
                                <el-table-column fixed prop="password" label="Password" width="180" class="inbox-table">
                                    <template #default="scope">
                                        <div class="password-container">
                                            <div class="password-section">
                                                {{ scope.row.password_showed? scope.row.password:'*'.repeat(scope.row.password.length) }}
                                            </div>
                                            <i class="cursor-pointer icon-hover" 
                                            :class="scope.row.password_showed ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                                            @click="tooglePassword(scope.row)"></i>
                                        </div>
                                    </template>    
                                </el-table-column>
                                <el-table-column fixed prop="gmail" label="Gmail" width="350" class="inbox-table"/>
                                <el-table-column fixed prop="date_join" label="Date Join" width="150"class="inbox-table" />
                                <el-table-column fixed prop="status" label="Status" width="100" class="inbox-table"/>             
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
    <el-dialog v-model="right_dialog" title="Member Details" width="50%" class="right-dialog">
        <div class="dialog-content">
            <div class="right-dialog-profile">
                <el-avatar :size="120" src="https://i.pravatar.cc/150" />
            </div>
        <el-divider />

        <div class="right-dialog-text-container">
            <div class="right-field">
                <div class="right-text text-18 bold">
                    Username
                </div>
                <div class="right-data text-18">
                    User12345
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 bold">
                    Password
                </div>
                <div class="right-data text-18">
                    <div class="right-dialog-password">
                        <div class="right-password-text">
                            {{showPassword? testPassword:'*'.repeat(testPassword.length)}}
                        </div>
                        <div class="right-password-icon">
                            <i
                            class="cursor-pointer icon-hover text-18"
                            :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                            @click="toogleShowPassword"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 bold">
                    Email
                </div>
                <div class="right-data text-18">
                    User12345@gmail.com
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 bold">
                    Product Purchased
                </div>
                <div class="right-data text-18 color-primary">
                    3,257 Product (s)
                </div>
            </div>
            <div class="right-field">
                <div class="right-text text-18 bold">
                    Date Created
                </div>
                <div class="right-data text-18">
                    25/12/2025
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

    <el-dialog v-model="center_dialog" title="Edit Member" width="50%" class="center-dialog-title">
        <div class="dialog-content">
            <div class="avatar-profile-container">
                <div class="member-image-text text-16">
                    Member Image
                </div>
                <el-avatar :size="160" src="https://i.pravatar.cc/150" />
                
            </div>
            <div class="dialog-input-textfield">
                <div class="login-each-field">
                    <div class="login-field-text text-18 ">
                        Member name:
                    </div>
                    <el-input
                        class="login-input text-24"
                        v-model="postForm.input_username"
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
                        Password:
                    </div>
                    <el-input
                        class="login-input text-24"
                        v-model="postForm.password"
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
            testPassword:'123456',
            // ads_image:'src/assets/img/image/004.jpg',
            totalProducts:1000,
            selectedDate:'',
            selectedCategory:'',
            selectedQuery:'',
            sortOrder:'',
           
            tableData:[
                {
                    image:'src/assets/img/image/met.jpg',
                    name:'Met1234',
                    password:'Met1234password',
                    gmail:'Met1234@gmail.com',
                    date_join:'Met1234',
                    password_showed:false,
                    status:'Verified',
                },
                {
                    image:'src/assets/img/image/met.jpg',
                    name:'Met1234',
                    password:'Met1234password',
                    gmail:'Met1234@gmail.com',
                    date_join:'12/25',
                    password_showed:false,
                    status:'Verified',
                },
                {
                    image:'src/assets/img/image/met.jpg',
                    name:'Met1234',
                    password:'Met1234password',
                    gmail:'Met1234@gmail.com',
                    date_join:'12/25',
                    password_showed:false,
                    status:'Verified',
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
        toogleCenterDialog(){
            this.center_dialog=true;
        },
        toogleRightDialog(){
            this.right_dialog=true
        },
        filterNotificaitons(){
            
        },
        tableRowClass({row}) {
            return row.unread ? 'unread' : 'read';
        },
        tooglePassword(row){
            row.password_showed = !row.password_showed
        },
        toogleShowPassword(){
            this.showPassword =!this.showPassword 
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
