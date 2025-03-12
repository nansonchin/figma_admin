<template>
    <div class="back-up-section">
        <div class="back-up-container">
            <el-row :gutter="20" v-loading="orderLoading">
                <el-col :sm="24" :md="24" :lg="24">
                    <div class="container">
                        <div class="setting-title text-24 bold">
                            Back up your data
                        </div>
                        <div class="setting-desc text-20">
                            Download the data that you wish to back up
                        </div>
                        <div class="check-box-container"> 
                            <div class="custom-check-box cursor-pointer" @click="selectBox()" >
                                <div class="check-box-text text-20"  :class="postForm.back_all? 'bold' : ''">Back up All</div>
                                <div class="check-box-tick"
                                :class="postForm.back_all? 'background-primary' : 'background-white'"
                                >
                                    <span v-if="postForm.back_all" class=""><i class="fa-solid fa-check icon-white"></i></span>
                                </div>
                            </div>
                            <div class="custom-check-box cursor-pointer" @click="selectBox()" >
                                <div class="check-box-text text-20"  :class="postForm.back_top_product? 'bold' : ''">Back up Top product</div>
                                <div class="check-box-tick"
                                :class="postForm.back_top_product? 'background-primary' : 'background-white'"
                                >
                                    <span v-if="postForm.back_top_product" class=""><i class="fa-solid fa-check icon-white"></i></span>
                                </div>
                            </div>
                            <div class="custom-check-box cursor-pointer" @click="selectBox()" >
                                <div class="check-box-text text-20"  :class="postForm.back_top_member? 'bold' : ''">Back up member list</div>
                                <div class="check-box-tick"
                                :class="postForm.back_top_member? 'background-primary' : 'background-white'"
                                >
                                    <span v-if="postForm.back_top_member" class=""><i class="fa-solid fa-check icon-white"></i></span>
                                </div>
                            </div>
                            <div class="custom-check-box cursor-pointer" @click="selectBox()" >
                                <div class="check-box-text text-20"  :class="postForm.back_payment? 'bold' : ''">Back up payment list</div>
                                <div class="check-box-tick"
                                :class="postForm.back_payment? 'background-primary' : 'background-white'"
                                >
                                    <span v-if="postForm.back_payment" class=""><i class="fa-solid fa-check icon-white"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="export-button-container">
                            <el-dropdown @command="handleExport">
                                <el-button type="primary" class="export-el-button">
                                    <div class="export-container">
                                        <div class="export-title text-18">
                                            Export
                                        </div>
                                        <div class="export-desc">
                                            As {{postForm.file_selected}}  {{postForm.memory}}
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-triangle rotate-180"></i>
                                </el-button>
                                <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="csv" @click="selectedFile(1)">CSV</el-dropdown-item>
                                    <el-dropdown-item command="json" @click="selectedFile(2)">Json</el-dropdown-item>
                                </el-dropdown-menu>
                                </template>
                            </el-dropdown>
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
