<style scoped type="text/scss" lang="scss">
  #infodetail {
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
    .public {
     padding: 0.3rem 0.26rem 0.3rem 0.26rem;
     
      ul {
        font-size: 0.26rem;
        li {
          display: flex;
          flex-direction: row;
          line-height: 0.36rem;
          span {
            color: #333;
            flex-grow: 0;
            flex-shrink: 0;
          }
          b {
            color: #666;
            flex-grow: 1;
            font-weight: normal;
          }
        }
         .crTitle{
          color: #333;
      font-size: 0.32rem;
      }
      .auther{
        margin-top: 0.1rem;
      }
      }
    }
    .differ {
      padding: 0 0.26rem 0.3rem 0.26rem;
      .case {
        background: #f7f7f7;
        color: #666;
        font-size: 0.26rem;
        ul {
          padding: 0 0.26rem 0.3rem 0.26rem;
          li {
            display: flex;
            flex-direction: column;
            line-height: 0.4rem;
            padding-top: 0.2rem;

            span {
              color: #333;
              font-size: 0.28rem;
            }
            b {
              color: #666;
              font-weight: normal;
              font-size: 0.26rem;
            }
          }
        }
      }
      .Course {
         padding: 0 0rem 0.3rem 0rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .downFile{
  font-size:0.3rem; 

   width:1.3rem;
   color:#23aae5;
   line-height: 0.5rem;
   text-align: center;
   border-radius: 0.25rem;
   margin-top: 0.1rem;
   margin-left: 0.26rem;
   padding-bottom: 0.2rem;
  }
  }
</style>
<template>
  <div id="infodetail">
    <div class="video" v-if="videoSrc!=''">
      <dp-video v-if="crtype==1" :video="videoSrc" :picture='poster'></dp-video>
    </div>
    <div class="public" v-if="collegeresource!=null">

      <ul>
        <div>
          <li class="crTitle">{{collegeresource.crTitle}}</li>
          <li class="auther" v-if="collegeresource.crAutherName!=''&&collegeresource.crAutherName!=null">
            <span>作者：</span>
            <b>{{collegeresource.crAutherName}}</b>
          </li>
          <li v-if="collegeresource.crAutherOrg!=''&&collegeresource.crAutherOrg!=null">
            <span>医院：</span>
            <b>{{collegeresource.crAutherOrg}}</b>
          </li>
          <li>
            <span>时间：</span>
            <b>{{collegeresource.crCreateDt}}</b>
          </li>
        </div>
        <div v-if="crtype==1">
          <li>
            <span>摘要：</span>
            <b>{{collegeresource.crSummary}}</b>
          </li>
        </div>


      </ul>

    </div>
    <div class="differ">
      <div class="case" v-if="crtype==4">
        <ul v-if="collegeresource.caselist.length>0">
          <li v-for="(item,index) in collegeresource.caselist" :key="index">
            <span>{{item.cceKey}}</span>
            <b>{{item.cceValue}}</b>
          </li>
        </ul>

      </div>
      <div class="case" v-if="crtype==3">
        <ul>
          <li v-html="collegeresource.crSummary"> </li>
        </ul>
        <div v-if="isLook" class="downFile" @click="downFile(collegeresource.crFileUrl)">
               查看附件
            </div> 

      </div>
      <div v-if="collegeresource.crPptpostfix!=null||collegeresource.crPptpostfix!=''"> 
           <div class="Course" v-if="crtype==2||crtype==5||crtype==4">

              <ul
               v-if="collegeresource.crPptdir!=null&&collegeresource.crPptdir!=''"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
        <div v-for="(item,index) in picNum" :key="index">
          <img :src="collegeresource.crPptdir+collegeresource.crPptpostfix.replace(/#num#/g,index+1)" alt="" />
        </div>
              </ul>


      </div>
      </div>
      
      
    </div>

  </div>
</template>
<script>
  import dpVideo from "@/components/videoPage/videoPage.vue";
  export default {
    name:"detailPage",
    props: {
      crid: {
        type: String,
        default: () => "1"
      },
      crtype: {
        type: String,
        default: () => "1"
      },
       isLook:{ //是否显示查看附件
      type:Boolean,
      default:()=>true
    }
    },
    data() {
      return {
         collegeresource:null,
         videoSrc:'',
          poster:'',
         allPage:0,
         picNum:0,
      };
    },
    mounted() {
      this.git_Detail();
        if(this.crtype==1){
            document.title='视频详情'

          }else if(this.crtype==2){
            document.title='课件详情'

          }else if(this.crtype==3){
            document.title='文献详情'
            
          }else if(this.crtype==4){
            document.title='病例详情'
            
          }else if(this.crtype==5){
            document.title='指南共识'
            
          }

    },
    methods: {
       loadMore(){
      if(this.picNum<this.allPage){
        let num = this.allPage-this.picNum
        if(num>10){
          this.picNum=this.picNum+10;
        }else{
          this.picNum=this.picNum+num;
        }

      }
    },
      downFile(url){
            window.location.href=url
          },
      git_Detail() {
        let params = {
          crid: this.crid,
          code: "0",
          // "collegeresource ": collegeresource
        };
        this.$postHttp("/medapp/api/college/getresource", params).then(result => {
            let data = result.data;
            if (data.code == 0) {
              this.collegeresource = data.collegeresource;
              console.log(this.collegeresource.crTitle);
              this.videoSrc = data.collegeresource.crFileUrl;
              this.poster = data.collegeresource.crIconUrl;
                let date = new Date(this.collegeresource.crCreateDt);
              let Y = date.getFullYear() + '.';
              let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
              let D = date.getDate() + ' ';
              let h = date.getHours() + ':';
              let m = date.getMinutes()
           

              this.collegeresource.crCreateDt = Y+M+D+h+m 

               this.allPage = data.collegeresource.crPptsum;
              if(this.allPage<=10){
                this.picNum = this.picNum
              }else{
                this.picNum = 10;
              }

            } else {
              console.log(data.code);
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    },
    computed: {},
    components: {
      dpVideo
    }
  };
</script>
