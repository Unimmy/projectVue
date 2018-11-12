<template>
<div class="container-fulid">
        <div class="container-img"></div>
        <div class="con-is">
            <input type="text" class="con-input" placeholder="请输入作品名称" v-model="searchkey" @keyup.enter="searchinput">
            <button class="con-search" @click="searchinput"></button>
        </div>
        <div class="container nav-top">
            <ul>
                <div class="nav-left">
                    <p>风格:</p>
                </div>
                <div class="nav-right">
                  <li v-for="(item,i) in style" :key="i" @click="check(i)" :class="{'active':i==current}">{{item}}</li>
                </div>
                <div class="nav-left">
                    <p>面积:</p>
                    </div>
                <div class="nav-right">
                    <li v-for="(item,i) in squer" :key="i"  @click="checks(i)" :class="{'active':i==current1}">{{item}}</li>
                </div>
                <div class="nav-left">
                    <p>户型:</p>
                </div>
                <div class="nav-right">
                  <li v-for="(item,i) in type" :key="i"  @click="checka(i)" :class="{'active':i==current2}">{{item}}</li>
                </div>
            </ul>
        </div>
        <h3>为您找到{{detalist.total}}个装修样板间</h3>
        <div class="container d-flex">
            <div class="demos" v-for="(item,index) in detalist.data" :key="index" @click="jumptodetail(item.did)">
                <img :src="item.img_url" alt="">
                <div class="demos-detail">
                    <span>{{item.title}}</span>
                    <p>{{item.style}} |{{item.type}} | {{item.squer}}㎡ </p>
                    <img v-if="item.design_img" :src="item.design_img" style="width:40px;height:40px; position:absolute;top:310px;right:10px"/>
                </div>
                <div class=demos-foot>
                    <span>设计师:{{item.design}}</span>
                    <span> <img src="http://www.bzzss.com/scltzs/simplebootx/Public/images/arrow_ax1.png" style="width:23px;height:19px;">{{item.like}}个赞</span>
                </div>   
            </div>
        </div>
        <div class="container ">
            <ul class="jumppage">
                <li @click="jumptoleft" :class="current3<=0?'nodisplay':''">&lt;</li>
                <li v-for="(item,i) in  detalist.pageCount" :key="i" @click="checkm(i)" :class="{'checked':i==current3}">{{item}}</li>
                <li @click="jumptoright" :class="current3>=detalist.pageCount-1?'nodisplay':''">&gt;</li>
            </ul>
        </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            searchkey:'',
            current:0,
            current1:0,
            current2:0,
            current3:0,
            pno:1,
            keywords:'', 
            keywords1:'',
            keywords2:'',
            style:["全部风格","简美风格","小美式风格","藏式风格","韩式风格","后现代风格","工业风格","极简风格","现代简约","中式风格"],
            squer:["全部面积","60m²以下","60-80","80-100","100-120","120-150","150-200","200m²以上"],
            type:["全部户型","错层","平层","一居","两居","三居","四居","五居","跃层","复式","别墅","其他"],
            detalist:[],
            canmove:false
        }
    },
    methods:{
        searchinput(){
            var url = `http://148.70.49.89:4001/cases/cases?title=${this.searchkey}&pno=${this.pno}`
            this.$http.get(url).then(res=>{
                 this.detalist=res.data
            })
        },
        check(index){
            this.current=index;
            this.keywords=this.style[index] 
            var url = `http://148.70.49.89:4001/cases/cases?pno=${this.pno}&keywords=${this.keywords}`
            this.$http.get(url).then(res=>{
                    this.detalist=res.data
                   
            })
        },
         checks(index){
            this.current1=index;
             this.keywords1=this.squer[index]
               var url = `http://148.70.49.89:4001/cases/cases?pno=${this.pno}&keywords=${this.keywords}&keywords1=${this.keywords1}`
            this.$http.get(url).then(res=>{
                    this.detalist=res.data
            })
        },
         checka(index){
            this.current2=index;
            this.keywords2=this.type[index]
            var url = `http://148.70.49.89:4001/cases/cases?pno=${this.pno}&keywords=${this.keywords}&keywords1=${this.keywords1}&keywords2=${this.keywords2}`
            this.$http.get(url).then(res=>{
                    this.detalist=res.data
            })
        },
          checkm(index){
            this.current3=index;
            this.pno=this.current3+1
            var url = `http://148.70.49.89:4001/cases/cases?pno=${this.pno}&keywords=${this.keywords}&keywords1=${this.keywords1}&title=${this.searchkey}&keywords2=${this.keywords2}`
            this.$http.get(url).then(res=>{
            this.detalist=res.data
            })
            },
          //分页左移
          jumptoleft(){
               this.pno--
              this.current3=--this.current3
              if(this.current3<0){
                this.current3=0;
                this.pno=0
              }
               
            var url = `http://148.70.49.89:4001/cases/cases?title=${this.searchkey}&pno=${this.pno}&keywords=${this.keywords}&keywords1=${this.keywords1}&keywords2=${this.keywords2}`
            this.$http.get(url).then(res=>{
                    this.detalist=res.data
            })
          },  
          //分页右移
           jumptoright(){
                 this.pno++
              this.current3=++this.current3
                var num=this.detalist.pageCount
               if(this.current3>num-1){
                    this.current3=num-1
                    this.pno=num-1
                    } 
                  
            var url = `http://148.70.49.89:4001/cases/cases?title=${this.searchkey}&pno=${this.pno}&keywords=${this.keywords}&keywords1=${this.keywords1}&keywords2=${this.keywords2}`
            this.$http.get(url).then(res=>{
            this.detalist=res.data 
        })
    },
    jumptodetail(did){
        this.$router.replace({name:'detail',params:{did:did}})
    }            
},
created(){ 
        this.checka(0)
    }

}
</script>

