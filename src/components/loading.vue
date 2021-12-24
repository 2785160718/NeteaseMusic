<template>
  <div class="loading" v-show="loading">
    <div class="loadingamin">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"]),
  },
  setup() {},
};
</script>
<style lang="less" scoped>
.loading {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .loadingamin {
    width: 2rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .line {
      width: 0.1rem;
      height: 1rem;
      background-color: crimson;
      animation-name: jump;
    }
    .line:nth-child(1) {
      animation: jump 1.5s infinite;
    }
    .line:nth-child(2) {
      animation: jump 1.7s infinite;
    }
    .line:nth-child(3) {
      animation: jump 1.9s infinite;
    }
    .line:nth-child(4) {
      animation: jump 2.1s infinite;
    }
    .line:nth-child(5) {
      animation: jump 2.3s infinite;
    }
    .line:nth-child(6) {
      animation: jump 2.5s infinite;
    }
  }
}
@keyframes jump {
  0% {
    height: 1rem;
  }
  50% {
    height: 0.5rem;
  }
  100% {
    height: 1rem;
  }
}
</style>