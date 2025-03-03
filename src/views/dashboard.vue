<template>
    <div>
        Test Admin
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
                name:'',
                email:'',
                phone_number:'',
                message:'',
            },
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