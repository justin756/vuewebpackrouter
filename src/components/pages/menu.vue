<template>
  
  <div class="card" style="width: 18rem;">
    <router-link :to="{name:'首頁'}"   class="nav-link active" aria-current="page"> Home</router-link>
        <router-link to="/page/page2"   class="nav-link active" aria-current="page"> page2</router-link>
        <router-link to="/page/page3"   class="nav-link active" aria-current="page"> page3</router-link>
        <router-link to="/page/page4"   class="nav-link active" aria-current="page"> page4</router-link>
  <a @click.prevent="aa" >網址</a>
  <a @click.prevent="back" >回前一頁</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{

    aa(){
      this.$router.push('/page/page2')
    
    }
    ,
    back(){
      this.$router.forward()
    }
  }
};
</script>
