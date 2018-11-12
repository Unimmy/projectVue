<template>
    <div class="container-fulids">
        <div class="containers">
            <div class="headdetail">
                <div class="det01">
                    <img :src="headlist.design_img" style="width:100px;height:100px">
                    <span class="det01sp1">     
                        <h3>{{headlist.title}}案例赏析</h3>
                        <span>岚庭设计师-{{headlist.design}}</span>
                        <ul>
                            <li><strong>地区</strong> ：四川成都市</li>
                            <li><strong>风格</strong> ：{{headlist.style}}</li>
                            <li><strong>户型</strong> ：{{headlist.type}} </li>
                            <li><strong>面积</strong> ：{{headlist.squer}}㎡ </li>
                        </ul>
                    </span>
                  <span class="det01sp"><font style='color:red'>{{headlist.like}}</font>个赞</span>
                </div>
                <div class="det02">
                    <div class="productsshowmainxia">在线咨询</div>
                    <div class="productsshowmainxiaz"><strong>设计理念：</strong>{{bodylist.idea}}</div>
                </div>
            </div>
        </div>
        <div class="containers">
            <!-- 左边 -->
            <div class="containersleft">
                <!-- 第一张图片 -->
                <div class="al_1"> 
                    <img :src="bodylist.imgurl_1" alt="" width="100%" height="100%"> 
                </div>
                <!-- 第二板块 -->
                <div class="al_2">
                     <div class="al_2_left">
                        <div style="background:url(http://www.bzzss.com/scltzs/simplebootx/Public/img/al_2.png)  top center #FFF;" class="al_2_left_img"> 
                          <div class="al_2_left_img_1"> 
                              <img :src="bodylist.imgurl_2" alt="" width="100%" height="100%"> 
                          </div> 
                        </div>
                     </div> 
                     <div class="al_2_ring"> 
                         <p style="font-size: 22px;color: #191b33;">案例构思</p> 
                         <div style="width: 40px;height: 3px;background-color: #d7b462;margin-top: 10px;"></div> 
                         <div class="al_2_ring_wz">
                            <p>{{bodylist.title_1}}</p> 
                        </div>      
                        <img src="http://www.bzzss.com/scltzs/simplebootx/Public/img/al_1.jpg" alt="" style="margin-top: 10px;"> 
                        <div class="al_2_ring_img_1"> 
                            <img :src="bodylist.imgurl_3" alt="" width="383px" height="250px"> 
                        </div>
                    </div> 
                </div>
                <!-- 第三板块 -->
                <div class="al_3">
                     <div style="width: 620px;height: 520px;border: 2px solid #f5f5f5;position: absolute;z-index: 1;"></div> 
                     <div class="al_3_left">
                          <p style="font-size: 22px;color: #191b33;">设计灵感</p>
                          <div style="width: 40px;height: 3px;background-color: #d7b462;margin-top: 10px;"></div> 
                          <div class="al_2_ring_wz"> 
                              <p style="margin: 5px 0px; color: rgb(0, 0, 0); font-family: sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">
                                  {{bodylist.title_2}}
                                  </p> 
                         </div> 
                         <img src="http://www.bzzss.com/scltzs/simplebootx/Public/img/al_1.jpg" alt="" style="margin-top: 10px;"> 
                         <div class="al_2_ring_img_1"> 
                             <img :src="bodylist.imgurl_4" alt="" width="419px" height="317px"> 
                        </div>
                    </div> 
                    <div class="al_3_ring"> 
                        <div style="margin-top: 45px;"> 
                            <img :src="bodylist.imgurl_5" alt="" width="383px" height="340px"> 
                        </div> 
                    <div style="margin-top: 20px;"> 
                        <img :src="bodylist.imgurl_6" alt="" width="383px" height="185px">
                    </div>
                    </div> 
                </div>
                <!-- 第四模块 -->
                <div class="case_bj">
                     <img src="http://www.bzzss.com//scltzs/simplebootx/Public/images/case_bj_1.jpg"> 
                    <form method="post" action="/api/guestbook/addmsg.html" id="casescontent">
                      <div class="inputcount"> 
                          <div class="left">
                            <img src="http://www.bzzss.com//scltzs/simplebootx/Public/images/case_bj_2.jpg">
                          </div> 
                          <div class="right">
                              <input name="full_name" type="text" placeholder="请输入您的称呼">
                          </div> 
                        </div> 
                      <div class="inputcount" style="margin-left:30px;"> 
                          <div class="left">
                              <img src="http://www.bzzss.com//scltzs/simplebootx/Public/images/case_bj_3.jpg">
                          </div> 
                          <div class="right">
                              <input type="text" name="phone" placeholder="请输入您的电话">
                          </div> 
                      </div>
                      <div class="inputcount"> 
                          <div class="left">
                              <img src="http://www.bzzss.com//scltzs/simplebootx/Public/images/case_bj_4.jpg">
                          </div> 
                        <div class="right">
                            <input type="text" name="mianji" placeholder="请输入您的面积">
                        </div> 
                      </div> 
                      <input type="hidden" name="title" value="金茂悦龙山-2704-案例内页报名"> 
                      <input type="submit" class="submit button casescontent" style="margin-left:30px;" value="立即获取报价"> 
                    </form> 
                </div>
            </div>
            <!-- 右边 -->
            <div class="containersright">
                <div class="right01">
                    <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/tu_27.jpg" style="width:205px;height:24px;margin-top:15px">
                    <p><input type="text"  placeholder="您的姓名"></p>
                    <p><input type="text"  placeholder="手机号码"></p>
                    <p><input type="text"  placeholder="房屋面积"></p>
                    <p><input type="button" value="提交"></p>
                </div>
                <div class="right02">
                    <div class="title">人气设计师</div>
                    <div class="mainzleftz"  v-for="(item,i) in desginers" :key="i">
                         <div class="mainzleft">
                             <a href="/design/158.html">
                             <img :src="item.headimg" width="70" height="70">
                             </a>
                        </div>
                         <div class="mainzright">
                             <a href="http://www.bzzss.com/scltzs/design/158.html">{{item.name}}</a>
                              <p><a href="http://www.bzzss.com/scltzs/design/article/do_like/tid/156.html" id="Addlike" class="action sharebtn like">
                              <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/arrow_ax2.png"> 有<strong class="count num">{{item.like}}</strong> 人喜欢</a></p>
                        </div> 
                    </div>
                </div>
                <div class="right03">
                    <div class="mainz"> 
                        <div class="title">大家都在看</div> 
                        <ul> 
                            <li v-for="(item,i) in newslist" :key="i">
                                <a href="/newshow/654.html" target="_blank">{{item.newstitle}}</a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
        <div class="containers">
            <div class="prodcutsshowmainxiarightxia">
                <div class="span">
                    <router-link to="/cases">查看更多&gt;</router-link>
                </div>
                <div class="title">热门推荐</div>
                 <ul>
                   <li v-for="(item,i) in jumplists" :key="i">
                        <img :src="item.img_url" width="276" height="216" @click="jump(item.did)">
                    </li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            headlist:[],
            bodylist:[],
            newslist:[],
            desginers:[],
            jumplists:[]
        }
    },
    methods:{
        // 从服务器获取头部的信息
        getdata(){
            var did=this.$route.params.did
            var url=`http://148.70.49.89:4001/cases/productsdetail?did=${did}`
            this.$http.get(url).then(res=>{
                this.headlist = res.data.data[0]
            }
          )
        },
        //从服务器获取body部分内容
        getbodydata(){
            var did=this.$route.params.did
            var url=`http://148.70.49.89:4001/details/details?did=${did}`
            this.$http.get(url).then(res=>{
            this.bodylist = res.data.data[0]
            }
          )
        },
        // 获取新闻列表
        getnews(){
            var url = "http://148.70.49.89:4001/indexnews/indexnews"
                this.$http.get(url).then(res=>{
                this.newslist = res.data.data.slice(0,4);
             })
        },
        //获取设计师
          getdesginers(){
            var url = "  http://148.70.49.89:4001/details/desginer"
                this.$http.get(url).then(res=>{
                this.desginers = res.data.data.slice(0,4);
             })
        },
        //获取四张跳转图
        getmore(){
              var url ="http://148.70.49.89:4001/cases/imgs"
                this.$http.get(url).then(res=>{
                this.jumplists = res.data.data
             })
        },
        // 跳转到其他页面
        jump(id){
            this.$router.replace({name:'detail',params:{did:id}})
        }
       
    },
    created(){
      this.getdata() 
      this.getbodydata()
      this.getnews()
      this.getdesginers()
      this.getmore()
    },
    watch: {
    '$route' (to, from) {
        this.$router.go(0);
    }
},
}
</script>

