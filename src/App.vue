<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link :to="{name:'首頁'}"   class="nav-link active" aria-current="page"> Home</router-link>
        <router-link to="/page/"   class="nav-link active" aria-current="page"> page</router-link>
        <router-link to="/page/page2"   class="nav-link active" aria-current="page"> page2</router-link>
        <router-link to="/page/page3"   class="nav-link active" aria-current="page"> page3</router-link>
        <router-link to="/page/page4"   class="nav-link active" aria-current="page"> page4</router-link>


      </div>
     
    </div>
    <a   @click.prevent="out">登出</a>
  </div>
</nav>


<router-view name="menu"></router-view>
<div class="container">
  <img src="./assets/logo.png">
  <router-view></router-view>
</div>
  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import aa from './components/pages/page'
export default {
  name: 'App',
  data(){
    return{

outPage:{
   success: true,
    message: "已登出"
}

    }
  },
  components: {
 
  },
  created(){
        console.log("照步道",this.$route.params);
    this.$router.push("/login")
    const api2=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`

 this.$http.get(api2).then((res)=>{
  
   console.log(res.data.products)

 })
    
  },
  methods:{
    out(){
      const outApi=`${process.env.APIPATH}/logout`
     let vm=this
      this.$http.post(outApi,vm.outPage).then((res)=>{
        console.log(res)
        if(res.data.message=="已登出"){
          this.$router.push("/login")
        }
      })

    }
  }
}
</script>




<style lang="scss">
@import "./assets/all";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
