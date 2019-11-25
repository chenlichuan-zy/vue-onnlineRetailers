<template>
  <div class="rightList">
    <van-tabs
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
      swipe-threshold:4
      v-model="active"
    >
      <van-tab v-for="goods in rightDataList" :title="goods.name" :key="goods.id">
        <ProductItem :goodsList="goodsList" :categoryTitle="categoryTitle" />
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
  props: {
    rightDataList: Array,
    currentIndex: Number
  },
  computed: {
    goodsList() {
      if (this.currentIndex == 0 && this.active == 0) {
        return this.rightDataList[this.active];
      }
      return this.rightDataList[this.active];
    },
    categoryTitle() {
      return this.rightDataList[this.active].name;
    }
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.rightList {
  width: 100%;
  height: calc(100vh - 100px);
  overflow: scroll;
  /deep/ .van-tabs__line {
    background-color: #28be57;
  }
  /deep/ .van-sticky--fixed {
    position: fixed;
    left: 20%;
  }
  /deep/ .van-ellipsis {
    font-size: 13px;
  }
}
</style>
