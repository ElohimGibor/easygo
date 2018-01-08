<template>
	<div class="all">
		
		<img src="../assets/area-switch.jpg" class="i1" />
    <img src="../assets/easy.png" class="i2" />
    <p class="p0">Let's Go</p>
		<p class="p1" @click = "handleClickTw()">台湾</p>
    <p class="p2">韩国</p>
    <p class="p3">日本</p>
    <p class="p4" @click = "handleClickZg()">国内</p>
	</div>
</template>

<script>
document.documentElement.style.fontSize=window.innerWidth/375*100+"px";
console.log(document.documentElement.style.fontSize);
console.log(window.innerWidth);
import router from "@/router";
export default {

  name: 'choose',

  data () {
    return {
    	
    }
  },

  methods:{
    handleClickTw(){
      //js 实现路由跳转 ---> 编程式导航
      //
      //router.push(`/detail/${index}`); // /detail/
    
      router.push(`/tw`);
    },

    handleClickZg(){
      //js 实现路由跳转 ---> 编程式导航
      //
      //router.push(`/detail/${index}`); // /detail/
    
      router.push(`/home`);
    }
  }

}
</script>

<style lang="scss" scoped>

     *{
        margin:0px;
        padding:0px;
      }

      html,body{
        width:100%;
        height:100%;
        font-size: 16px;
        background: url(../assets/choose.png);
      }

      
      .all{
        background: url(../assets/choose.png);
        background-size: 100%;
        position: relative;
        
      }
     .i1{
     	width: 100%;
      height: 100%;

     }
     .i2{
      position: absolute;
      top: 1.12rem;
      left: 1.2rem;
      width: 1.35rem;
     }
     p{
      width:1.87rem;
      height:0.39rem;
      position: absolute;
     }
     .p0{
      font-size: 24px;
      z-index: 2;
      width:3.75rem;
      height: 0.37rem;
      position: absolute;
      top: 2.45rem;
      text-align: center;
     }
     .p1{
      background:#999697;
      text-align: center;
      line-height: 0.39rem;
      top: 2.96rem;
      left: 0.95rem;
      color:white;
     }

     .p2{
      background:#999697;
      text-align: center;
      line-height: 0.39rem;
      top: 3.52rem;
      left: 0.95rem;
      color:white;
     }

     .p3{
      background:#999697;
      text-align: center;
      line-height: 0.39rem;
      top: 4.11rem;
      left: 0.95rem;
      color:white;
     }

    .p4{
      background:#FA4558;
      text-align: center;
      line-height: 0.39rem;
      top: 4.88rem;
      left: 0.95rem;
      color:white;
     }

</style>

