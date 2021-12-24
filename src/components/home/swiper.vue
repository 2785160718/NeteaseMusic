<template>
  <div class="swiperComponent">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
        <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
          <img :src="item.pic" alt="" />
          <span :style="{ background: item.titleColor }">{{
            item.typeTitle
          }}</span>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
// import axios from "axios";
import { GetBanners } from "@/api/home/homeApi.js";
export default {
  data() {
    return {
      imgList: [],
    };
  },
  methods: {
    getSwiperImgList() {
      GetBanners({ type: 2 }).then((res) => {

        console.log(res,'banner');
        this.imgList = res.banners;
        var mySwiper = new Swiper(".swiper-container", {
          // direction: "vertical", // 垂直切换选项
          observer: true,
          direction: "horizontal",
          loop: true,
          initialSlide: 0,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false, //解决滑动后不能轮播的问题
          },
          // 注意分页器的写法：
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
  mounted() {
    this.getSwiperImgList();
    var mySwiper = new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },

      // 如果需要滚动条
      //   scrollbar: {
      //     el: ".swiper-scrollbar",
      //   },
    });
  },
};
</script>

<style lang="less" >
.swiperComponent {
  //   width: 7.1rem;
  //   height: 3rem;
  .swiper-container {
    width: 7.1rem;
    height: 3rem;
    border-radius: 0.2rem;
    .swiper-wrapper .swiper-slide {
      
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
      span {
        display: inline-block;
        position: absolute;
        z-index: 20;
        bottom: 0;
        right: 0;
        // background-color: #fff;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 13px;
        padding: 4px;
        overflow: hidden;
      }
    }
  }
  .swiper-pagination-bullet-active {
    background-color: red;
  }
}
</style>