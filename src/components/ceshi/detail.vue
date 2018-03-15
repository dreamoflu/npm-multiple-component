<style scoped type="text/scss" lang="scss">


</style>
<template>
  <div id="infodetail">
    <detail-page
      v-if="crtype!=''&&crid!=''"
      :crid='crid'
      :crtype='crtype'

    ></detail-page>


  </div>
</template>
<script>
  // import infoDetail from '@/components/detailPage/detailPage.vue'

  export default {
    data() {
      return {
        crid:'',
        crtype:'',
      }
    },
    props: {},
    mounted() {
      this.crid = this.$route.params.crid.toString(),
        this.crtype= this.$route.query.type.toString();
    },
    methods: {},
    computed: {},
    components: {
      // infoDetail
    }

  }
</script>
