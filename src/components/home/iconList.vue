<template>
  <div class="iconList">
    <div class="iconItem">
      <div class="date">{{today}}</div>
      <div class="ico">
        <span class="iconfont icon-rili"></span>
      </div>
      <div class="text">
        <span>每日推荐</span>
      </div>
    </div>
    <div class="iconItem">
      <div class="ico">
        <span class="iconfont icon-FM_weixuanze"></span>
      </div>
      <div class="text">
        <span>私人FM</span>
      </div>
    </div>
    <div class="iconItem">
      <div class="ico">
        <span class="iconfont icon-gedan"></span>
      </div>
      <div class="text">
        <span>歌单</span>
      </div>
    </div>
    <div class="iconItem">
      <div class="ico">
        <span class="iconfont icon-paixingbang"></span>
      </div>
      <div class="text">
        <span>排行榜</span>
      </div>
    </div>
    <div class="iconItem">
      <div class="ico">
        <span class="iconfont icon-zhiboziyuan"></span>
      </div>
      <div class="text">
        <span>直播</span>
      </div>
    </div>
    <div class="iconItem">
      <div class="ico">
        <span class="iconfont icon-yueliang"></span>
      </div>
      <div class="text">
        <span>晚间</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      today:null
    }
  },
  mounted(){
    this.today=new Date().getDate();
  }
  
}
</script>
<style lang="less" scoped>
.iconList {
  margin-top: 0.3rem;
  display: -webkit-flex;
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  //  overflow-y: hidden;
  .iconItem {
    width: 1.4rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    .text {
      font-size: 12px;
    }
    .ico {
      height: 0.8rem;
      width: 0.8rem;
      background-color: #FF300A;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont{
        color: aliceblue;
        font-size: .5rem;
      }
    }
    .date {
      position: absolute;
      font-size: 9px;
      top: 0.339rem;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>