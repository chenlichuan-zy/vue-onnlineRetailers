<template>
  <div class="top">
    <van-search placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "top",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    onSearch() {
      Toast("功能还未实现哦~");
    }
  }
};
</script>
<style scoped lang="less">
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-image: url("http://518taole.7-orange.cn/backImage.png");
  .van-search {
    padding: 6px;
    background: transparent !important;
  }
}
</style>
