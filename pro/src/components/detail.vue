<template>
  <div v-if="detailinfo">
     
    <navbar></navbar>
    <swipe class="my-swipe" :auto="0" :showIndicators="false">
      <swipe-item v-for="(data,id) in detailinfo" :key="data.id">
         <img :src="'http://image.buoumall.com/'+data.picture">
         <p>{{data.detail}}</p>
    </swipe-item>
   </swipe>
   <div class="md"></div>
   <div class="middle">   &nbsp;&nbsp;搭配商品</div>

      <ul>
        <li v-for="(data,id) in tableinfo" :key="data.id">
              <aside>
          <img :src="'http://image.buoumall.com/'+data.listPic">
              </aside>
          <span>{{data.name}}</span>
          <article>
            ￥{{data.price}}
          </article>
          <div class="buy" @click="handldClickBuy">立即购买
              
          </div>


        </li>
      </ul>
      
    </swipe>
            
    <div class="add" v-show="isShow" v-for="(data,id) in tableinfo" :key="data.id">
      <div class="up">
      <p class="p1">数量</p>
      <el-input-number size="mini" v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" class="upadd"></el-input-number>
      <!-- <p class="p2">库存:</p>
      <span class="s1">30</span> -->
      </div>

      <div class="down">
        <p class="p1">总计</p>
        <button type="text" class="b1">取消</button>
        <button type="text" class="b2">加入购物袋</button>
        <p class="p2">￥{{data.price}}</p>
      </div>
    </div>
      
    
      
  </div>
</template>

<script>
document.documentElement.style.fontSize=window.innerWidth/375*100+"px";

require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios";
import Vue from "vue";
import { Indicator } from 'mint-ui';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
import navbar from "@/components/common/navbar";

export default {

  name: 'detail',

  data () {
    return {
    detailinfo:[],
    tableinfo:[],
    kucun:[],
    num1:1,
    isShow:false 
   
    }
  },

  methods:{
    handldClickBuy:function(){
      this.isShow = !this.isShow;
      
    },
    handleChange(value){
      console.log(value);
    }
  },
  mounted () {

    console.log(this.$route.params.id);

    axios.post('/look/detail',`memberToken=&lookId=${this.$route.params.id}`)
    .then(res=>{
      console.log(res.data.data.lookDetails)
      this.detailinfo = res.data.data.lookDetails;
      

  }) 

    axios.post('/look/detail',`memberToken=&lookId=${this.$route.params.id}`)
  .then(res=>{

      console.log(res.data.data.linkList)
      this.tableinfo = res.data.data.linkList;

  }) 

    //  axios.post("/igoeasy/goods/detail","platform=all&id=4551&token=38e44c4bfe4178fc1f32e517a64e9592773d676a5f8c5bf7526f57ca4f54a74160d692a604f37269f870b5a8b2b15504b55bc609844d4f04&area=cn&version=1.0.1&sign=460c4ec1974ce8cea32a41fe121baed5").then(res=>{
    //    // 后端响应数据的位置
    //   this.kucun = res.data.result.inventory;
    //   console.log(res.data.result);
      
    // })


  },
  components:{
    
    "navbar":navbar
  }
 
}


</script>



<style lang="css" scoped>
img{
  display: block;
  vertical-align: middle;
	width: 100%;
  border:0;
}
*{
  padding:0;
  margin:0;
  font-size: 16px;
}
.my-swipe{
  margin-top: 50px;
  overflow: hidden;
  height: 6rem;
  text-align: center;
}
ul{
  margin-top: 5px;

}
.middle{
  border-radius: 2px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  letter-spacing: 4px;
  font-weight: bold;
 line-height: 40px; 
}
span{
  display: inline-block;
  margin-left: 20px;
  margin-top: 2%;
 height: 40px;
 line-height: 40px;
}
aside{

  height: 150px;
  line-height: 150px;
  width: 110px;
  float: left;
}
aside img{
  margin-top: 10%;
   border-radius: 5px;
}
li{
  position: relative;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 170px;
}
p{
  margin-top: 20px;
}
article{
  position: absolute;
  bottom: 10%;
  left: 35%;
  color: red;
}
.buy{
  position: absolute;
  bottom: 10%;
  right: 5%;
  border-radius: 5px;
  background-color: #efb3a9;
  color: #fff;
  width: 25%;
  height:20%;
  line-height:32px;
  text-align: center;
}
.md{
  background-color: #ccc;
  width: 100%;
  height: 10px;
}

.add{
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  background-color: #0ff;
}

.up{
  width: 100%;
  height: 0.7rem;
  background-color: white;
  overflow: hidden;
  border-bottom: 1px solid #ccc;  
}
.up .p1{
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  width: 0.5rem;
}
.up .upadd {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
}
.up .p2{
  margin-left: 2.9rem;
  margin-top: 0.1rem;
  font-size: 14px;
  color: #C5C5C5;
}
.up .s1{
  width: 0.3rem;
  height: 0.2rem;
  background: white;
  position: absolute;
  top: 0.33rem;
  right: 0.2rem;
  font-size: 16px;
  color: #C5C5C5;
  text-align: center;
  line-height: 0.2rem;
}

.down{
  width: 100%;
  height: 0.8rem;
  background-color: white;
  overflow: hidden;  
  position: relative;
}
.down .p1{
  width: 0.5rem;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
.down .p2{
  position: absolute;
  margin-top: 0;   
  width: 0.6rem;
  top: 0.1rem;
  left: 0.55rem;
  font-size: 18px;
  color: red;
}
.down .b1{
  border: 0;
  width: 1.3rem;
  height: 0.35rem;
  background: #B3B3B3;
  border-radius: 5px;
  text-align: center;
  line-height: 0.3rem;
  color: white;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
.down .b2{
  border: 0;
  width: 2rem;
  height: 0.35rem;
  background: #F45C5B;
  border-radius: 5px;
  text-align: center;
  line-height: 0.3rem;
  color: white;
  margin-left: 0.1rem;
}
</style>
