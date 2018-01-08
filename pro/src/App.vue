<template>
    <div>
           
        <!-- 路由容器 -->
          
            <router-view></router-view>
          
          
        
       
    </div>
</template>

<script>
document.documentElement.style.fontSize=window.innerWidth/375*100+"px";


export default {
  name: 'app',

  data(){
    return {
      
    }
  },

  components:{

  },

  methods:{
    
  }
  
}
</script>

<style  lang="scss">

// .active{
//   background-color: red;
// }

*{
  margin:0px;
  padding:0px;
}

html,body{
  width:100%;
  height:100%;
  font-size: 16px;
}

// li{
//   list-style: none;
// }

// section{
//   position:relative;
//   top:0.5rem;
// }

</style>
