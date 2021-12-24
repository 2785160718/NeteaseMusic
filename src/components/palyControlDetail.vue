<template>
  <div class="controlDetail">
    <div class="bg">
      <img :src="songDetail.al.picUrl" alt="" />
    </div>
    <div class="Nav">
      <div class="left">
        <div class="back" @click="closeDetail">
          <span class="iconfont icon-zuojiantou"> </span>
        </div>
        <div class="title">
          <div class="name">
            <marquee behavior="slide" direction="left">
              {{ songDetail.name }}</marquee
            >
          </div>
          <div class="singer">
            {{ songDetail.al.name }}
          </div>
        </div>
      </div>
      <div class="right">
        <span class="iconfont icon-fenxiang"> </span>
      </div>
    </div>
    <div v-show="!showLyric" @click="showLyric = !showLyric" class="detailImg">
      <img
        class="needle"
        :class="{ active: !isPlaying }"
        src="@/assets/img/needle-ab.png"
        alt=""
      />
      <img class="yuan" src="@/assets/img/yuan.png" alt="" />
      <img class="centerBg" :src="songDetail.al.picUrl" alt="" />
    </div>
    <div v-show="showLyric" @click="showLyric = !showLyric" class="lyric" ref="lyric">
      <div
        :class="{
          active:(
            currentTime * 1000 >= item.pre &&
            currentTime * 1000 <= parseInt(item.time))
        }"
        class="lyricText"
        v-for="(item, idx) in $store.getters.lyricList"
        :key="idx"
      >
        {{ item.text }}
        <!-- {{item.time}}
        {{currentTime*1000}} -->
      </div>
    </div>
    <div class="songNum"></div>
    <div class="progress"></div>
    <div class="operation">
      <div class="operationItem">
        <span class="iconfont icon-caozuo-xunhuan1"></span>
      </div>
      <div class="operationItem" @click="setPlayIndex(playListCurrentIdx + 1)">
        <span class="iconfont icon-shangyishoushangyige"></span>
      </div>
      <div class="operationItem" @click="play">
        <span v-if="isPlaying" class="iconfont icon-bofang"></span>
        <span v-else class="iconfont icon-bofangzhong"></span>
      </div>
      <div class="operationItem" @click="setPlayIndex(playListCurrentIdx + 1)">
        <span class="iconfont icon-xiayigexiayishou"></span>
      </div>
      <div class="operationItem">
        <span class="iconfont icon-caidan_o"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["songDetail", "isPlaying", "play"],
  emits: ["closeDetail"],
  data() {
    return {
      showLyric: true,
    };
  },
  computed: {
    ...mapState(["lyric", "playListCurrentIdx", "currentTime"]),
  },
  mounted() {
    console.log(this.props);
  },
  watch:{
    currentTime(){
        let p= document.querySelector('.lyric .active');
        // console.log([p])
        // let offsetTop=p.offsetTop
        if(p.offsetTop<30){
          this.$refs.lyric.scrollTop=p.offsetTop
        }
        else{
          this.$refs.lyric.scrollTop=p.offsetTop-30
        }
        
    }
  },
  methods: {
    ...mapMutations(["setPlayIndex"]),
  },
  setup(props, { emit }) {
    function closeDetail() {
      emit("closeDetail", false);
    }
   
    return {
      closeDetail,
    };
  },
};
</script>
<style lang="less" scoped>
.controlDetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  width: 7.1rem;
  padding: 0 0.2rem;
  .bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      filter: blur(40px);
    }
  }
  .Nav {
    padding-top: 0.1rem;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left,
    .right span {
      color: white;
      display: flex;
      align-items: center;
    }
    .left .title .name,
    .left .title .singer {
      padding-left: 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: left;
    }
    .left .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .singer {
        font-size: 1px;
        color: rgb(154, 151, 151);
      }
      .name {
        font-size: 14px;
      }
    }
  }
  .detailImg {
    position: absolute;
    width: 7.5rem;
    height: 8rem;
    top: 1.5rem;
    left: 0;
    .needle {
      position: absolute;
      left: 3.5rem;
      width: 2rem;
      height: auto;
      z-index: 10;
      transform: rotate(-20deg);
      transition: all 1s;
      transform-origin: 0.3rem 0;
    }
    .active {
      position: absolute;
      left: 3.5rem;
      width: 2rem;
      height: auto;
      z-index: 10;
      transform: rotate(0deg);
    }
    .yuan {
      position: absolute;
      width: 6rem;
      height: auto;
      left: 0.75rem;
      top: 2rem;
    }
    .centerBg {
      position: absolute;
      border-radius: 50%;
      left: 1.89rem;
      width: 3.75rem;
      height: auto;
      top: 3.13rem;
    }
  }
  .lyric {
    position: absolute;
    width: 7.5rem;
    height: 8rem;
    top: 2.5rem;
    left: 0;
    text-align: center;
    overflow: scroll;
    color: wheat;
    .lyricText {
      font-size: 13px;
    }
    .active {
      color: red;
    }
  }
  .operation {
    position: absolute;
    bottom: 0;

    height: 1rem;
    width: 7.1rem;
    // padding: 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .operationItem span {
      color: wheat;
    }
    .operationItem .icon-bofang,
    .operationItem .icon-bofangzhong {
      font-size: 0.6rem;
    }
  }
}
</style>