<template>
  <div class="cart">
    <header class="title">
      购物车
    </header>
    <div class="cartList">
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-checkbox v-model="checked"></van-checkbox>
        </div>
      </van-card>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      checked: true
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.cart {
  height: 100%;
  background-color: #fff;
  position: relative;
  padding-top: 50px;
  header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
    font-size: 16px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .van-card__header {
    width: 90%;
    padding-left: 30px;
  }
  .van-card__footer {
    position: absolute;
    bottom: 40px;
    left: 10px;
  }
  .van-submit-bar {
    bottom: 48px;
    .van-submit-bar__bar {
      padding-left: 9px;
    }
  }
}
</style>
