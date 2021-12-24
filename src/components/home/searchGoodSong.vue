<template>
  <div class="srarchSong">
    <div class="title">
      <div class="text">发现好歌单</div>
      <div class="btn" @click="seeMore">
        <div>查看更多</div>
      </div>
    </div>
    <div class="songList">
      <div class="songItem" @click="Goto(item.id)" v-for="(item, index) in musicList.value" :key="index">
        <div class="img">
          <div class="ico">
            <span class="playCount">
              <span class="iconfont icon-24gl-play">&nbsp;</span>
              {{ item.playCount }}&nbsp;万
            </span>
          </div>
          <img :src="item.picUrl" alt="" />
        </div>
        <div class="text">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetSearchSongList } from "@/api/home/homeApi";
import { reactive, onMounted } from "vue";
import {useRouter} from 'vue-router';
export default {
  setup() {
    let musicList = reactive([]);
    const router=useRouter()

    onMounted(() => {
      GetSearchSongList({ limit: 12 }).then((res) => {
        // console.log(res);
        musicList.value = res.result;
        filterPlayCount(res.result);
      });
    });
    function seeMore() {
      alert("0");
    }
    function filterPlayCount(data) {
      data.forEach((element) => {
        element.playCount = parseInt(element.playCount / 10000);
      });
    }
    function Goto(id){
    
      
    router.push({path:'searchSongList',query:{id:id}})
    
    }
    return {
      musicList,
      filterPlayCount,
      seeMore,Goto
    };
  },
};
</script>
<style lang="less" scoped>
.srarchSong {
  width: 7.1rem;
  margin-top: 0.3rem;
  margin-right: auto;
  margin-left: auto;
}
.title {
  height: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .text {
    font-weight: 900;
  }
  .btn {
    // display: line-block;
    line-height: 0.4rem;
    font-size: 10px;
    border-radius: 0.16rem;
    border: 1px solid gray;
    text-align: center;
    padding: 0 4px;
  }
}
.songList {
  width: 100%;
  // height: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: scroll;
  .songItem {
    flex-shrink: 0;
    width: 30%;
    height: 3rem;
    // background-color: #ccc;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    display: flex;
    flex-direction: column;
    .img {
      position: relative;
      .ico {
        position: absolute;
        right: 3px;
        top: 3px;
        .playCount {
          color: white;
          background-color: rgba(255, 255, 255, 0.2);
          // opacity: 0.3;
          font-size: 10px;
          border-radius: 0.1rem;
          padding: 1px 4px;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          span {
            font-size: 10px;
          }
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }

    .text {
      font-size: 10px;
    }
  }
}
.songItem:nth-child(1) {
  margin-left: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>