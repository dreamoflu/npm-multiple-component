<style type="text/scss" lang="scss" scoped>
#ConfenceList {
  font-size: 0.3rem;
  background: #f2f2f2;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ._v-container {
    // position: inherit;
    top: 0.9rem;
    z-index: 100;
  }
  .Iscroll {
    position: absolute;
    top: 0.9rem;
    bottom: 0rem;
    width: 100vw;
    overflow-y: auto;
  }

  header {
    height: 0.9rem;
    display: flex;
    flex-direction: row;
    background: #ffffff;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    ul {
      display: flex;
      flex-direction: row;
      height: 0.9rem;
      flex-grow: 1;
      border-bottom: 1px solid #eee;

      li {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .line {
          position: absolute;
          bottom: -1px;
          // left: 0;
          height: 1px;
          width: 100%;
          // background: #29b7ec;
        }
        span {
          display: block;
          width: 100%;
          text-align: center;
          border-right: 1px solid #e6e6e6;
        }
      }
      li:nth-last-of-type(1) {
        border-right: 0;
      }
    }
    .search {
      width: 1rem;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 0.5rem;
        width: auto;
        flex-grow: 0;
      }
    }
  }
  .bgImg {
    position: absolute;
    top: 25%;
    left: 50%;
    margin-left: -2.1rem;
    width: 4.2rem;
    height: 3.7rem;
    text-align: center;
    .imgWrap {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    span {
      color: #333;
    }
  }
  .nameWrap {
    display: flex;
    flex-direction: row;
    margin-top: 0.2rem;

    div {
      // background: #23aae5;
      border-top-right-radius: 0.5rem;
      color: #fff;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      width: 2rem;
    }
  }
  .cont {
    background: #fff;
    padding: 0rem 0 0 0.26rem;
    margin-bottom: 0.2rem;

    .Wrap {
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      flex-direction: row;
      padding: 0.2rem 0.26rem 0.2rem 0;
      &:last-of-type {
        border-bottom: 0;
      }

      .cont_left {
        width: 2rem;
        height: 1.5rem;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .cont_right {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-left: 0.2rem;

        li {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          i {
            flex-shrink: 0;
            font-style: normal;
          }
        }
        .cont_right_1 {
          flex-grow: 1;
          color: #333;
          span {
            width: 4.1rem;
            // height: 0.5rem;
           line-height: 0.45rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          i {
            width: 0.6rem;
            height: 0.3rem;
            border-radius: 2px;
            background: #f99c57;
            color: #fff;
            font-size: 0.22rem;
            text-align: center;
            line-height: 0.33rem;
          }
        }
        .cont_right_2 {
          color: #888;
          font-size: 0.24rem;
          line-height: 0.4rem;
          width: 4.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .cont_right_3 {
          align-items: flex-end;
          color: #999;
          line-height: 0.3rem;

          span {
            font-size: 0.24rem;
          }
          i {
            font-size: 0.22rem;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div id="ConfenceList">
    <header>

      <ul>
        <li :style="{'color':ClickNum==index?themeColor:'#333'}" @click="tapTitle(index)" v-for="(item,index) in title" :key='index'>
          <span>{{item.name}}</span>
          <div v-show="ClickNum==index" class="line" :style="{backgroundColor:themeColor}"></div>
        </li>

      </ul>
      <div class="search" :style="{backgroundColor:themeColor}" @click="goSearch">
      
        <img src="./img/search.png" alt="">
      </div>
    </header>

      <div class="bgImg" v-if="imgBlock">
        <div class="imgWrap">
 <img :src="noViewImg" alt="">
 <span>暂无相关文件可以观看</span>
        </div>
       
        </div>
        <!-- :on-refresh="refresh"
  :on-infinite="infinite"
  v-if="resourList.length>0"
  ref="myscroller"  -->
    <div  class="Iscroll">


  
 <div class="nameWrap" v-if='listParams.isShunt'>
          <div @click="defClassify(1)" :style="{backgroundColor:difCheck==1?themeColor:'#d2d2d2'}">前路</div>
          <div @click="defClassify(2)" :style="{backgroundColor:difCheck==2?themeColor:'#d2d2d2'}">后路</div>
        </div>
 
     <!-- <div v-if='!listParams.isShunt' style="width:100vh;height:0.2rem;background:#f7f7f7;"></div> -->
      <div class="cont" :style="{marginTop:!listParams.isShunt?'0.2rem':'0'}">
     
       
      <div class="Wrap" 
      v-for="(item,index) in resourList" 
      :key="index"
      @click="goDetail(item.crId,item.crType)"
      >
        <div class="cont_left">
          <img :src="item.crIconUrl" alt="">
        </div>
        <ul class="cont_right">
          <li class="cont_right_1">
            <span>{{item.crTitle}}</span>
            <i :style="{backgroundColor:item.defColor}" v-if="isType">{{item.crType|msg}}</i>
          </li>
          <li class="cont_right_2" v-if="item.crAutherName!=''&&item.crAutherName!=null">
            {{item.crAutherName}}
          </li>
          <li class="cont_right_3" v-if="item.crAutherOrg!=''&&item.crAutherOrg!=null">
            <span>{{item.crAutherOrg|word
}}</span>
            <i>{{item.crViewNum|Num}}次浏览</i>
          </li>

        </ul>

      </div>
    </div>
</div>



  </div>
</template>

<script>
export default {
  name: "resourListPage",
  props: {
    title: {
      type: Array,
      default: () => [
        {
          name: "视频",
          type: "1"
        },
        {
          name: "课件",
          type: "2"
        },
        {
          name: "文献",
          type: "3"
        },
        {
          name: "病例",
          type: "4"
        }
      ]
    },
    themeColor: {
      type: String,
      default: () => "#23aae5"
    },
    routerName: {
      type: String,
      default: () => "infodetail"
    },
    limit: {
      type: Number,
      default: () => 10
    },

    listParams: {
      type: Object,
      default: () => {}
    },
    isType: {
      type: Boolean,
      default: () => {
        true;
      }
    },
    noViewImg: ""
  },
  data() {
    return {
      ClickNum: 0,
      noData: "",
      resourList: [],
      diferColor: "",
      dataLenght: null,
      num: 0,
      postCode: "",
      difCheck: 1,
      offset: 1,
      scroll_done: null,
      isinfinite: false, //是否监听到页面数据
      datalength: null,
      paramsType: "",
      imgBlock: false
    };
  },
  mounted() {
    if (this.listParams.code == "" || this.listParams.code == null) {
      this.postCode = this.listParams.qianlu;
    } else {
      this.postCode = this.listParams.code;
    }
    this.paramsType = this.title[0].type;
    this.git_resourlist();
  },
  methods: {
    defClassify(num) {
      this.difCheck = num;
      if (num == 1) {
        this.postCode = this.listParams.qianlu;
      } else {
        this.postCode = this.listParams.houlu;
      }
      this.git_resourlist();
    },
    git_resourlist(done) {
      this.imgBlock=false;
      let params = {
        entid: this.listParams.entid,
        code: this.postCode,
        type: this.paramsType,
        limit:'',
        offset: this.offset
      };
      this.$postHttp("/medapp/api/college/listresource", params).then(
        result => {
          let data = result.data;
          if (data.code == 0) {
             this.resourList = data.collegeresource
              if(this.resourList.length<=0){
                this.imgBlock=true;
              }
            // if(done == "refresh"){
            //   this.resourList = data.collegeresource
            // }else{
            //    data.collegeresource.map(item => {
            //   if (item.crType == 1) {
            //     item.defColor = "#4892d7";
            //   } else if (item.crType == 2) {
            //     item.defColor = "#f3db39";
            //   } else if (item.crType == 3) {
            //     item.defColor = "#89d579";
            //   } else if (item.crType == 4) {
            //     item.defColor = "#bba1ca";
            //   }
            //   this.resourList.push(item);
            //   this.resourList = this.unique(this.resourList);
            //   this.datalength = data.collegeresource.length;
            //   // this.resourList=[]
             
            // });

            // }
           
            // if (done == "refresh") {
            //   setTimeout(() => {
            //     this.$refs.myscroller.finishPullToRefresh();
            //   }, 1500);
            // } else {
            //   if (data.collegeresource.length <= 0) {
            //     this.$refs.myscroller.finishInfinite(1);
            //   } else {
            //     setTimeout(() => {
            //       this.scroll_done();
            //     }, 1500);
            //   }
            // }
          } else {
            console.log(data.code);
          }
        },
        error => {
          console.log(error);
        }
      );
    },
    tapTitle(index) {
      this.paramsType = this.title[index].type;
      // this.$emit("refType", this.title[index].type);
      this.offset = 1;
      this.ClickNum = index;
      this.resourList = [];
      this.git_resourlist();
    },
    refresh() {
      this.offset=1;
      this.git_resourlist("refresh");
    },
    infinite(done) {
      this.isinfinite = true;
      this.scroll_done = done;
      this.git_resourlist(done);
      this.offset++;
    },
    goDetail(crid, type) {
      this.$emit("goDetail", crid, type);
    },
    goSearch() {
      this.$emit("goSearch");
    },
    //json去重
    unique(JsonArr) {
      let result = {};
      let finalResult = [];
      for (let i = 0; i < JsonArr.length; i++) {
        result[JsonArr[i].crId] = JsonArr[i]; //uId 为json数组中 json的键名
      }
      for (let item in result) {
        finalResult.push(result[item]);
      }

      return finalResult;
    }
  },
  filters: {
    msg: function(value) {
      let name;
      if (value == 1) {
        name = "视频";
      } else if (value == 2) {
        name = "课件";
      } else if (value == 3) {
        name = "文献";
      } else if (value == 4) {
        name = "病例";
      }
      return name;
    },
      word:function(value){
      let str;
      if(value.length>=12){
        str = value.substring(0,12)+'...'
      
      }else{
        str = value;
      }
      return str;
      

    },
    Num:function(value){
      let str;
      if(value>999){
        str = "999+"
      
      }else{
        str = value;
      }
      return str;
      

    }
  }
};
</script>
