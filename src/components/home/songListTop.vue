<template>
  <div class="mai">
    <div class="listSongTop">
      <div class="listSongTopNav">
        <img class="bg" :src="playlist.coverImgUrl" alt="" srcset="" />
        <div class="left">
          <span class="iconfont icon-zuojiantou" @click="$router.back()"></span
          ><span>歌单</span>
        </div>
        <div class="right">
          <span class="iconfont icon-31sousuo"></span
          ><span class="iconfont icon-xuanxiang"></span>
        </div>
      </div>
      <div class="content">
        <div class="pic">
          <img :src="playlist.coverImgUrl" />
        </div>
        <div class="description">
          <div class="toptitle">
            {{ playlist.name }}
          </div>
          <div class="author">
            <img :src="playlist.creator.avatarUrl" />
            <div class="nikeName">
              {{ playlist.creator.nickname }}
              <span class="iconfont icon-youjiantou"> </span>
            </div>
          </div>
          <div class="introduction">
            {{ playlist.description }}
          </div>
        </div>
      </div>
      <div class="action">
        <div class="actionItem">
          <div>
            <span class="iconfont icon-msg-o"> </span>
          </div>
          {{ playlist.commentCount }}
        </div>
        <div class="actionItem">
          <div>
            <span class="iconfont icon-fenxiang"> </span>
          </div>
          {{ playlist.shareCount }}
        </div>
        <div class="actionItem">
          <div>
            <span class="iconfont icon-yunxiazai_o"> </span>
          </div>
          下载
        </div>
        <div class="actionItem">
          <div>
            <span class="iconfont icon-show_duoxuan"> </span>
          </div>
          多选
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    playlist: {
      type: Object,
    },
  },

  setup(props, ctx) {
    const router = useRouter();

    // function Goto(){
    //   router.back()
    // }

    return {
      // Goto
    };
  },
};
</script>

<style lang="less" scoped>
.mai {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #fff;
}
.listSongTop {
  width: 7.1rem;

  padding: 0 0.2rem;

  .listSongTopNav {
    height: 0.5rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    color: white;
    .right,
    .left {
      width: 1.5rem;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
      }
    }
    .bg {
      width: 7.5rem;
      height: 5.1rem;
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      filter: blur(40px);
    }
  }
  .content {
    height: 3rem;
    // width: 3rem;
    margin-top: 0.2rem;
    display: flex;
    .pic {
      height: 3rem;
      width: 3rem;
      img {
        height: 3rem;
        width: 3rem;
      }
    }
    .description {
      width: 4.1rem;
      text-align: start;
      margin-left: 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .toptitle {
        font-size: 20px;
        font-weight: 700;
        color: rgb(223, 230, 236);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .introduction {
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #ccc;
      }
      .author {
        height: 0.6rem;
        display: flex;
        align-items: center;
        color: #ccc;
        .nikeName {
          font-size: 13px;
          padding-left: 2px;
          .iconfont {
            font-size: 10px;
          }
        }
        img {
          height: 0.4rem;
          width: 0.4rem;
          border-radius: 50%;
        }
      }
    }
  }
  .action {
    height: 1rem;
    display: flex;
    justify-content: space-around;
    color: rgb(207, 214, 220);
    margin-top: 0.2rem;
    .actionItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 11px;
      div,
      span {
        font-size: 18px;
      }
    }
  }
}
</style>