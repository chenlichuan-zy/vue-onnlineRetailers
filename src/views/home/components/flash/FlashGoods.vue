<template>
  <div class="flashGoods">
    <swiper :options="swiperOption">
      <swiper-slide v-for="product in falshSaleList" :key="product.id" class="swiperSlide">
        <img :src="product.small_image" alt="" />
        <p class="title">{{ product.name}}</p>
        <div class="price">
          <span>{{ product.price | formatPrice}}</span>
          <i class="iconfont icon-gwc"></i>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    falshSaleList: Array
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
<style scoped lang="less">
.flashGoods {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  .swiperSlide {
    padding: 10px;
    box-sizing: border-box;
    img {
      width: 120px;
      height: 120px;
    }
    .title {
      height: 43px;
      font-size: 14px;
      padding: 2px 0;
      box-sizing: border-box;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
        display: flex;
        justify-content: space-between;
        span {
            font-size: 17px;
            color:#e82525;
        }
        .iconfont {
            font-size: 23px;
            color: #75a342;
        }
    }
  }
}
</style>
