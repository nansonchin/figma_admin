<template>
    <div class="back-up-section">
        <div class="back-up-container">
            <el-row :gutter="20" v-loading="orderLoading">
                <el-col :sm="24" :md="24" :lg="24">
                    <div class="container">
                        <div class="setting-title text-24 bold">
                            Import your data
                        </div>
                        <div class="setting-desc text-20">
                            The CSV Data Import section in the admin panel allows administrators to efficiently upload and manage bulk data from CSV files. This feature simplifies the process of adding, updating, or migrating large datasets into the system while ensuring data integrity and consistency.
                        </div>
                        <div class="import-container">
                            <el-upload
                                class="upload-demo"
                                drag
                                action=""
                                multiple
                            >
                                <i class="fa-solid fa-cloud-arrow-up icon-file"></i>
                                <div class="el-upload__text">
                                Drop file here or <em>click to upload</em>
                                </div>
                                <template #tip>
                                <div class="el-upload__tip">
                                    jpg/png files with a size less than 500kb
                                </div>
                                </template>
                            </el-upload>
                        </div>
                        <div class="export-button-container">
                            <el-dropdown @command="handleExport">
                                <el-button type="primary" class="export-el-button">
                                    <div class="export-container">
                                        <div class="export-title text-18">
                                            Import
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
