<style type="text/scss" lang="scss" scoped>
  #video {
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
    position: relative;
    width: 100%;
    height: 4.2rem;
    /*overflow: hidden;*/
    .playBtn {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 100;

      background: rgba(0, 0, 0, .4);
      img {
        position: absolute;
        z-index: 10;
        width: 1rem;
        height: 1rem;
        left: 50%;
        top: 50%;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
      }
    }
    .videoBg {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      z-index: 5;
    }
  }

  #dplayer {
    width: 100%;
    height: 100%;
  }


</style>
<template>

  <div id="video" :style='{"width":videoWidth+"rem","height":videoHeight+"rem"}'>
    <!-- @click='videoPlay' -->
    <div v-if="picShow" class="playBtn">
      <img src="./img/playbtn.png" alt="" @click="videoPlay"/>
    </div>
    <img v-if="picShow" class='videoBg' :src='picture' alt="" @click="videoPlay"/>
    <video-player :options="playerOptions" ref="videoPlayer"   :playsinline="true"
    ></video-player>
  </div>

</template>

<script>

  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  export default {
    name:"videoPage",
    props: {
      picture: '',
      video: '',
      videoWidth: '',
      videoHeight: '',
      isLoop:false,
    },

    data() {
      return {
        dp: {},
        picShow: true,
        playerOptions: {
          // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.video
          }],
//          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {

    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {


      videoPlay() {
//        var myPlayer = this.$refs.videoPlayer;
//        console.log(myPlayer)

//        this.dp.play()
        this.picShow = false;
        this.player.play()

      },

    },
    components: {
      videoPlayer
    }
  }
</script>
