<template>
	<div>
    <section>
      <navbar></navbar>
      <ul class="u1">
        <li v-for="data in looplist">
        <img :src="data.img"/>
        </li>
      </ul>
      
        <div class="nav">
          <img src="../assets/playtw.png" class="img1" @click="handleClickTw()"/>
          <img src="../assets/list.png" class="img2" @click="handleClickList()"/>
          <img src="../assets/bag.png" class="img3" @click="handleClickBag()"/>
          <img src="../assets/buy.png" class="img4" @click="handleClickBuy()"/>
        </div>
      
      <ul class="u2">
        <li v-for="data in datalist">
          <img :src="data.img"/>
        </li>
      </ul>

      <!-- 20.7 -->
      <!-- <img src="../assets/hot.png" > -->
      <p class="hot">人气精选</p> 

      <ul class="u3">
         <li v-for="data in hotdatalist">
           <img :src="data.img"/>
           <p class="p1">{{ data.name }}</p>
           <p class="p2" >{{ "¥" + data.price + ".00"}}</p>
           <p class="p3" >{{ data.deliveryMode }}</p>
         </li>
       </ul> 
    </section>
  </div>
</template>

<script>
document.documentElement.style.fontSize=window.innerWidth/375*100+"px";
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

import axios from "axios";
import { Indicator } from 'mint-ui';

import navbar from "@/components/common/navbar";
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);
import router from "@/router";
export default {

  name: 'home',

  data () {
    return {
      datalist:[],
      looplist:[],
      hotdatalist:[]
    }
  },

  methods:{
    handleClickLeft(){
      //js 实现路由跳转 ---> 编程式导航
      //
      //router.push(`/detail/${index}`); // /detail/
    
      router.push(`/choose`);
    },

    handleClickTw(){
      router.push(`/list`);
    },

    handleClickList(){
      router.push(`/list`);
    },

    handleClickBag(){
      router.push(`/list`);
    },

    handleClickBuy(){
      router.push(`/list`);
    }
  },


  mounted (){
  	//数据请求
  	//https://m.maizuo.com/v4/api/billboard/home?__t=1514532132963
    
    Indicator.open('加载中...');
    axios.post("/igoeasy/home/data","platform=all&area=cn&version=1.0.1&sign=68ed3705fcec2bc6487b16e52159ae49").then(res=>{
       // 后端响应数据的位置
      this.looplist = res.data.result.activityList;

      Indicator.close();
    })

    
    axios.post("/igoeasy/home/data","platform=all&area=cn&version=1.0.1&sign=68ed3705fcec2bc6487b16e52159ae49").then(res=>{
       // 后端响应数据的位置
      this.datalist = res.data.result.themeList;

      Indicator.close();
    })

    axios.post("/igoeasy/home/data","platform=all&area=cn&version=1.0.1&sign=68ed3705fcec2bc6487b16e52159ae49").then(res=>{
       // 后端响应数据的位置
      this.hotdatalist = res.data.result.goodsHotList;
      // console.log(res.data.result.goodsHotList);
      Indicator.close();
    })


    //
    // Promise.all([axios.get("/v4/api/billboard/home?__t=1514532132963"),
    //   axios.get("/v4/api/film/now-playing?__t=1514533608807&page=1&count=5")
    //   ]).then(res=>{
    //   console.log(res);
    // })
  },
  components:{
    "swipe":Swipe,
    "swipe-item":SwipeItem,
    "navbar":navbar,
  }
}
</script>


<style lang="scss" scoped>
  .hot{
    width: 1rem;
    height: 0.26rem;
    font-size: 14px;
    margin-left:1.6rem;
    margin-bottom: 0.1rem;
  }

  .u1{
    li{
      padding-bottom:0.1rem;
      // width: 100%;
      img{
        width: 100%;
      }
    }
  }

  .u2{
    li{
      padding-bottom:0.1rem;
      // height:266px;
      // width: 100%;
      img{
        width: 100%;
      }
    }
  }

  .u3{
    background:#FAF1F6;
      li{
        width: 100%;
        height:1.45rem;
        position: relative;
        margin-bottom: 0.1rem;
        img{
          width:1.45rem;
          margin-left: 0.05rem;
        }
      }

      .p1{
        position: absolute;
        top:0.2rem;
        left:1.7rem;
        color:#3D4245;
        font-size: 14px;
      }
      .p2{
        position: absolute;
        top:0.75rem;
        left:1.7rem;
        color:#3D4245;
        font-size: 14px;
        font-weight: bold;
      }
      .p3{
        width:0.78rem;
        height:0.21rem;
        position: absolute;
        top:1rem;
        left:1.7rem;
        color:white;
        background:#FC909D;
        font-size: 14px;
        text-align:center;
      }
      

  }


  .nav{
    width:100%;
    height:0.9rem;
    position: relative;
    // background:#0ff;
    .img1{
      position: absolute;
      top:0.06rem;
      left: 0.26rem;
    }
    .img2{
      position: absolute;
      top:0.06rem;
      left: 1.19rem;
    }
    .img3{
      position: absolute;
      top:0.06rem;
      left: 2.13rem;
    }
    .img4{
      position: absolute;
      top:0.06rem;
      left: 3rem;
    }

  }

  .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;

  img{
    width: 100%;
  }


}


</style>

<style  lang="scss">

.active{
  background-color: red;
}

*{
  margin:0px;
  padding:0px;
}

html,body{
  width:100%;
  height:100%;
  font-size: 16px;
}

li{
  list-style: none;
}

section{
  position:relative;
  top:0.5rem;
}

</style>