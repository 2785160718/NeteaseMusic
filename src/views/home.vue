<template>
  <div>
    <TopNav />
    <Swiper />
    <IconList />
    <SearchGoodSong/>
  </div>
</template>
<script>
import TopNav from "@/components/home/topNav.vue";
import Swiper from "@/components/home/swiper.vue";
import IconList from "@/components/home/iconList.vue";
import SearchGoodSong from "@/components/home/searchGoodSong.vue";

export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    TopNav,
    IconList,
    SearchGoodSong,
  },
};
</script>
<style lang="less" scoped>
.d1 {
  width: 3.75rem;
  height: 1rem;
  background-color: skyblue;
}
</style>