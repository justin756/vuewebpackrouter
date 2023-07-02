<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">page2</h5>
      <p class="card-text">
        page2
      </p>
      <a href="#" class="btn btn-primary">Go page2</a>
    </div>
  </div>
</template>
<script>

export default{
  data(){
    return
  },

  created(){
    // console.log(this.$route.params.id);
let user=this.$route.params.id
console.log(user)
    this.$http.get(`https://randomuser.me/api/?seed=${user}`).then((res)=>{
  console.log(res)
})


  }



}


</script>