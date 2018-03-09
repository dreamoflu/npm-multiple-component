<style lang="scss" scoped>

</style>
<template>
  <div id="search">

    <search-component :coEntid="coEntid"></search-component>

  </div>
</template>
<script>
  import searchComponent from '@/components/searchPage/searchPage.vue'
  export default {
    data() {
      return {
        coEntid:'',
      };
    },
    mounted() {
      this.coEntid=localStorage.getItem("coEntid")
    },
    methods: {


    },
    components:{
      searchComponent
    },

  };
</script>

