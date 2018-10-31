<template>
    <div class="swiper-app">
    <el-carousel :interval="3000" arrow="hover" autoplay>
    <el-carousel-item v-for="item in bannerlist" :key="item.id">
    <img :src="item.banner_img" alt="出错了">
    </el-carousel-item>
  </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
          
        }
    },
    methods:{},
    created(){},
     props:["bannerlist", 'imgtype']
}
</script>

<style>
.el-carousel__container{
    height:500px;
}
</style>
