<style lang="scss" scoped>
#search {
  background: #f7f7f7;
  width: 100vw;
  height: 100vh;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  position: relative;

  .search_input {
    background: #f7f7f7;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    font-size: 0.32rem;
    // height: 0.8rem;
    line-height: 0.8rem;
    // padding-bottom: 0.2rem;

    .input_wrap {
      // height: 0.8rem;
      flex-grow: 1;
      margin: 0rem 0.26rem 0 0.26rem;
      margin-top: 0.3rem;
      display: flex;
      input {
        display: inline-block;
        flex-grow: 1;
        appearance: none;
        border: 0;
        padding-left: 0.2rem;
        border-radius: 5px;
        font-size: 0.28rem;
        border: 0.5px solid #eee;
        &::placeholder {
          font-size: 0.28rem;
        }
      }
    }

    .sousuo {
      border-radius: 5px;
      flex-flow: 0;
      margin-right: 0.26rem;
      flex-grow: 0;
      margin-top: 0.3rem;
      line-height: 0.8rem;
      width: 1.2rem;
      color: #fff;
      background: #29b7ec;
      text-align: center;
    }
  }
  .searchImg {
     width: 4.2rem;
      height: 3.7rem;
    position: absolute;
      top: 25%;
      left: 50%;
      margin-left: -2.1rem;
    .imgWrap {
      width: 4.2rem;
      height: 3.7rem;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        color: #333;
        font-size: 0.32rem;
      }
    }
  }
  .search_cont {
    //
    flex-grow: 1;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;



    .cont {
      margin-top: 1.3rem;
      font-size: 0.3rem;
      background: #fff;
      padding: 0rem 0rem 0rem 0.26rem;
     margin-bottom: 0.2rem;
      .Wrap {
        display: flex;
        flex-direction: row;
        border-bottom: 0.5px solid #e6e6e6;
        padding: 0.2rem 0;
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
          margin-right: 0.26rem;
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
           span{
              width: 4.1rem;
            // height: 0.5rem;
            line-height: 0.45rem;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
           }
            i {
              width: 0.6rem;
              height: 0.3rem;
              border-radius: 2px;
              background: #f99c57;
              color: #fff;
              font-size: 0.22rem;
              text-align: center;
              line-height: 0.3rem;
            }
          }
          .cont_right_2 {
            color: #888;
            font-size: 0.24rem;
            line-height: 0.4rem;
              width: 4.1rem;
          overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;

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
}
</style>
<template>
<div id="search">

     <div class="search_input">
       <div class="input_wrap">
 <input v-model="keyWord" type="text" placeholder="关键字"/>
       </div>




     <div class="sousuo" >
<span @click="git_search_list()">搜索</span>
     </div>



     </div>
     <div class="searchImg" v-if="isSearch">
       <div class="imgWrap">
<img :src="noViewImg" alt="">
<span>暂无资源</span>
       </div>

        </div>
     <div class="search_cont">
           <div class="cont">

      <div class="Wrap" v-for="(item,index) in resourList" :key="index"  @click="goDetail(item.crId,item.crType)">
        <div class="cont_left">
          <img :src="item.crIconUrl" alt="">
        </div>
        <ul class="cont_right">
          <li class="cont_right_1">
            <span>{{item.crTitle}}</span>
            <i :style="{backgroundColor:item.defColor}" v-if="isType">{{item.crType|msg}}</i>
          </li>
          <li class="cont_right_2" v-show="item.crAutherName!=''&&item.crAutherName!=null">
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
import searchimg from './img/seach.png'
  export default {
    name:"searchPage",
    props:{
      coEntid:{
        type:String,
        default:()=>{''}
      },
      isType:{
        type:Boolean,
        default:()=>{true}
      },
      noViewImg:''

    },
    data() {
      return {
        resourList:[],
        keyWord:'',
        isSearch:false

      };
    },
    mounted() {
       this.git_search_list();
    },
    methods: {
      git_search_list(){

        this.resourList=[]
        let params = {
          entid: this.coEntid,
          search : this.keyWord,
          type: '1,2,3,4,5',
        };
        this.$postHttp("/medapp/api/college/listresource", params).then(
          result => {
            let data = result.data;
            if (data.code == 0) {
              if(data.collegeresource.length<=0){
                this.isSearch = true
              }else{
                data.collegeresource.map(item => {
                  if (item.crType == 1) {
                    item.defColor = "#4892d7";
                  } else if (item.crType == 2) {
                    item.defColor = "#f3db39";
                  } else if (item.crType == 3) {
                    item.defColor = "#89d579";
                  } else if (item.crType == 4) {
                    item.defColor = "#bba1ca";
                  }
                  this.resourList = data.collegeresource;

                });

              }

            } else {
              console.log(data.code);
            }
          },
          error => {
            console.log(error);
          }
        );

      },
       goDetail(crid, type) {
      this.$emit("goDetail", crid, type);
    },
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

