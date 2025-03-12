<template>
    <div class="back-up-section">
        <div class="back-up-container">
            <el-row :gutter="20" v-loading="orderLoading">
                <el-col :sm="24" :md="24" :lg="24">
                    <div class="container">
                        <div class="setting-title text-24 bold">
                            Set your session time
                        </div>
                        <div class="session-desc-container">
                            <el-row :gutter="20" v-loading="orderLoading">
                                <el-col :sm="24" :md="8" :lg="8">
                                    <div class="session-timer bold text-24">
                                        2:35
                                    </div>
                                </el-col>
                                <el-col :sm="24" :md="16" :lg="16">
                                    <div class="session-desc-section">
                                        <div class="session-desc-title-section">
                                            <div class="session-title text-18 bold">
                                                Current Time Set
                                            </div>
                                            <div class="session-time text-18">
                                                3 mins
                                            </div>
                                        </div>
                                        <div class="session-time-description text-18">
                                            We will automatically log you off when the time is reached 3 min without anything is making change
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="selection-timer-container">
                            <div class="selection-timer-title bold text-20">
                                Change Time Setting
                            </div>
                            <div class="mt-4">
                                <el-select v-model="selectedTime" placeholder="Select time">
                                    <el-option v-for="(time, index) in timeOptions" :key="index" :label="time.label" :value="time.value" />
                                </el-select>
                            </div>
                        </div>
                        <div class="login-button-container text-right">
                            <el-button type="primary" class="login-button text-18">Change</el-button>
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
            timeOptions:[
                { label: "1 mins", value: "1 mins" },
                { label: "5 mins", value: "5 mins" },
                { label: "10 mins", value: "10 mins" },
                { label: "20 mins", value: "20 mins" },
                { label: "40 mins", value: "40 mins" },
                { label: "1 hours", value: "1 hours" },
                { label: "1 hours 30mins", value: "1 hours 30mins" },
                { label: "2 hours", value: "2 hours" },
                { label: "Never", value: "Never" }
            ],
            postForm:{
                back_all:false,
                back_top_product:false,
                back_top_member:false,
                back_payment:false,
                file_selected:"CSV",
                memory:"0MB"
            },
        }
    },methods:{
        selectBox(){
            this.postForm.back_all = !this.postForm.back_all
        },
        selectedFile(index){
            if(index==1){
                this.postForm.file_selected="CSV"
            }else if(index==2){
                this.postForm.file_selected="JSON"
            }
        }
    },
    computed: {
       
    },created() {

    },
}
</script>
