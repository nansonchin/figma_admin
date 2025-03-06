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
    </div>
</template>

<script setup>

</script>

<script>
export default {
    data(){
        return{
            grid_selected:true,
            list_icon_act:'src/assets/img/icon/list_active.png',
            list_icon_unact:'src/assets/img/icon/list_unactive.png',
            grid_icon_act:'src/assets/img/icon/grid_active.png',
            grid_icon_unact:'src/assets/img/icon/grid_unactive.png',
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

    },
    computed: {
       
    },created() {

    },
}
</script>
