<template>
  <div class="playlist">
    <div class="playListTop">
      <div class="left">
        <div class="ico">
          <span class="iconfont icon-bofang"> </span>
          <span> 全部播放 </span>
        </div>
        <div class="count">
          <span> (共{{ playlist.tracks.length }})首 </span>
        </div>
      </div>
      <div class="right">
        <div>
          <span class="iconfont icon-jia"> </span>
        </div>
        <div class="text">收藏{{ playlist.tracks.length }}</div>
      </div>
    </div>
    <div class="songList">
      <div
        class="songItem"
        v-for="(item, idx) in playlist.tracks"
        :key="idx"
        @click="setPlayIndex(idx)"
      >
        <div class="left">
          <div class="num">
            {{ idx }}
          </div>
          <div class="songInfo">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="singer">
              {{ item.al.name }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="paly">
            <span class="iconfont icon-bofang"> </span>
          </div>
          <div class="menu">
            <span class="iconfont icon-xuanxiang"> </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["playlist"],

  methods: {
    ...mapMutations(["setPlayIndex"]),
  },
};
</script>

<style lang="less" scoped>
.playlist::-webkit-scrollbar {
  display: none;
}
.playlist {
  
  margin-top: 5.1rem;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  width: 7.1rem;
  padding: 0.2rem 0.2rem;
  background-color: #fff !important;
  height: auto;
  padding-bottom: 1.1rem;
  .playListTop {
   
    color: rgb(53, 54, 56);
    height: 0.5rem;
    margin-top: 0.1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .ico {
        font-size: 17px;
        font-weight: 400;
        span {
          font-size: 17px;
        }
      }
      .count {
        font-size: 12px;
        color: gray;
      }
    }
    .right {
      display: flex;
      align-items: center;
      background-color: #ff513d;
      border-radius: 20px;
      padding: 3px 6px;

      color: #ccc;
      .text {
        font-size: 12px;
      }
      .iconfont {
        font-size: 14px;
      }
    }
  }
  .songList {
    display: flex;
    flex-direction: column;
    .songItem {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.3rem;
      .left {
        display: flex;
        align-items: center;

        .songInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 0.2rem;
          .name {
            font-size: 15px;
            font-weight: 300;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            text-align: left;
          }
          .singer {
            font-size: 10px;
          }
        }
      }
      .right {
        display: flex;

        .menu {
          padding-left: 0.1rem;
        }

        .iconfont {
          color: rgb(198, 192, 192);
        }
      }
    }
  }
}
// ::-webkit-scrollbar {
//   display: none;
// }
</style>