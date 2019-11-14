<template>
  <div class="sowing">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item in sowingList" :key="item.cid">
        <img :src="item.icon_url" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    sowingList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplayDisableOnInteraction: false,
        autoplay: 3000, //自动轮播
        delay: 3000, //自动轮播间隔时间，单位ms
        loop: true, //循环轮播 是否,
        moveStartThreshold: 100,
        observeParents: true,
        observer: true,
        pagination: ".swiper-pagination"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.sowing /deep/ .swiper-pagination-bullet-active {
  background-color: #75a342;
}
.swiper {
  width: 100%;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
