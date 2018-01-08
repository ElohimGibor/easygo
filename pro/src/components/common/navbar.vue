<template>
	<nav>
		<div class="left">
			<!-- <i class="iconfont icon-category" @click="handleClick()"></i> -->
			<slot></slot>
			<span @click="handleClickLeft()">国内<span class="el-icon-arrow-down"></span></span>
			
		</div>

		<div class="con">
			<input type="text" name="" value="商品搜索">
		</div>
			
		</div>

		<div class="right">
			
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script>
document.documentElement.style.fontSize=window.innerWidth/375*100+"px";
// console.log(window.innerWidth);
import router from "@/router";
export default {

  name: 'navbar',

  data () {
    return {
    	// title:['国内 v','台湾 v']
    }
  },

  methods:{
  	handleClickLeft(){
  		//js 实现路由跳转 ---> 编程式导航
  		//
  		//router.push(`/detail/${index}`); // /detail/
  	
  		router.push(`/choose`);
  	}
  },
  //1. 放问store中的数据
  // computed:{
  // 	 title(){
  // 	 	return this.$store.state.title;
  // 	 }
  // }
  // 2. 访问store 中数据
 
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

	nav{
		font-size: 16px;
		position:fixed;
		top:0px;
		left:0px;
		width: 100%;
		height: 0.5rem;
		background-color: #FA4558;
		line-height: 0.5rem;
		color:white;
		.left{
			float:left;
		}

		.right{
			float:right;
		}

		z-index:2;
	}

	nav .left span{ 
		margin-left:0.1rem;
	}

	nav .con input{
		border-style: none;
		width:2.33rem;
		height:0.3rem; 
		margin-left: 0.2rem;
		text-align:center;
	}

	nav .right{
		position: absolute;
		top:0rem;
		right: 0.1rem;
	}
</style>