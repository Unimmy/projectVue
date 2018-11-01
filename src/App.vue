<template>
  <div id="app">
    <header class="nav-one">
      <span><img src="./assets/icons/top_arrow.png">房屋所在城市 <a href="#" class="arotate" style="">成都<img src="./assets/icons/top_city_arrow.png" alt="小三角"  class="angle"></a></span>
      <span>欢迎来到岚庭家居</span>
      <span>免费咨询热线：028-86660817</span>
      <span class="wx_hover">
        <img src="./assets/icons/top_wx_arrow.png" alt="微信小图标">微信公众号
        <img src="./assets/images/5b2326193ad86.jpg" alt="微信二维码" class="wx_ewm">
      </span>
    </header>
    <div class="nav-two" :class="{'flexd': fixed}" >
      <div class="center">
        <img src="./assets/images/logo.png">
        <div class="nav-a">
          <ul>
            <li>
              <a href="#" class="firsta" @click="jumptoindex">网站首页</a>
            </li>
            <li>
              <a href="#"  class="senda">整装产品</a>
              <div class="fixeddiv" :class="{'fixeddivs':fixed}">
                    <div class="fixedcon">
                        <a href="#"><img src="./assets/images/cctv_1.png" alt="出错了"><p class="pstyle" >智选整装</p></a>
                        <a href="#"><img src="./assets/images/cctv_2.png" alt="出错了"><p class="pstyle" >精品整装</p></a>
                        <a href="#"><img src="./assets/images/cctv_3.png" alt="出错了"><p class="pstyle" >软装家居</p></a>
                    </div>
              </div>
            </li>
            <li>
              <a href="#" class="senda" @click="jumptocases">装修案例</a>
                <div class="fixeddiv" :class="{'fixeddivs':fixed}">
                    <div class="fixedcon">
                        <a href="#"><img src="./assets/images/vr.jpg" alt=""><p class="pstyle">3D案列</p></a>
                        <a href="#"><img src="./assets/images/jd.jpg" alt=""><p class="pstyle">家装案列</p></a>
                        <a href="#"><img src="./assets/images/zp.jpg" alt=""><p class="pstyle">精选作品</p></a>
                    </div>
              </div>
            </li>
            <li>
              <a href="#" class="senda">设计团队</a>
            </li>
            <li>
              <a href="#" class="senda">工程体系</a>
                <div class="fixeddiv" :class="{'fixeddivs':fixed}">
                    <div class="fixedcon" >
                        <a href="#"><img src="./assets/images/cctv_1_1.png" alt=""><p class="pstyle">工程体系</p></a>
                        <a href="#"><img src="./assets/images/cctv_2_2.png" alt=""><p class="pstyle">产业工人体制</p></a>
                    </div>
              </div>
            </li>
            <li><a href="#" class="senda">公司周刊</a></li>
            <li><a href="#" class="senda">品牌探索</a></li>
            <li><a href="#" class="senda">岚庭党建</a></li>
          </ul>
        </div>
      </div>
   
    </div>
    <router-view></router-view>
     <footer class="nav-three">
        <div class="nav-fd" v-if="displays">
            <ul >
                <li>友情链接:</li>
                <li><a href="#">成都家装公司</a></li>
                <li><a href="#">成都品牌装修公司</a></li>
                <li><a href="#">广州办公室装修</a></li>
                <li><a href="#">蜀ICP备14028751号</a></li>
            </ul>
        </div>
        <div class="foot-con">
            <div class="foot-con-text">
                岚庭家居追求家装品质，任达华倾情代言，好服务，透明装！
                <span><img src="http://www.scltzs.cn/scltzs/simplebootx/Public/images/tu_8.jpg" alt="在线咨询">
                <a href="#" style="color:#ab3431;">在线咨询</a> </span> 
                <span><img src="http://www.scltzs.cn/scltzs/simplebootx/Public/images/tu_9.jpg" alt="qq咨询">
                <a href="#" style="color:#ab3431 ">QQ咨询</a></span> 
            </div>
            <div class="zhong">
                <div class="zhons"> 
                    <div class="zhong1">
                    <img src="http://www.scltzs.cn/scltzs/simplebootx/Public/images/dl_1.png" alt="" style="margin-top:30px">
                       <img src="http://www.scltzs.cn/scltzs/simplebootx/Public/images/dl_2.png" alt="出错了">
                       <span class="zhong1text">
                            好服务 · 透明装 岚庭V+整装
                       </span>
                       <div class="ljlx">立即联系</div>
                    </div>
                    <div class="zhong2">
                        <ul>
                            <li><a href="#">官方微博</a></li>
                            <li><a href="#">关于我们</a></li>
                            <li><a href="#">公司荣誉</a></li>
                        </ul>
                    </div>
                    <div class="zhong3">
                        <ul>
                            <li><a href="#">装修服务</a></li>
                            <li><a href="#">在线咨询</a></li>
                            <li><a href="#">预约设计</a></li>
                            <li><a href="#">家装优惠</a></li>
                            <li><a href="#">免费家装报价</a></li>
                        </ul>
                    </div>
                    <div class="zhong4">
                        <ul> 
                            <li>家装咨询：028-86637822</li> 
                            <li>投诉建议：4001661110</li> 
                            <li>公司地址：成都市金牛区花牌坊街319号<br>岚庭总部大楼1-5层</li> 
                            <li><a href="#" target="_blank">查看店面地址&gt;&gt;</a></li> 
                        </ul>
                    </div>
                    <div class="zhong5">
                            <ul style="border:none;"> 
                                <div class="wx">
                                    <img src="http://oncrbykag.bkt.clouddn.com/20180307/5a9f9f12bc471.jpg">装修报价</div> 
                                <div class="wx">
                                    <img src="http://oncrbykag.bkt.clouddn.com/20170507/590ecdd0989b8.jpg">微信公众号</div>
                                </ul>
                    </div>
                </div>      
            </div>
            <div class="bottom">
                <div class="bottommain">Copyright ©2010-2018四川成都岚庭装饰公司 <br>版权所有</div> 
            </div> 
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      fixed:false,
      ishide:false,
      displays:true
    }
  },
   mounted () { 
     window.addEventListener('scroll', this.handleScroll)},
     methods: { 
         jumptoindex(){
             this.$router.push({path:"index"})
         },
      handleScroll () { 
          var height=window.scrollY;
          if(height>77){
            this.fixed=true;
          }
          if(height<=77){
            this.fixed=false
          }
          } ,
            jumptocases(e){
            e.preventDefault();
            this.$router.push({path:'cases'})}
        },
}
</script>

