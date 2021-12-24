<template>
  <div class="songList">
    <SongListTop :playlist="state.playlist" />
    <PalyList :playlist="state.playlist" />
  </div>
</template>
<script>
import SongListTop from "@/components/home/songListTop";
import PalyList from "@/components/home/palyList";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { GetSearchSongDetail } from "@/api/home/homeApi.js";
import store from "@/store/index.js";

export default {
  name: "searchSongList",
  setup() {
    // console.log(,'store')

    const route = useRoute();

    let state = reactive({
      playlist: { creator: {}, tracks: [] },
      musicList: [],
    });

    onMounted(async () => {
      store.commit("setLoading", true);
      const res = await GetSearchSongDetail({ id: route.query.id });
      store.commit("setLoading", false);

      state.playlist = res.playlist;
      store.commit("setPlayList", state.playlist.tracks);
    });

    return {
      state,
    };
  },
  components: {
    SongListTop,
    PalyList,
  },
};
</script>
<style lang="less" scoped>
</style>