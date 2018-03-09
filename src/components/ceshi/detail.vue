<style scoped type="text/scss" lang="scss">


</style>
<template>
  <div id="infodetail">
    <info-detail
      v-if="crtype!=''&&crid!=''"
      :crid='crid'
      :crtype='crtype'

    ></info-detail>


  </div>
</template>
<script>
  import infoDetail from '@/components/detailPage/detailPage.vue'

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
      infoDetail
    }

  }
</script>
