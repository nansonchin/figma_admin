<template>
    <div class="inbox-section">

        <el-row :gutter="20" v-loading="orderLoading">
            <el-col :sm="24" :md="24" :lg="24">
                <div class="container">
                    <div class="news-container">
                        <div class="news-section">
                            <div class="news-header">
                                <div class="news-back-icon">
                                    <div class="sidemenu-collapse-container">
                                        <img :src="icon_collapse" 
                                            @click="isCollapse=!isCollapse" 
                                            class="collapse-menu-icon cursor-pointer"/>
                                    </div>
                                </div>
                                <div class="news-header-title text-20 bold">
                                    Announcement
                                </div>
                                <div class="div">

                                </div>
                            </div>
                            <div class="news-body">
                                <div class="news-content">
                                    Dear All<br>
                                    <br>
                                    <br>
                                    <br>
                                    We’re thrilled to share that something BIG is on the horizon! 🎉 A brand-new update is coming your way, bringing enhanced features, exclusive perks, and a smoother experience like never before.
Whether you're a long-time supporter or new to our community, this is something you won't want to miss! Stay tuned for all the details—we’ll be revealing everything very soon. 👀
✨ Get ready for a game-changing experience! ✨
📅 Announcement Date: [Insert Date] 📍 Where: Right here! Stay connected for the official reveal.
#StayTuned #ExcitingUpdate #BigThingsComing 🚀🔥
                                </div>
                            </div>
                            <div class="news-footer">
                                <div class="news-detail">
                                    <div class="news-profile">
                                        <img :src="profile_img" class="news-profile"/>
                                    </div>
                                    <div class="news-text">
                                        <div class="news-title text-18">
                                            Met1234
                                        </div>
                                        <div class="news-desc text-14">
                                            HR Manager
                                        </div>
                                    </div>
                                </div>
                                <div class="news-date">
                                    25/12/2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>  
    
</template>

<script setup>

</script>

<script>
export default {
    data(){
        return{
            profile_img:'src/assets/img/image/met.jpg',
            icon_collapse:'src/assets/img/menu_icon/collapse.png',
            list_icon_act:'src/assets/img/icon/list_active.png',
            postForm:{  
             
            },
        }
    },methods:{
        
    },
    computed: {
      
    },created() {
        
    },
}
</script>
