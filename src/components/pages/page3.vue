<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">page3</h5>
      <p class="card-text">
        page3
      </p>
      <a href="#" class="btn btn-primary">Go page3</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created(){
    // 先索取動態路由 
    console.log(this.$route.params.id)
    let run=this.$route.params.id
    //當頁面載入進來時 

this.$http.get(`https://randomuser.me/api/?seed=${run}`).then((res)=>{
  
  console.log(res)

})
    
  }
};
</script>
