<template>
  <div class="product">
    <section>
      <p class="title">{{ categoryTitle }}</p>
      <ul>
        <li class="product-list" v-for="good in goodsList.products" :key="good.id">
          <p>
            <img :src="good.small_image" alt="" />
          </p>
          <div class="product-content">
            <p>{{ good.name }}</p>
            <p>{{ good.spec }}</p>
            <p class="price">
              <span>{{ good.price | formatPrice }}</span>
              <i class="iconfont icon-gwc"></i>
            </p>
          </div>
        </li>
      </ul>
    </section>
    <div class="product-bottom">
      <p>到底了，看看别的哟</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    goodsList: Object,
    categoryTitle: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.product {
  background: #fff;
  .product-bottom {
    font-size: 15px;
    text-align: center;
    padding: 5px 0;
    color: #ccc;
  }
  section {
    .title {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      color: #ccc;
      padding: 8px;
    }
    .product-list {
      display: flex;
      flex-direction: row;
      margin-bottom: 3px;
      img {
        width: 80px;
      }
      .product-content {
        width: 100%;
        p {
          padding: 5px;
          &:nth-child(1) {
            font-size: 14px;
          }
          &:nth-child(2) {
            font-size: 13px;
            color: #656456;
          }
          &:nth-child(3) {
            font-size: 15px;
            color: #ff0000;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
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
