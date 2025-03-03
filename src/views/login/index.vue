<template>
    <div class="test-admin-container">
        <el-row :gutter="20" v-loading="orderLoading">
            <el-col :sm="24" :md="12" :lg="12">
                <swiper :pagination="true" :modules="modules" class="mySwiper" >
                    <swiper-slide v-for="data in swiper">
                        <div class="login-swiper-container">
                            <img :src="data.img" class="swiper-login-img"/>
                        </div>
                    </swiper-slide>
                </swiper>
            </el-col>
            <el-col :sm="24" :md="12" :lg="12">
                <div class="" style="background-color: #ffffff;">
                    <div class="login-container">
                        <div class="login-image-container">
                            <img :src="image.login_logo" class="login-image"/>
                        </div>
                        <div class="login-title title-text-32 text-center">
                            Login
                        </div>
                        <div class="login-custom-padding">
                            <div class="login-field-container">
                                <div class="login-each-field">
                                    <div class="login-field-text text-20">
                                        Username:
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
                                <div class="login-each-field">
                                    <div class="login-field-text text-20">
                                        Password:
                                    </div>
                                    <el-input
                                        class="login-input text-24"
                                        v-model="postForm.input_password"
                                        style="width: 100%"
                                        placeholder="Enter your password"
                                        type="password"
                                        clearable
                                        :style="{ border: 'none', borderBottom: '1px solid #D9D9D9', borderRadius: '0' }"
                                    />
                                </div>
                            </div>
                            <div>
                                <el-checkbox class="login-check-box text-18" v-model="postForm.stay_login" label="Stay me login" size="large" />
                            </div>
                        </div>
                        <div class="login-button-container">
                            <el-button type="primary" class="login-button text-18">Login</el-button>
                        </div>
                        <div class="login-no-acc-container">
                            <div class="login-no-acc-text text-18">
                                Don't have an account?
                            </div>
                            <div class="login-contact-us text-18 cursor-pointer bold" >
                                Contact Us
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

import { Navigation, Pagination, A11y, Autoplay, EffectFade, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
let modules = [Navigation, Pagination, A11y, Autoplay, EffectFade, EffectCoverflow]
let swiper_options = {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
    spaceBetween:30,
	loop: true,
	speed: 1000,
}
let slides = 3
</script>

<script>
export default {
    data(){
        return{
            postForm:{
                input_username:'',
                input_password:'',
                stay_login:false,
                email:'',
                phone_number:'',
                message:'',
            },
            image:{
                login_logo:'src/assets/img/login/logo_test.png'
            },
            swiper: [
                { img: 'src/assets/img/login/login_slide.png' },
                { img: 'src/assets/img/login/login_slide.png' },
                { img: 'src/assets/img/login/login_slide.png' }
            ],
            benefit:[
                {
                    img:'src/assets/img/benefit1.png',
                    title:this.$t('mix.table_cheap'),
                    text:this.$t('mix.table_benefit_1')
                },
                {
                    img:'src/assets/img/benefit2.png',
                    title:this.$t('mix.table_trainning_provided'),
                    text:this.$t('mix.table_benefit_2')
                },
                {
                    img:'src/assets/img/benefit3.jpg',
                    title:this.$t('mix.table_quality_ansurrance'),
                    text:this.$t('mix.table_benefit_3')
                },
            ],
        }
    },methods:{
    },
}
</script>