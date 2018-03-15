<style lang="scss" scoped>

</style>
<template>
  <div id="search">

    
    <search-page :coEntid="coEntid" ></search-page>

  </div>
</template>
<script>
  // import searchComponent from '@/components/searchPage/searchPage.vue'
  export default {
    data() {
      return {
        coEntid:'32',
      };
    },
    mounted() {
      // this.coEntid=localStorage.getItem("coEntid")
    },
    methods: {


    },
    components:{
      // searchComponent
    },

  };
</script>

