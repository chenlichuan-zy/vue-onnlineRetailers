<template>
  <div class="products">
    <div class="product">
      <div class="productItem" v-for="product in productList" :key="product.id">
        <img :src="product.small_image" alt="" />
        <p class="desc">{{ product.name }}</p>
        <div class="price">
          <span>{{ product.price | formatPrice }}</span>
          <i class="iconfont icon-gwc"></i>
        </div>
      </div>
    </div>
    <div class="bottomText">
      <p>我是有底线滴！！</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    productList: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.products {
  margin-top: 15px;
  background-color: #fff;
  padding-bottom: 50px;
  .bottomText {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      color: #9c9292;
    }
  }
  .product {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    .productItem {
      width: 48.5%;
      border: 1px solid #d0c5c5;
      margin-bottom: 5px;
      border-radius: 5px;
      img {
        width: 120px;
        height: 120px;
      }
      .desc {
        font-size: 15px;
        text-align: left;
        height: 40px;
        box-sizing: border-box;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 12px 0;
        span {
          font-size: 20px;
          color: #e82525;
          padding-left: 6px;
        }
        .iconfont {
          font-size: 23px;
          color: #75a342;
          padding-right: 12px;
        }
      }
    }
  }
}
</style>
