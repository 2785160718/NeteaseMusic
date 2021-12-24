<template>
  <div class="topNav">
    <div class="topNavLeft">
      <span class="iconfont icon-caidan_o"></span>
    </div>
    <div class="topNavCenter">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topNavRight">
      <span class="iconfont icon-31sousuo"></span>
    </div>
  </div>
</template>
<style lang="less">
.topNav {
  height: 0.8rem;
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .topNavLeft {
    padding-left: 0.2rem;
  }
  .topNavRight {
    padding-right: 0.2rem;
  }
  .topNavCenter {
    display: flex;
    justify-content: space-between;
    width: 4.5rem;
    .active{
        font-weight: 900;
    }
  }

}
</style>