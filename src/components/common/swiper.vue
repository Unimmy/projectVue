<template>
    <div class="swiper-app">
    <el-carousel :interval="3000" arrow="hover" autoplay>
            <el-carousel-item v-for="item in bannerlist" :key="item.id" v-if='item.adress==banneradress'>
                <img :src="item.banner_img" alt="出错了">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
         bannerlist:[],//存储轮播图片
       
        }
    },
    methods:{
          getBannerList(){
            var url = "http://148.70.49.89:4001/banner/banner"
            this.$http.get(url).then(res=>{
                this.bannerlist = res.data.data;
            })
        },
    },
    created(){
         this.getBannerList()
    },
     props:['banneradress']
}
</script>

<style>
.el-carousel__container{
    height:500px;
}
</style>
