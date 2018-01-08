<template>
  <el-container>
    <section>
      
    
      <navbar></navbar>

      <el-main>
            <ul>
               <li v-for="(data,index) in datalist" class="fl" @click="handleClick(data.id)" :key="data.id">
                  <img :src="'http://image.buoumall.com/' + data.cover">
                 <span class="sp"> {{data.title}}</span>
                 <p>{{data.description}}</p>
               </li>
            </ul> 
        </el-main>
      </section>
    </el-container>
</template>

<script>
document.documentElement.style.fontSize=window.innerWidth/375*100+"px";
import axios from "axios";
import router from "@/router";

import navbar from "@/components/common/navbar";

export default {
  name: 'list',
 data() {
    return {
      datalist:[],
    }
  },

  mounted(){
    axios.post('/look/list',"memberToken=&pageNum=1&pageSize=20"
   
)
  .then(res=>{
        console.log(res.data)
       this.datalist = res.data.data.list;
  })     
  },
  
  methods:{
    handleClickRight(){
      router.push(`/register`);
    },

      handleClick(index){     
      router.push({name:"mydetail",params:{id:index}});
    }
  },

  components:{
    
    "navbar":navbar
  }

}
</script>


<style scoped>
 .el-header, .el-footer {
  z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fa4558;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
 
  .left{
    margin-left:5px; 
    float: left;
  }
  .right{
    float: right;
  }
  input{
   height: 50%;
   width: 66%;
   border: 0;
  text-align: center;
  border-radius: 2px;
  }

  .fl{
    
       width:45%;
       display: inline-block;
       position: relative;
       padding: 1%;
  }
  img{
    width:100%;
  }
  *{
    padding:0;
    margin:0;
    font-size: 16px;
  }
  .sp{
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 25%;
  }
  p{
   color: #fff;
    font-size: 14px;
    position: absolute;
    top: 60%;
    left: 7%; 
  }
  ul{
    /*margin-top: 0px;*/
    padding-left: 6%;
  }
  section {
    position: relative;
    top: 0.3rem;
  } 

</style>
