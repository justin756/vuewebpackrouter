<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">page3</h5>
      <p class="card-text">
        page3
      </p>元件
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
console.log(
  this.$route.params.id
)
    
  }
};
</script>