<style>
.container-fulids{
    box-sizing: border-box;
    width:100%;
    background: #f5f5f5;
}
.containers{
    padding:22px 0 0 21px;
    margin:0px auto;
    width:1202px;
    box-sizing: border-box;
    position: relative;
}
.headdetail{
    height:228px;
    width:1200px;
    border: 1px solid #e0e0e0;
    background: #fff;
}
.det01{
    height: 148px;
    border-bottom: 1px solid #e0e0e0;
    padding: 22px 0 0 21px;
    position: relative;
}
.det01sp{
    /* display:inline-block; */
    width: 122px;
    height: 36px;
    border: 1px solid #d1d1d1;
    border-radius: 20px;
    background: url(http://www.bzzss.com/scltzs/simplebootx/Public/images/arrow_ax1.png) 15px 10px no-repeat;
    text-indent: 47px;
    margin-right: 15px;
    margin-top: 70px;
    line-height: 36px;
    float:right;
    cursor: pointer;
}
.det01sp1{
    position: absolute;
    top:20px;
    left:137px;
}
.det01sp1 h3{
    font-size: 23px;
    color: #323232;
    margin-top: 0;
    margin-bottom:13px;
}
.det01sp1 span{
    font-size: 17px;
    color: #202020;
    display:inline-block;
    margin-bottom:17px;
}
.det01sp1 ul li{
    float:left;
    margin-right:35px;
    font-size: 14px;
}
.productsshowmainxia{
    width: 100px;
    height: 29px;
    background: #191b33;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    line-height: 29px;
    float: left;
    margin: 27px 0 0 22px;
}
.productsshowmainxiaz{
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    width: 720px;
    line-height: 23px;
    font-size: 13px;
    color: #2c3e50;
}
.containersleft{
    width:936px;
    height:2105px;
    box-sizing: border-box;
    margin:0;
    padding:22px;
    border:1px solid #dfdfdf;
    position: relative;
    background: #ffffff;
}
.containersright{
    width: 242px;
    height:906px;
    position: absolute;
    top:22px;
    right:-19px;
}
.right01{
    margin-bottom: 15px;
    width: 100%;
    border: 1px solid #dfdfdf;
    overflow: hidden;
    background: #fff;
    padding: 0 0 12px 17px
}
.right01 input{
    width: 203px;
    height: 34px;
    border: 1px solid #dddddd;
    text-indent: 10px;
    margin-top: 15px;
   
}
.right01 input[type=button]{
    line-height: 34px;
    border: none;
    background: #191b33;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.right02{
    width: 100%;
    border: 1px solid #dfdfdf;
    overflow: hidden;
    background: #fff;
    padding: 0 0 0 17px;
    margin-bottom: 15px;
}
.right02 .title{
    width: 240px;
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0;
}
.mainzleft{
    float: left;
}
.mainzright {
    margin-left: 15px;
    float: left;
    line-height: 30px;
    padding-top: 6px;
    font-size: 17px;
}
.mainzright p img{
    position:relative;
    top:4px;
}
.mainzright p a{
      font-size:14px;
     
}
.mainzleftz::after{
    content: "";
    display: block;
    clear:both;
}
.mainzleftz{
    margin-bottom: 25px;
  
}
.right03 .mainz{
    width: 240px;
    border: 1px solid #dfdfdf;
    overflow: hidden;
    background: #fff;
    padding: 0 0 0 17px;
    margin-bottom: 15px;
}
.right03 .mainz .title {
    width: 240px;
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0;
}
.right03 .mainz ul li {
    height: 43px;
    line-height: 43px;
    border-top: 1px solid #e5e5e5;
    width: 95%;
     overflow: hidden;
    text-overflow:ellipsis; 
}
.right03 .mainz ul li a{
    width:100%;
    font-size:13px;
}
.al_1 {
    width: 892px;
    height: 515px;
    margin:0 auto;
}
.al_2 {
    width: 892px;
    margin:0 auto;
    display: table;
    margin-top: 60px;
}
.al_2_left_img{
    background:url(http://www.bzzss.com/scltzs/simplebootx/Public/img/al_2.png) top center #FFF;
    height: 485px;
    width: 395px;
    float:left;
    position:relative;
    top:10px;
}
.al_2_left_img_1 {
    width: 420px;
    height: 500px;
    position: absolute;
    left: 20px;
    top:-36px;
}
.al_2_ring {
    width: 383px;
    margin-left: 70px;
    float: left;
    height: 508px;
    position: relative;
}
.al_2_ring_img_1 {
    position: absolute;
    bottom: 1px;
    z-index: 2;
}
.al_3 {
    width: 892px;
    margin: auto;
    display: table;
    margin-top: 50px;
    position: relative;
    height: 590px;
}
.al_3_ring {
    float: left;
    width: 383px;
    margin-left: 70px;
    position: relative;
    z-index: 2;
}
.al_3_left {
    float: left;
    width: 419px;
    margin-left: 20px;
    margin-top: 40px;
}
.case_bj {
    width: 887px;
    margin: 30px auto auto auto;
    overflow: hidden;
}
.case_bj form {
    margin-top: 15px;
}
.case_bj .inputcount {
    margin-bottom: 20px;
    float: left;
    width: 428px;
    height: 48px;
    line-height: 48px;
    border: 1px solid #101632;
    border-radius: 10px;
}
.case_bj .button {
    border: none;
    width: 428px;
    height: 50px;
    line-height: 50px;
    background: #101632;
    float: left;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    color: #fff;
}
.case_bj .inputcount .left {
    float: left;
    width: 60px;
    height: 42px;
    border-right: 1px solid #6b6b6b;
    margin-top: 2px;
    text-align: center;
    padding-top: 5px;
}
.case_bj .inputcount .right input {
    border: 0;
    font-size: 16px;
    color: #b2b0ae;
    outline: none;
    text-indent: 15px;
}
.prodcutsshowmainxiarightxia {
    background: #fff;
    margin-top: 20px;
    margin-bottom: 70px;
    padding: 8px 22px;
    width: 1197px;
    height: 314px;
    border: 1px solid #dfdfdf;
}
.prodcutsshowmainxiarightxia .span {
    float: right;
    height: 40px;
    line-height: 40px;
}
.prodcutsshowmainxiarightxia ul li {
    margin: 25px 0 0 10px;
    float: left;
}
.prodcutsshowmainxiarightxia .title {
    width: 72px;
    height: 40px;
    line-height: 40px;
    border-bottom: 4px solid #d7b462;
    font-size: 17px;
    font-weight: bold;
}
</style>
