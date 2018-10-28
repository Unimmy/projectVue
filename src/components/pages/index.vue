<template>
    <div class="index-app" >
        <!-- 轮播图 -->
      <swiper-box :bannerlist="bannerlist" v-if="adress=='indexheader'"></swiper-box>
        <!-- 主页 -->
      <section class="container"></section>
    </div>
</template>

<script>
import swiper from '../common/swiper.vue'
export default {
      data(){
        return {
            bannerlist:[],//存储轮播图片
            adress:'',//过滤器
        }
    },
    methods:{
        getBannerList(){
            var url = "http://127.0.0.1:4001/banner/banner"
            this.$http.get(url).then(res=>{
                console.log(res.data.data)
                this.bannerlist = res.data.data;
                this.adress=this.bannerlist[0].adress
            })
        }
    },
    created(){
        this.getBannerList()
    },
     components:{
        'swiper-box':swiper//注册子组件
     }
}
</script>

<style>
.container{
    
}
</style>
