<template>
  <div class="flashSale">
    <div class="title">
      <h1>
        <i class="iconfont icon-shuxian"></i>
        限时抢购
      </h1>
      <span>更多</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.flashSale {
  margin-top: 10px;
  background-color: #fff;
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
          color:#75a342;
      }
    }
    span {
      font-size: 15px;
      color: #75a342;
    }
  }
}
</style>
