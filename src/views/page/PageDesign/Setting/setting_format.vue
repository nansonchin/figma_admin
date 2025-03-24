<template>
    <div class="setting-section">
        <div class="setting-container">
            <div class="container">
                <el-row :gutter="20" v-loading="orderLoading">
                    <el-col :sm="24" :md="12" :lg="12">
                        <div class="setting-part-container">
                            <div class="setting-title text-24 bold">
                                User Setting
                            </div>
                            <div class="setting-profile-container">
                                <div class="profile-image cursor-pointer">
                                    <img :src="profile" class="profile"/>
                                </div>
                            </div>
                            <div class="setting-profile-field-container">
                                <div class="profile-each-field section-flex align-item-center justify-spacebetween">
                                    <div class="login-field-text text-20 bold flex-1 text-left">
                                        Username:
                                    </div>
                                    <div class="field-text text-20 flex-1 text-center">
                                        Admin12345
                                    </div>
                                    <div class="copy-container flex-1 text-right"></div>
                                    <!-- <el-input
                                        class="login-input text-24"
                                        v-model="postForm.input_username"
                                        style="width: 100%"
                                        placeholder="Enter your username"
                                        clearable
                                        :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                                    /> -->
                                </div>
                                <div class="profile-each-field section-flex align-item-center justify-spacebetween">
                                    <div class="login-field-text text-20 bold flex-1 text-left">
                                        UID:
                                    </div>
                                    <div class="field-text text-20 flex-1 text-center">
                                        Admin12345
                                    </div>
                                    <div class="copy-container flex-1 text-right">
                                        <img @click="showTooltips" :src="copy" class="copy-icon cursor-pointer"/>
                                        <span v-if="copiedTip" class="copy-tooltips">Copied ! </span>
                                    </div>
                                </div>
                                <div class="profile-each-field section-flex align-item-center justify-spacebetween">
                                    <div class="login-field-text text-20 bold flex-1 text-left">
                                        Role:
                                    </div>
                                    <div class="field-text text-20 flex-1 text-center">
                                       Admin
                                    </div>
                                    <div class="copy-container flex-1 text-right">
                                       
                                    </div>
                                </div>
                                <div class="profile-each-field section-flex align-item-center justify-spacebetween">
                                    <div class="login-field-text text-20 bold flex-1 text-left">
                                        Team:
                                    </div>
                                    <div class="field-text text-20 flex-1 text-center">
                                        Chuang Team
                                    </div>
                                    <div class="copy-container flex-1 text-right">
                                      
                                    </div>
                                </div>
                            </div>
                            <div class="profile-container-button">
                                <div class="login-button-container">
                                    <el-button type="primary" class="login-button text-18">Edit</el-button>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :sm="24" :md="12" :lg="12">
                        <div class="setting-part-container">
                            <div class="setting-title text-24 bold">
                                Setting
                            </div>
                            <div class="setting-text-container">
                                <div class="setting-text cursor-pointer" @click="goBackAdmin()"> Change Admin Password </div>
                                <div class="setting-text cursor-pointer" @click="goBack2FA()"> Enable Two-Factor Authentication (2FA)</div>
                                <div class="setting-text cursor-pointer" @click="goSessionTime()"> Session Timeout Settings </div>
                            </div>
                        </div>
                        <div class="padding-10"></div>
                        <div class="setting-part-container">
                            <div class="setting-title text-24 bold">
                                Notification Settings
                            </div>
                            <div class="setting-text-container">
                                <div class="setting-text cursor-pointer"> Email Notifications </div>
                                <div class="setting-text cursor-pointer"> Push Notifications</div>
                            </div>
                        </div>
                        <div class="padding-10"></div>
                        <div class="setting-part-container">
                            <div class="setting-title text-24 bold">
                                Data & Backup
                            </div>
                            <div class="setting-text-container">
                                <div class="setting-text cursor-pointer">Database Backup & Restore</div>
                                <div class="setting-text cursor-pointer" @click="goImport()">Import Data</div>
                                <div class="setting-text cursor-pointer" @click="goBackUp()">Export Data (CSV, Excel, JSON, etc.)</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
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
            copiedTip:false,
            copy:'src/assets/img/icon/copy.png',
            profile:'src/assets/img/image/profile.jpeg',
            postForm:{
                input_username:'',
                input_password:'',
                stay_login:false,
                email:'',
                phone_number:'',
                message:'',
            },
        }
    },methods:{
        showTooltips(){
            this.copiedTip = true;
            setTimeout(()=>{
                this.copiedTip = false;
            },1500);
        },
        goBackAdmin(){
            this.$emit('open-admin-password')
        },
        goBack2FA(){
            this.$emit('open-2fa')
        },  
        goSessionTime(){
            this.$emit('open-session')
        },
        goImport(){
            this.$emit('open-import')
        },
        goBackUp(){
            this.$emit('open-backup')
        }
    },
    computed: {
       
    },created() {

    },
}
</script>
