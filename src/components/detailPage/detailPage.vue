<style scoped type="text/scss" lang="scss">
  #infodetail {
    .public {
      padding: 0.3rem 0 0.3rem 0.26rem;
      .title {
        color: #333;
        font-size: 0.32rem;
      }
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
      }
    }
    .differ {
      padding: 0 0.26rem 0.3rem 0.26rem;
      .case {
        background: #f7f7f7;
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
        padding: 0 0.26rem 0.3rem 0.26rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
<template>
  <div id="infodetail">
    <div class="video">
      <dp-video v-if="crtype==1" :video="videoSrc" :picture='poster'></dp-video>
    </div>
    <div class="public">
      <div class="title"></div>
      <ul>
        <div>
          <li>{{collegeresource.crTitle}}</li>
          <li>
            <span>作者：</span>
            <b>{{collegeresource.crAutherName}}</b>
          </li>
          <li>
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
        <ul>
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

      </div>
      <div class="Course" v-if="crtype==2">
        <div v-for="(item,index) in parseInt(collegeresource.crPptsum)" :key="index">
          <img :src="collegeresource.crPptdir+collegeresource.crPptpostfix.replace(/#num#/g,index+1)" alt="" />
        </div>


      </div>
      <div></div>
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
      }
    },
    data() {
      return {
        collegeresource:null,
        videoSrc:''
      };
    },
    mounted() {
      this.git_Detail();

    },
    methods: {
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
