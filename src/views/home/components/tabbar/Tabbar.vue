<template>
  <div class="tab">
    <div class="title">
      <h1>
        <i class="iconfont icon-shuxian"></i>
        猜您喜欢
      </h1>
    </div>
    <van-tabs
      v-model="active"
      animated
      swipeable
      sticky
      :border="false"
      :offset-top="47"
      ref="tabs"
      type="line"
      color="#28BE57"
      title-active-color="#28BE57"
      animated:yes
    >
      <van-tab>
        <div slot="title">
          <span>{{ titleTotal[0] }}</span>
        </div>
        <ProductItem :productList="tabbarAllList" />
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{ titleTotal[1] }}</span>
        </div>
        <ProductItem :productList="tabbarLeisureList" />
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{ titleTotal[2] }}</span>
        </div>
        <ProductItem :productList="tabbarPopularityList" />
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{ titleTotal[3] }}</span>
        </div>
        <ProductItem :productList="tabbarFieryList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  components: {
    ProductItem
  },
  props: ["tabbarAllList", "tabbarLeisureList", "tabbarPopularityList", "tabbarFieryList"],
  data() {
    return {
      active: 0,
      titleTotal: ["全部", "休闲", "人气", "火爆"]
    };
  }
};
</script>
<style scoped lang="less">
.tab {
  background-color: #fff;
  margin-top: 10px;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 8px 15px 15px;
    box-sizing: border-box;
    h1 {
      font-size: 18px;
      .iconfont {
        font-size: 20px;
        color: #75a342;
      }
    }
    span {
      font-size: 15px;
      color: #75a342;
    }
  }
}
</style>