<style>
.nodisplay{
    display:none
}
.container-fulid{
    position:relative;
    width:100%;
    text-align: center;
    background:#f5f5f5;
}
.container{
    width:1202px;
    margin:0 auto;
}
.container-img{
    width: 100%;
    height: 370px;
    background: url(http://www.bzzss.com/data/upload/20170329/58db56cca3e35.jpg) center center no-repeat;
   
}
.con-search{
    width:67px;
    height:35px;
    background: url(http://www.bzzss.com/scltzs/simplebootx/Public/images/tu_19.jpg) no-repeat;
    border:0 !important;
    margin:0;
    float:right;
    outline: none;
    cursor: pointer;
}
.con-input{
    width: 391px;
    height: 35px;   
    border: none;
    line-height: 35px;
    text-indent: 20px;
    background: rgba(255,255,255,0.1);
    color: #323232;
    outline: none;
}
.con-is{
    position: absolute;
    top:131px;
    left:50%;
    margin-left:-229px;
    border:2px solid #fff;
}
.nav-top{
    background: #fff;
    position: relative;
    top:-89px; 
    left:50%;
    margin-left:-601px;
    color: #323232;
    font-weight: bold;
    font-size:13px;
}
.nav-top::after{
    content:"";
    display:block;
    clear:both
}
.nav-left{
    border-right:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    width: 10%;
    height:54px;
    float: left;
}
.nav-left p{
    margin-top:20px;
    font-size:13px;
}
.nav-right{
    width:90%;
    height:54px;
    border-bottom:1px solid #d9d9d9;
    display: flex;
    flex-wrap:wrap;
    
}
.nav-right li{
    height:37px;
    line-height:37px;
    font-weight: normal;
    margin:10px;
    padding-left: 5px;
    padding-right: 5px;
    cursor:pointer;
}
.nav-right li:hover{
   outline:1px solid #000;
  
}
/* li的激活状态 */
.active{
    background: #000;
    color:#fff;
}
.container h3{
    text-align: center;
}
.d-flex{
    display:flex;
    flex-wrap:wrap;
}
.demos{
    width:381px;
    height:425px;
    background: #fff;
    margin:9px;
    position: relative;
    cursor:pointer
}
.demos:hover{
    box-shadow: 5px 5px 5px #ddd;
}
.demos img{width:100%}
.demos-detail{
    margin:10px;
    border-bottom: 1px dashed #e4e4e4;
    text-align:left;
    font-weight: bold;
    font-size: 13px;
}
.demos-detail p{
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 13px;
}
.demos-foot{
    margin:10px;
    text-align: left;
    font-weight: bold;
    font-size: 13px;
    position: relative;
    margin:10px;
}
.demos-foot span:last-child{
    position:absolute;
    top:10px;
    right:10px
}
.jumppage{
display: flex;
justify-content: center;
width:100%;
}
.jumppage li{
    width:30px;
    height:30px;
    line-height:30px;
    background: #ffffff;
    color: #6B6B6B;
    margin: 0 10px 0 0;
    border: #ddd 1px solid;
    cursor: pointer;
}
.checked{
    font-weight: bold;
    color: #FFF !important;
    background: #A9A9A9 !important;
}
</style>