<style>
.flexd{
  width:100%;
  position: fixed;
  top:0px;
  z-index:9999
}
body{
 margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  padding:0;
  width: 100%;
}
*{
  box-sizing: border-box;
}
a,p,b,ul,li,u,ol,i{
  list-style: none;
  margin:0;
  padding:0;
  text-decoration: none;
  color:#000;
  font-size:16px;
}
footer a,footer ul,footer li{
  color:#cacaca;
   font-size: 14px;
}
.nav-one{
  box-sizing: border-box;
  background: #000;
  width:100%;
  height:42px;
  color:#f1f1f1;
  line-height: 42px;
}
.nav-one span:nth-child(1){
  margin-left:20%;
}
.nav-one span:nth-child(2){
  margin-left:30%;
}
.nav-one span:nth-child(3){
   margin-left:3%;
}
.nav-one span:nth-child(4){
  margin:3%;
  position: relative;
  cursor:pointer;
}
.wx_ewm{
  position: absolute;
  top:30px;
  left:-5px;
  display:none;
}
.wx_hover:hover .wx_ewm{
  z-index: 9999;
  display: block;
}
.angle{
  margin-left:10px;
  transition: all 0.2s linear;
}
.arotate:hover .angle{
  transform: rotate(180deg)
}
.arotate{
  text-decoration:none;
  font-size:18px;
  color:#f1f1f1;
}
.nav-two{
  background: #ffffff;

}
.center{
  width:1263px;
  height:60px;
  margin:0 auto;
  line-height:60px;
  position: relative;
}
.center>img{
  margin-top:5px;
}
.nav-a{
  display:inline-block;
}
.nav-a>ul{
  width:860px;
  position:absolute;
  right:-170px;
  top:0px;
  display: flex;
  justify-content: space-around;
}
.nav-a>ul>li>a{
  display: inline-block;
  font-weight: bold;
  width:94px;
  text-align: center;
  position:relative;
}
.nav-a .senda::after,.nav-a .firsta::after{
    left:50%;
    content: '';
    display: block;
    width: 0px;
    height: 5px;
    position: absolute;
    bottom: 0px;
    background: #191b32;
    transition: all 0.5s ease-in-out;
}
.firsta::after{
  width: 100% !important ;
  left: 0 !important;
}
.nav-a>ul>li:hover .senda::after{
  width:100%;
  left:0;
}
.fixeddivs{
  top:60px !important;
}
.fixeddiv{
  width:100%;
  height:0px;
  position: fixed;
  top:102px;
  left:0px;
  background: rgba(222,222,222,.7);
  overflow: hidden;
  transition: all 0.5s linear;
}
.nav-a>ul>li:hover .fixeddiv{
  height: 300px;
  z-index:9999;
}
.fixedcon{
  width:1360px;
  height:250px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.fixedcon>a{
  height:158px ;
  display:block;
  margin:0 40px 0 40px;
}
.fixedcon>a:hover{
  box-shadow:5px 5px 5px #000;
}
.pstyle{
  font-weight:bold;
  font-size:20px;
  text-align:center;
}
/* footercss */
.nav-three{
    width:100%;
    height:365.5px;
}
.nav-fd{
    margin: 0 auto ;
    height: 50px;
    width:1202px;
    line-height: 50px;
}
.nav-fd>ul>li{
    display: inline-block;
    padding: 5px;
}
.nav-fd>ul>li>a{
    color: #777777;
}
.foot-con{
    margin: 0 auto ;
    width: 100%;
    border:1px solid #000;
    background: #262626;
}
.foot-con-text{
    margin: 0 auto ;
    width:1202px;
    height: 35px;
    line-height: 35px; 
    color: #acacac;
}
.foot-con-text>span{
    float:right;
    margin-right: 10px;
}
.foot-con-text>span>img{
    box-sizing: border-box;
    vertical-align: text-bottom;
}
.zhong{
background: #333333;
height: 194px;
overflow: hidden;
width:100%;
}
.zhons{
    height: 194px;
    margin: 0 auto;
    width: 1202px;
    display: flex;
    flex-wrap: wrap;
}
.zhong1,.zhong2,.zhong3,.zhong4,.zhong5{
  
    text-align: center;
    color:#acacac;
    font-size:14px;
}
.zhong1{
    width: 169px;
    padding: 0;
}
.zhong1text{
font-size: 13px;
color: #acacac
}
.ljlx{
width: 107px;
height: 30px;
margin: auto;
margin-top: auto;
font-size: 14px;
color: #ffffff;
border: 1px solid #fff;
text-align: center;
line-height: 28px;
margin-top: 10px;
}
.ljlx:hover{
    background: #222078;
    cursor:pointer;
}
.zhong2{
    width: 172px;
   
}
.zhong2>ul{
    border-right:1px solid #464646;
}
.zhong2>ul li{
    height:29px;
    line-height: 29px;
} 
.zhong2>ul>li:first-child{
    margin:20px;
}
.zhong3{
    width: 198px;
   }
.zhong3>ul{
    border-right:1px solid #464646;
}
.zhong3>ul li{
    height:29px;
    line-height: 29px;
} 
.zhong3>ul>li:first-child{
    margin:20px;
}
.zhong3>ul>li:last-child{
    margin-left:28px;
}
.zhong4{
    width: 350px;
    text-align: left;
}
.zhong4>ul{
    border-right:1px solid #464646;
    margin:20px 0px 0px 65px;
}
.zhong4>ul li{
    height:29px;
    line-height: 29px;
} 
.zhong4>ul li:nth-child(3){
    height:58px;
    line-height: 29px;
} 
.zhong5{
    width: 310px;
}
.zhong5 ul{
    margin-top:20px;
}
.wx{
float: left;
width: 106px;
text-align: center;
line-height: 30px;
margin-left: 30px;
margin-right: 10px;
color: #a0a0a0;
}
.bottom{
width: 100%;
clear: both;
background: #262626;
}
.bottommain {
    width: 1202px;
    height: 90px;
    padding-top: 15px;
    font-size: 13px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    color: #9b9b9b;
}
</style>
