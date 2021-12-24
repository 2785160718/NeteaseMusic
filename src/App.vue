<template>
  <router-view/>
  <PlayController/>
  <Loading/>
</template>

<script>
import PlayController from '@/components/playController'
import Loading from '@/components/loading'

export default {
  name: 'App',
  components:{
    PlayController,Loading
  }
 
}
</script>

<style>
#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
.iconfont{
  font-size: .45rem;
}
</style>
