<template>
    <div class="index-app" >
        <!-- 轮播图 -->
        <el-carousel :interval="3000" arrow="hover" autoplay>
            <el-carousel-item v-for="item in bannerlist" :key="item.id" v-if="item.adress=='indexheader'">
                <img :src="item.banner_img" alt="出错了">
            </el-carousel-item>
        </el-carousel>
        <!-- 主页 -->
      <section class="container">
          <div class="title01">
              <h1>岚庭整装产品 · 让家更美好</h1>
              <h3>Lanting Packaged product sure to make home better<a href="#">了解更多&gt;</a></h3>
          </div>
          <hr>
          <div class="sections">
         <!-- 轮播图 -->
            <el-carousel :interval="3000" arrow="hover" autoplay>
                <el-carousel-item v-for="item in bannerlist" :key="item.id" v-if="item.adress=='indexsection'">
                    <img :src="item.banner_img" alt="出错了">
                </el-carousel-item>
            </el-carousel>
          </div>
      </section>
       <div class="smcon">
            <div class="title01">
                    <h1>装修案例·家原来可以如此</h1>
                    <h3>Decoration case, the original home can be so<a href="#">了解更多&gt;</a></h3>
                </div>
            </div>
        <div class="smcon1"> 
            <div class="title01 sub01">
                <div  class="img1">
                    <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/3.jpg">
                </div>
                <div  class="img2">
                    <img src="http://img.ltjia.cn/20180223/5a8f7a2f5115a.jpg">
                    <span>美式风格</span>
                </div>
                <div  class="img3">
                    <img src="http://img.ltjia.cn/20180407/5ac8639bc3b97.jpg">
                    <span>田园风格</span>
                </div>
                <div  class="img4">
                    <img src="http://img.ltjia.cn/20180224/5a90cc040187c.jpg">
                    <span>美式风格</span>
                </div>
            </div>
        </div>
        <div class="smcon">
            <div class="title01">
                <h1>岚庭之家· 新闻实时掌握</h1>
                <h3>Lanting Home,News in real time<a href="#">了解更多&gt;</a></h3>
            </div>
        </div>
         <div class="title01 pdtop">
            <el-row>
                <el-col :span="8">
                    <div class="grid-content">
                    <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/dj.jpg">
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content ">
                        <div class="newsright"> 
                        <div class="newsrighttitle"> 
                            <div class="bb_yuan"></div> 
                            <div class="bb_title"> 岚庭头条 </div> 
                            <div class="bb_xian"></div> 
                            <div class="bb_yinwen">LAND&nbsp;HEADLINES</div>
                        </div> 
                    <ul> 
                        <li v-for="item in newslist" :key="item.id" v-if="item.newadress=='index'">
                            <span>{{item.pubtime.slice(0,10)}}</span> 
                            <div class="biaoqian">
                                <img :src="item.news_imgs" > 
                            </div> 
                            <a href="http://127.0.0.1:4001" >{{item.newstitle}}</a>
                        </li>
                    </ul>
                </div> 
                </div>
                </el-col>
                </el-row>
                 <el-row>
                    <el-col :span="8"><div class="grid-content">
                      <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/jylt.jpg" alt="">
                    </div></el-col>
                     <el-col :span="8"><div class="grid-content">
                      <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/mt.jpg" alt="">
                    </div></el-col>
                     <el-col :span="8"><div class="grid-content">
                         <div class="newsxright">
                             服务热线
                             <div class="newsxrights"></div>
                             <p>028-86660817</p>
                         </div>
                    </div></el-col>
                </el-row>
        </div>
        <div class="title01">
            <h1>品牌质保· 装修好服务</h1>
            <h3>Brand quality assurance and international standards<a href="#">了解更多&gt;</a></h3>
        </div>
        <div class="title01">
            <el-row>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>已为 62,145户提供优质服务</span>
                        </div>
                        <div class="text item">
                            <div class="bg bg1"></div>
                            <h3>上门量房</h3>
                            <p>专业质检员上门量房</p>  
                        </div>
                         <div class="text item">
                            <div class="bg bg2"></div>
                            <h3>设计报价</h3>
                            <p>百位设计师任你挑选</p>
                        </div>
                         <div class="text item" style="border-bottom:none">
                            <div class="bg bg3"></div>
                            <h3>装修保障</h3>
                            <p>极速修专业售后维修队</p>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12" class="footerbanner">
                     <el-carousel :interval="3000" arrow="hover" autoplay>
                        <el-carousel-item v-for="item in bannerlist" :key="item.id" v-if="item.adress=='indexfooter'">
                        <img :src="item.banner_img" alt="出错了">
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :span="6">
                    <div class="footerright">
                        <span class="sp1">预约装修服务</span>
                        <span class="sp2">预约 最新 活动 <font style="color:#ff552e">全免费</font></span>
                        <span class="sp3"><input type="text" placeholder="您的房屋面积"></span>
                        <span class="sp4"><input type="text" placeholder="您的电话"></span>
                        <span class="doub">
                                <select>
                                    <option value="1">预约量房验房</option>
                                    <option value="2">预约设计方案</option>
                                    <option value="3">预约到店参观</option>
                                    <option value="4">预约参观工地</option>
                                    <option value="5">预约装修贷款</option>
                                    <option value="6">预约最新活动</option>
                                </select>
                                <input type="text" placeholder="装修风格" class="inputs">
                        </span>
                        <span class="sp5"><input type="button" value="立即免费申请"></span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="title01 ">
            <img src="../../assets/images/h2title.png">
        </div>
         <div class="title01 ss">
            <div class="subitem">
                <div class="subimg s1"></div>
                <span class="er">收房验房</span>
            </div>
            <div class="subitem">
                 <div class="subimg s2"></div>
                <span class="er">前期准备</span>
            </div>
            <div class="subitem">
                 <div class="subimg s3"></div>
                <span class="er">选装修公司</span>
            </div>
            <div class="subitem">
                 <div class="subimg s4"></div>
                <span class="er">设计阶段</span>
            </div>
            <div class="subitem">
                 <div class="subimg s5"></div>
                <span class="er">材料选购</span>
            </div>
            <div class="subitem">
                 <div class="subimg s6"></div>
                <span class="er">施工阶段</span>
            </div>
            <div class="subitem">
                 <div class="subimg s7"></div>
                <span class="er">竣工验收</span>
            </div>
            <div class="subitem">
                 <div class="subimg s8"></div>
                <span class="er">软装配饰</span>
            </div>
        </div>
