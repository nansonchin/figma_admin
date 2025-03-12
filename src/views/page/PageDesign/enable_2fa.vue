<template>
    <div class="back-up-section">
        <div class="back-up-container">
            <el-row :gutter="20" v-loading="orderLoading">
                <el-col :sm="24" :md="24" :lg="24">
                    <div class="container">
                        <div class="setting-title text-24 bold">
                            Set Up Enable Two-Factor Authentication (2FA)
                        </div>
                        <div class="setting-desc text-20">
                            Protected your account with our two factor authentication 
                        </div>
                        <div class="enable-switch-container">
                            <div class="enable-each text-18 bold">
                                <div class="enable-text">
                                    Two-factor authentication
                                </div>
                                <div class="switch-icon">
                                    <el-switch v-model="postForm.enable_fa" />
                                </div>
                            </div>
                        </div>
                        <div class="custom-padding-height-50">

                        </div>
                        <div class="enable-switch-container">
                            <div class="enable-each text-18 bold">
                                <div class="enable-text" :class="!postForm.enable_fa? 'text-unactive':''">
                                    SMS Notification
                                </div>
                                <div class="switch-icon">
                                    <el-switch v-model="postForm.sms" :disabled="!postForm.enable_fa"/>
                                </div>
                            </div>
                        </div>
                        <div class="enable-switch-container">
                            <div class="enable-each text-18 bold">
                                <div class="enable-text" :class="!postForm.enable_fa? 'text-unactive':''">
                                    Phone Authentication
                                </div>
                                <div class="switch-icon">
                                    <el-switch v-model="postForm.phone" :disabled="!postForm.enable_fa"/>
                                </div>
                            </div>
                        </div>
                        <div class="2fa-hidden-section" v-if="postForm.phone">
                            <div v-if="postForm.phone" class="input-textfield">
                                <el-input
                                    class="login-input text-18"
                                    v-model="postForm.auth_phone"
                                    style="width: 100%"
                                    placeholder="Enter your phone number"
                                    type="number"
                                    clearable
                                    :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                                    :disabled="verified_phone"
                                />
                            </div>
                            <div v-if="!verified_phone" class="login-button-container text-right" >
                                <el-button type="primary" class="text-18" :class="!isPhoneCompleted()? 'disable-button':'login-button' " :disabled="!isPhoneCompleted()" @click="verifiedPhone()">Next</el-button>
                            </div>
                            <div v-if="verified_phone" class="phone-filled-section">
                                <div class="input-6-digit-container">
                                    <div class="input-6-digit-field">
                                        <div class="code-inputs">
                                            <input
                                                v-for="(digit, index) in code"
                                                :key="index"
                                                v-model="code[index]"
                                                maxlength="1"
                                                @input="moveToNext(index, $event)"
                                                @keydown.backspace="moveToPrev(index, $event)"
                                                ref="inputRefs"
                                            />
                                        </div>
                                    </div>
                                    <div class="input-resend text-18 cursor-pointer">
                                        Resend Code
                                    </div>
                                </div>
                                <div class="input-6-digit-text text-18">
                                    A 6 digit number have sent to your phone number. Kindly verified it
                                </div>
                                <div class="login-button-container text-right">
                                    <el-button type="primary" class="text-18" :class="!isCodeCompleted()? 'disable-button':'login-button' " :disabled="!isCodeCompleted()">Verified</el-button>
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
            postForm:{
                enable_fa:false,
                sms:false,
                phone:false,
                auth_phone:"",
            },
            code:["","","","","","",],
            inputRefs:[],
            verified_phone:false,
        }
    },methods:{
        moveToNext(index, event) {
            if (event.target.value && index < 5) {
                this.$refs.inputRefs[index + 1]?.focus();
            }
        },
        moveToPrev(index, event) {
            if (!event.target.value && index > 0) {
                this.$refs.inputRefs[index - 1]?.focus();
            }
        },
        isCodeCompleted() {
            return this.code.every((digit) => digit !== "");
        },
        isPhoneCompleted() {
            return this.postForm.auth_phone !="";
        },
        verifiedPhone(){
            this.verified_phone=true;
        }
      
    },
    computed: {

    },created() {

    },mounted(){
        this.inputRefs = this.$refs.inputRefs;
        this.isCodeCompleted()
    }
}
</script>
