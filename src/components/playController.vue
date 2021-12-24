<template>
  <div class="playController">
    <div class="container" @click="showDetail = !showDetail">
      <div class="left">
        <div class="pic">
          <img :src="playList[playListCurrentIdx].al.picUrl" alt="" />
        </div>
        <div class="songInfo">
          <div class="name">
            {{ playList[playListCurrentIdx].name }}
          </div>
          <div class="singer">
            {{ playList[playListCurrentIdx].al.name }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="paly" @click.stop="play">
          <span :class="ico"> </span>
        </div>
        <div class="menu">
          <span class="iconfont icon-xuanxiang"> </span>
        </div>
      </div>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListCurrentIdx].id}.mp3`"
    ></audio>
    <ControlerDetail
      :isPlaying="paused"
      :play="play"
      @closeDetail="showDetail = !showDetail"
      :songDetail="playList[playListCurrentIdx]"
      v-show="showDetail"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
import ControlerDetail from "./palyControlDetail.vue";
export default {
  data() {
    return {
      ico: "iconfont icon-bofang",
      showDetail: false,
      paused: true,
    };
  },
  computed: {
    ...mapState(["playList", "playListCurrentIdx"]),
  },
  mounted() {
    this.$store.dispatch("getLyric", {
      id: this.playList[this.playListCurrentIdx].id,
    });
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.ico = "iconfont icon-bofangzhong";
        this.paused = false;
        this.updateCurrentTime();
      } else {
        this.$refs.audio.pause();
        this.ico = "iconfont icon-bofang";
        this.paused = true;
        clearInterval(this.$store.state.id);
      }
      // console.log([this.$refs.audio]);
    },
    updateCurrentTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit("setCurrentTime", this.$refs.audio.currentTime);
     
      }, 1000);
    },
  },
  watch: {
    playListCurrentIdx: {
      handler() {
        this.$refs.audio.pause();
        this.ico = "iconfont icon-bofang";
        this.paused = true;
        this.$store.commit('setCurrentTime',0)
        this.$store.dispatch("getLyric", {
          id: this.playList[this.playListCurrentIdx].id,
        });
      },

      immediate: false,
    },
  },

  components: {
    ControlerDetail,
  },
};
</script>
<style lang="less" scoped>
.playController {
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 0.1px solid rgb(189, 188, 188);
  background-color: #fff;
  // box-shadow: 0 0 1px gray;
  .container {
    width: 7.1rem;
    padding: 0 0.2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .pic {
        img {
          height: 0.7rem;
          width: 0.7rem;
          border-radius: 50%;
        }
      }
      .songInfo {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0.2rem;
        font-size: 12px;
        .singer,
        .name {
          width: 100%;
          text-align: left;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
}
</style>