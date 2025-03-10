<template>
   <div class="admin-password-section">
        <div class="admin-password-container">
            <el-row :gutter="20" v-loading="orderLoading">
                <el-col :sm="24" :md="24" :lg="24">
                    <div class="container">
                        <div class="setting-title text-24 bold">
                            Change Admin Password
                        </div>
                        <div class="change-admin-description">
                            You can change your password at here and please be reminder that once you changed your password successfully you will need to login with the new password
                        </div>
                        <div class="profile-each-field section-flex align-item-center justify-spacebetween">
                            <div class="login-field-text text-20 bold flex-1 text-left">
                                Password:
                            </div>
                            <div class="field-text text-20 flex-1 text-center">
                                {{password_showed?  getForm.password : asteriskPassword}}
                            </div>
                            <div class="copy-container flex-1 text-right">
                                <i class="cursor-pointer icon-hover" 
                                :class="password_showed ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                                @click="tooglePassword"></i>
                                <!-- <i class="fa-solid fa-eye-slash"></i> -->
                            </div>
                        </div>
                        <div class="change-password-input-field">
                            <div class="login-each-field">
                                <div class="login-field-text text-20 bold">
                                    New Password:
                                </div>
                                <el-input
                                    class="login-input text-18"
                                    v-model="postForm.new_password"
                                    style="width: 100%"
                                    placeholder="Enter your password"
                                    type="password"
                                    clearable
                                    :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                                />
                            </div>
                            <div class="login-each-field">
                                <div class="login-field-text text-20 bold">
                                    Confirm New Password:
                                </div>
                                <el-input
                                    class="login-input text-18"
                                    v-model="postForm.confirm_new_password"
                                    style="width: 100%"
                                    placeholder="Enter your password"
                                    type="password"
                                    clearable
                                    :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                                />
                            </div>
                        </div>
                        <div class="change-admin-password-button-container">
                            <div class="button-container text-right">
                                <div class="login-button-container">
                                    <el-button type="primary" class="login-button text-18">Change</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            
        </div>
   </div>
</template>

<script setup>

</script>

<script>
export default {
    data(){
        return{
            asteriskPassword:'',
            getForm:{
                password:'Admin1234',
            },
            postForm:{
                new_password:'',
                confirm_new_password:'',
                stay_login:false,
                email:'',
                phone_number:'',
                message:'',
            },
            password_showed:false,
        }
    },methods:{
        setAsteriskPassword(){
            return this.asteriskPassword = "*".repeat(this.getForm.password.length)
        },
        tooglePassword(){
            this.password_showed=!this.password_showed
        }
    },
    computed: {
       
    },created() {
        this.setAsteriskPassword()
    },
}
</script>
