<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <div id="ConfenceList">
    <resour-list
      v-if="listParams!=null"
      @goDetail='goDetail'
      @goSearch='goSearch'
      :title="title"
      :offset="offset"
      :themeColor='themeColor'
      :listParams='listParams'

    ></resour-list>




  </div>
</template>

<script>
  import resourList from "@/components/resourListPage/resourListPage.vue"

  export default {
    data() {
      return {
        title: [
          {
            name:"全部",
            type:""
          },
          {
            name:"视频",
            type:"1"
          },
          {
            name:"课件",
            type:"2"
          },
          {
            name:"文献",
            type:"3"
          },
          {
            name:"病例",
            type:"4"
          }
        ],
        themeColor:'#23aae5',
        // ClickNum: 0,
        // noData: "",

        offset:1,
        listParams:null,
        routerObject:{
          routerName:'infodetail',
          routerQuery:{

          },
          routerParams:{

          }
        }
      };
    },
    mounted() {

      this.listParams = {
          entid:'32',//学科id
          code:'', //不分前路后路的 code
          qianlu:'qianlu', //前路code
          houlu:'houlu',//后路code
      }


      // if (this.noData == "") {
      //   this.$nextTick(() => {
      //     this.$refs.myscroller.finishInfinite(1);
      //   });
      // }
    },
    methods: {
      tapTitle(index) {
        this.ClickNum = index;

      },
      // refType(type){
      //   this.listParams.type = type;

      // },
      infinite(num){
        this.offset++

      },
      goSearch(){
        this.$router.push({
          name:'search'
        })

      },
      goDetail(crid,type){
        this.$router.push({
          name:"detail",
          params:{
            crid:crid
          },
          query:{
            "type":type
          }
        })

      }


    },
    components:{
      resourList
    }
  };
</script>