</div>
</template>

<script>
import swiper from '../common/swiper.vue'
export default {
      data(){
        return {
            bannerlist:[],//存储轮播图片
            newslist:[],
        }
    },
    methods:{
        getBannerList(){
            var url = "http://127.0.0.1:4001/banner/banner"
            this.$http.get(url).then(res=>{
                this.bannerlist = res.data.data;
                 console.log(this.bannerlist)
            })
        },
        getNewsIndex(){
            var url = "http://127.0.0.1:4001/indexnews/indexnews"
            this.$http.get(url).then(res=>{
                 this.newslist = res.data.data;
            })
            
        }
    },
    created(){
        this.getBannerList()
        this.getNewsIndex()
    },
     components:{
     
     }
}
</script>

<style>
.s1{
     background-position: -2% -4% !important;
}
.s2{
     background-position: 12% -4% !important;
}
.s3{
     background-position: 27% -4% !important;
}
.s4{
     background-position: 39% -4% !important;
}
.s5{
     background-position: 53% -4% !important;
}
.s6{
     background-position: 69% -4% !important;
}
.s7{
     background-position: 84% -4% !important;
}
.s8{
     background-position: 100% -4% !important;
}
.er{
    display:block;
    width: 100%;
    font-size: 16px;
    height: 40px;
    line-height: 30px;
    color: #676767;
}
.subimg{
    display: block;
    width: 54px;
    height: 48px;
    margin: 30px auto 0 auto;
    background: url(http://www.bzzss.com/scltzs/simplebootx/Public/img/index_eg6.png) no-repeat;
}
.ss{
    display: flex;
    justify-content: space-around;
     text-align:center;
}
.subitem{
    width:140px;
    height:140px;
    border:1px solid #efefef;
}
.sp5 input[type=button]{
    background: #FF552E;
    color:#FFF;
    border:0;
}
.sp5 input[type=button]:hover{
    background: #F39943;
    cursor:pointer;
}
.sp2{
    color:#f1f1f1 !important;
    font-size:14px;
}
.sp1{
    font-size:26px !important;
    color:#fff !important;
    letter-spacing:4px !important;
    
}
.inputs{
     width:110px !important;
    
     border:0; 
}

.doub select{
    width:110px;
    height:40px;
    border:0;
    margin-right: 7px;
}
.footerright input{ 
    width:230px;
    height:40px;
}
.footerright{
    width:100%;
    background: #191b32;
    height:300px;
    text-align: center;
    display:flex;
    flex-direction:column;
}
.footerright span{
    margin:5px;
}
.el-card__body{
    height:240px
}
.footerbanner  .el-carousel__container{
    height:300px;  
    margin:0 10px; 
    }

    .text.item{
        position:relative;
        margin-top:5px;
        border-bottom:1px solid #f1f1f1;
    }
    .text.item h3,.text.item p{
        position:absolute;
        left:70px;
        top:10px;
    }
    .text.item h3{
        margin:0;
    }
    .text.item p{
        color: #bbb9b9;
        font-size: 13px;
        top:30px;
    }
    .el-card__header{
      height: 60px;
      padding:0;
    }
    .clearfix{
        padding: 0;
        line-height:60px;
        text-align: center;
        background: #191b32;
        color: #fff;
        font-size:13px;
    }
    .bg1{
        background-position: 1% 1% !important;
    }
    .bg2{
        background-position: 1% 43% !important;
    }
    .bg3{
        background-position: 1% 100% !important;
    }
    .bg{
        margin-right:10px;
        width: 60px;
        height: 60px;
        background: url(http://www.bzzss.com/scltzs/simplebootx/Public/img/index_eg1.png);
        background-repeat: no-repeat;
    }

    .newsright ul li a{
        position: absolute;
        top:0;
        left:10%;
    }
    .newsright ul li span{
        position: absolute;
        right:0px;
    }
    .newsright ul li {
    position: relative;
    top:0;
    font-size: 16px;
    line-height: 30px;
    }
    .bb_yinwen{
        position: absolute;
        font-size: 9px;
        color: #c6c6c6;
        right:30px;
        top:25px;
        letter-spacing: 2px;
        font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
    }
    .bb_xian {
        width: 460px;
        height: 1px;
        background-color: #c6c6c6;
        position:absolute;
        top:32px;
        left:125px;
    }
    .bb_title{
        height:65px;
        line-height:65px;
        color:#2c3e50;
        font-size: 20px;
        font-weight: bold;
    }
    .bb_yuan {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        border: 2px solid #da4242;
        float: left;
        margin-top: 28px;
        margin-right: 10px;
    }
 
    .newsrighttitle{
        position: relative;
    }
    .newsright {
        width: 780px;
        height: 229px;
        border: 1px solid #7e7e7e;
        padding: 0 23px;
    }
    .pdtop{
        padding-top:50px;
    }
    .newsxright p{
        font-size: 35px;
        color: #fff;
    }
    .newsxrights {
        border-bottom: 4px solid #FFF;
        line-height: 45px;
        margin: 15px auto;
        width: 110px;
    }
    .newsxright {
        width: 381px;
        height: 231px;
        padding-top: 50px;
        background: #191b32;
        text-align: center;
        font-size: 35px;
        color: #fff;
}
    .sub01>div>span{     
        position: absolute;
        bottom: 30px;
        right: 16px;
        padding: 0 35px;
        height: 38px;
        line-height: 38px;
        color: #fff;
        background: rgba(0,0,0,0.7);
        font-size: 16px;
        font-weight: bold;
    }
    .sub01>div:first-child:hover{
         box-shadow:none;
           cursor: default;
    }
    .sub01>div:hover{
        box-shadow: 10px 10px 10px #ccc;
        cursor:pointer
    }
    .img4{
        top:400px;
        left:845px;
        border:15px solid #fff;
    }
    .img3{
        top:70px;
        left:845px;
        border:15px solid #fff;
    }
    .img2{
        top:70px;
        left:350px;
        border:15px solid #fff;
    }
    .img1{
         top:70px;
         left:0px;
    }
    .sub01{
        position: relative;
    }
    .sub01>div{
        position: absolute;
    }
    .title01{
        width:1202px;
        margin:0 auto;
       
    }
    .title01>h1{
        font-size: 23px;
        margin:15px 0 0 0;
    }
    .title01>h3{
        font-size: 18px;
        margin:0 0 15px 0;
    }
    .title01 a{
        float:right
    }
    .sections{
        margin:0 auto;
        width:1202px;
    }
    .el-carousel__container{
    height:500px;   
    }
    .smcon{
        padding-top:0.5px;
        width:100%;
        background: #f1f1f1;
        border-bottom:1px solid #ccc;
        height:80px;
        box-sizing:border-box;
    }
    .smcon1{
        width:100%;
        height:731px;
        background: #e7e1e1;
    }
    
</style>
